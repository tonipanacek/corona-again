const handleRegisterFormSubmission = () => {
  const registerForm = document.querySelector(".form-register");
  const registerBox = document.querySelector('.register');
  const alreadyRegisteredBox = document.querySelector('.already-registered');
  const beginAgainBtn = document.querySelector('#begin-again-btn');
  const videoElement = document.querySelector('#digital-experience-bg-video');

  const changeOutVideo = () => {
    const loadingSrc = '/assets/videos/loading.mp4';
    alreadyRegisteredBox.classList.add('transparent');
    setTimeout(() => {
      videoElement.firstElementChild.src = loadingSrc;
      videoElement.loop = true;
      videoElement.load();
      videoElement.play();
    }, 500)
  }

  const handleClick = (e) => {
    e.preventDefault();
    changeOutVideo();
    setTimeout(() => {
      location.replace(e.target.href);
    }, 2000);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let formData = new FormData(registerForm)
    fetch('/digital-experience/chapter-1', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    }).then(() => {
      console.log('Form successfully submitted')
      document.cookie = 'cc-registered=true'
    }).catch((error) => alert(error))
  }

  if (registerForm) {
    if (document.cookie.split('; ').find(row => row.startsWith('cc-registered'))) {
      registerBox.classList.add('hidden');
      setTimeout(() => {
        alreadyRegisteredBox.classList.remove('transparent');
      }, 7000);
      beginAgainBtn.addEventListener('click', handleClick);
    } else {
      setTimeout(() => {
        registerBox.classList.remove('transparent');
      }, 7000)
      registerForm.addEventListener("submit", handleSubmit);
    }
  }
}

export { handleRegisterFormSubmission }
