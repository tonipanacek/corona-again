const handleRegisterFormSubmission = () => {
  const registerForm = document.querySelector(".form-register");
  const registerBox = document.querySelector('.register');
  const autoplayBox = document.querySelector('.autoplay');
  const alreadyRegisteredBox = document.querySelector('.already-registered');
  const beginAgainBtn = document.querySelector('#begin-again-btn');
  const videoElement = document.querySelector('#digital-experience-bg-video');

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
    changeOutVideo();
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
    autoplayBox.querySelector('.close').addEventListener('click', () => {
      autoplayBox.classList.add('hidden');
    })
    if (ccRegistered) {
      registerBox.classList.add('hidden');
      alreadyRegisteredBox.classList.remove('hidden');
      autoplayBox.classList.remove('hidden');
      setTimeout(() => {
        alreadyRegisteredBox.classList.remove('transparent');
        // autoplayBox.classList.remove('transparent');
      }, 7000);
      setTimeout(() => {
        autoplayBox.classList.remove('transparent');
      }, 8000);
      beginAgainBtn.addEventListener('click', handleClick);
    } else {
      registerBox.classList.remove('hidden');
      autoplayBox.classList.remove('hidden');
      setTimeout(() => {
        registerBox.classList.remove('transparent');
        // autoplayBox.classList.remove('transparent');
      }, 7000)
      setTimeout(() => {
        autoplayBox.classList.remove('transparent');
      }, 8000);
      registerForm.addEventListener("submit", handleSubmit);
    }
  }
}

export { handleRegisterFormSubmission }
