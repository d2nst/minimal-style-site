// menu 활성화
const menuActive = document.querySelectorAll('.overlay ul li a');

menuActive.forEach((element) => {
  element.addEventListener('click', function () {
    menuActive.forEach((nav) => nav.classList.remove('active'));
    this.classList.add('active');
  });
});

// 햄버거바 클릭 시, 엑스표시 변함 & 메뉴바 열림
const burger = document.querySelector('.burger-bar');
const overlay = document.querySelector('.overlay');

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  overlay.classList.toggle('visible');
});

overlay.addEventListener('click', () => {
  burger.classList.toggle('open');
  overlay.classList.toggle('visible');
});

// gsap
gsap.registerPlugin(ScrollTrigger);

gsap.to('.design__left', {
  yPercent: -50,
  ease: 'none',
  scrollTrigger: {
    trigger: '.main__design',
    scrub: true,
  },
});

// AOS animation
AOS.init();

// swiper JS
const swiper = new Swiper('.swiper', {
  // Default parameters
  slidesPerView: 4,
  spaceBetween: 15,
  autoplay: {
    delay: 3000,
  }, //자동 재생 여부
  loop: true,
});

// prevNext Btn
