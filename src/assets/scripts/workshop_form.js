const handleWorkshopForm = () => {
  const workshopForm = document.querySelector('.form-workshops');
  const afterMessage = document.querySelector('.after-text');

  const handleSubmit = (e) => {
    e.preventDefault()
    let formData = new FormData(workshopForm.querySelector('form'))
    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    }).then(() => {
      workshopForm.classList.add('transparent');
      setTimeout(() => {
        workshopForm.classList.add('hidden');
        afterMessage.classList.remove('hidden');
      }, 1000);
      setTimeout(() => {
        afterMessage.classList.remove('transparent');
      }, 1500);
    }).catch((error) => alert(error))
  }

  if (workshopForm) {
    workshopForm.addEventListener("submit", handleSubmit);
  }
}

export { handleWorkshopForm }
