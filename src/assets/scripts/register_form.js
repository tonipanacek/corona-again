const handleRegisterFormSubmission = () => {
  const registerForm = document.querySelector(".form-register");
  const registerBox = document.querySelector('.register');
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
    }, 500);
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
      const oneMonth = new Date(
        new Date().getFullYear(),
        new Date().getMonth() + 1,
        new Date().getDate()
      ).toUTCString();
      console.log(oneMonth);
      document.cookie = `cc-registered=true;expires=${oneMonth}`;
      changeOutVideo();
      setTimeout(() => {
        location.replace(registerForm.firstElementChild.action);
      }, 2000);
    }).catch((error) => alert(error))
  }

  if (registerForm) {
    if (document.cookie.split('; ').find(row => row.startsWith('cc-registered'))) {
      registerBox.classList.add('hidden');
      alreadyRegisteredBox.classList.remove('hidden');
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
