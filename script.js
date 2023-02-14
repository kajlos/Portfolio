const mainNavList = document.querySelector('.main-nav__list');
const hamburgerButton = document.querySelector('.main-nav__hamburger');
hamburgerButton.addEventListener('click', () => {
  hamburgerButton.classList.toggle('open');
  mainNavList.classList.toggle('open');
});
