const toggleMobileMenu = () => {
  const menuBtn = document.querySelector('#mobile-menu');
  const closeBtn = document.querySelector('#close-menu');
  const mobileMenu = document.querySelector('.mobile-nav-items');

  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('hidden');
    })
    closeBtn.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    })
  }
}

export { toggleMobileMenu }
