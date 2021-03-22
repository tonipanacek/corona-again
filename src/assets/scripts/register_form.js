const handleRegisterFormSubmission = () => {
  const registerForm = document.querySelector(".form-register");

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   let formData = new FormData(registerForm[0])
  //   fetch('/', {
  //     method: 'POST',
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: new URLSearchParams(formData).toString()
  //   }).then(() => console.log('Form successfully submitted')).catch((error) =>
  //     alert(error))
  // }

  if (registerForm) {
    setTimeout(() => {
      document.querySelector('.register').classList.remove('transparent');
    }, 7000)
    // registerForm.addEventListener("submit", handleSubmit);
  }
}

export { handleRegisterFormSubmission }
