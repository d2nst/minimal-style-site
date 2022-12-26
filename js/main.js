const burger = document.querySelector('.burger-bar');
const showMenu = document.querySelector('.overlay');
const shadowBg = document.querySelector('.overlay-wrap');

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  showMenu.classList.toggle('visible');
  shadowBg.classList.toggle('shadow');
});

//

const menuActive = document.querySelectorAll('.site-menu li a');

menuActive.forEach((element) => {
  element.addEventListener('click', function () {
    menuActive.forEach((nav) => nav.classList.remove('active'));
    this.classList.add('active');
  });
});
