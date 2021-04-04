const handleFeedbackForm = () => {
  const feedbackForm = document.querySelector('.form-feedback');

  const handleSubmit = (e) => {
    e.preventDefault()
    let formData = new FormData(feedbackForm.firstElementChild  )
    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    }).then(() => {
      setTimeout(() => {
        console.log('hi toni');
      }, 1000);
    }).catch((error) => alert(error))
  }

  if (feedbackForm) {
    feedbackForm.addEventListener("submit", handleSubmit);
  }
}

export { handleFeedbackForm }
