import Player from '@vimeo/player';

const handleRegisterFormSubmission = () => {
  const registerForm = document.querySelector(".form-register");
  const registerBox = document.querySelector('.register');
  const alreadyRegisteredBox = document.querySelector('.already-registered');
  const beginAgainBtn = document.querySelector('#begin-again-btn');
  // const videoElement = document.querySelector('#digital-experience-bg-video');

  const changeOutVideo = () => {
    const loadingSrc = '/assets/videos/loading.mp4';
    alreadyRegisteredBox.classList.add('transparent');
    registerBox.classList.add('transparent');
    setTimeout(() => {
      videoElement.firstElementChild.src = loadingSrc;
      videoElement.loop = true;
      videoElement.load();
      videoElement.play();
    }, 1000);
  }

  const handleClick = (e) => {
    e.preventDefault();
    // changeOutVideo();
    setTimeout(() => {
      location.href = e.target.href;
    }, 3000);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let formData = new FormData(registerForm.firstElementChild  )
    fetch('/digital-experience/chapter-1', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    }).then(() => {
      localStorage.setItem('cc-registered', 'true');
      changeOutVideo();
      setTimeout(() => {
        location.replace(registerForm.firstElementChild.action);
      }, 2000);
    }).catch((error) => alert(error))
  }

  if (registerForm) {
    const ccRegistered = localStorage.getItem('cc-registered');
    if (ccRegistered) {
      registerBox.classList.add('hidden');
      alreadyRegisteredBox.classList.remove('hidden');
      setTimeout(() => {
        alreadyRegisteredBox.classList.remove('transparent');
      }, 7000);
      // beginAgainBtn.addEventListener('click', handleClick);
    } else {
      registerBox.classList.remove('hidden');
      setTimeout(() => {
        registerBox.classList.remove('transparent');
      }, 7000)
      registerForm.addEventListener("submit", handleSubmit);
    }
  }
}

const initVimeo = () => {
  const vimeoID = 532319055;
  const videoDiv = document.querySelector('.video-experience');
  // const videoHeader = document.querySelector('.experience-header');
  if (videoDiv) {
    const videoName = videoDiv.id;
    const player = new Player(videoName, {
      id: vimeoID,
      autoplay: true
    });

    player.on('play', () => {
      console.log('playing')
    })
  }
}

const handleVimeo = () => {
  const videoDiv = document.querySelector('.video-experience');
  const goBtn = document.querySelector('.more');
  const videoHeader = document.querySelector('.experience-header');
  if (videoDiv) {
    setTimeout(() => videoHeader.classList.add('fade-out'), 2000);
    const videoName = videoDiv.id;
    const endTime = parseFloat(videoDiv.dataset.endTime);

    console.log(endTime);
    const player = new Player(videoName, {
        id: videoDiv.dataset.videoId,
        autoplay: true
    });
    player.on('timeupdate', function(data) {
      console.log(data.seconds)
      if (videoName === 'chapter-5') {
        if (data.seconds >= endTime) {
          player.pause()
        } else if (data.seconds >= 128) {
          goBtn.classList.remove('hidden');
          setTimeout(() => {
            goBtn.classList.remove('transparent');
          }, 1000);
        } else {
          goBtn.classList.add('hidden');
          goBtn.classList.add('transparent');
        }
      } else {
        if (data.seconds >= endTime) {
          player.pause();
          goBtn.classList.remove('hidden');
        } else {
          goBtn.classList.add('hidden');
        }
      }
    })
  }

}

export { handleVimeo }

