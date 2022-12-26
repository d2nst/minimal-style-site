const burger = document.querySelectorAll('.burger-bar');
const showMenu = document.querySelector('.overlay');
const shadowBg = document.querySelector('.overlay-wrap');

burger.forEach((icon) => {
  icon.addEventListener('click', (e) => {
    icon.classList.toggle('open');
    showMenu.classList.toggle('visible');
    shadowBg.classList.toggle('shadow');
  });
});
