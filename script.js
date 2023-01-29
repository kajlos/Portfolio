const mainNavList = document.querySelector('.main-nav__list');
const hamburgerButton = document.querySelector('.main-nav__hamburger');
hamburgerButton.addEventListener('click', () => {
  mainNavList.classList.toggle('open');
});
