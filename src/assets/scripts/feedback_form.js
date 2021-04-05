const handleFeedbackForm = () => {
  const feedbackForm = document.querySelector('.form-feedback');
  const afterMessage = document.querySelector('.after-text');

  const handleSubmit = (e) => {
    e.preventDefault()
    let formData = new FormData(feedbackForm.firstElementChild)
    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    }).then(() => {
      feedbackForm.classList.add('transparent');
      setTimeout(() => {
        feedbackForm.classList.add('hidden');
        afterMessage.classList.remove('hidden');
        afterMessage.classList.remove('transparent');
      }, 1500);
    }).catch((error) => alert(error))
  }

  if (feedbackForm) {
    feedbackForm.addEventListener("submit", handleSubmit);
  }
}

export { handleFeedbackForm }
