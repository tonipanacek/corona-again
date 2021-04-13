const toggleMobileMenu = () => {
  const body = document.body;
  const menuBtn = document.querySelector('#mobile-menu');
  const closeBtn = document.querySelector('#close-menu');
  const mobileMenu = document.querySelector('.mobile-nav-items');

  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      body.classList.add('noscroll');
      mobileMenu.classList.remove('hidden');
    })
    closeBtn.addEventListener('click', () => {
      body.classList.remove('noscroll');
      mobileMenu.classList.add('hidden');
    })
  }
}

export { toggleMobileMenu }
