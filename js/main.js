// menu 활성화
const menuActive = document.querySelectorAll('header ul li a');

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

// gsap -
gsap.registerPlugin(ScrollTrigger);

gsap.to('.design__left', {
  yPercent: -50,
  ease: 'none',
  scrollTrigger: {
    trigger: '.main__design',
    scrub: true,
  },
});

gsap.to('.season .img__top', {
  yPercent: -100,
  ease: 'none',
  scrollTrigger: {
    trigger: '.season .season__img',
    scrub: true,
  },
});

gsap.to('.seasonTwo .img__top', {
  yPercent: -100,
  ease: 'none',
  scrollTrigger: {
    trigger: '.seasonTwo .season__img',
    scrub: true,
  },
});

gsap.to('.box', {
  duration: 1,
  y: -80,
  stagger: 0.3,
  opacity: 1,
  ease: 'power4.easeOut',
});

// AOS animation
AOS.init();

// swiper JS - #home, #elements, .testimonials, #contact
const swiper = new Swiper('#home .swiper', {
  // Default parameters
  slidesPerView: 4,
  spaceBetween: 15,
  autoplay: {
    delay: 3000,
  },
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const newSwiper = new Swiper('#elements .slider .swiper', {
  // Default parameters
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
});

const peopleSwiper = new Swiper('.testimonials .swiper', {
  // Default parameters
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 3000,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
});

const contactSwiper = new Swiper('#contact .clients .swiper', {
  slidesPerView: 5,
  spaceBetween: 5,
  loop: true,
});

//isotope - portfolio.html
$('.grid').isotope({
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: '.grid-item',
  percentPosition: true,
});

$('.filters li').click(function () {
  $('.filters li').removeClass('on');
  $(this).addClass('on');

  const selector = $(this).attr('data-filter');
  $('.grid').isotope({
    filter: selector,
  });
});

// jarallax - elements.html
jarallax(document.querySelectorAll('.banner'), {
  speed: 0.2,
});
