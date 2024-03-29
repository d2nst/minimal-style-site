// 현재 페이지 URL을 가져와서 활성 페이지를 식별하고, 해당 페이지에 해당하는 내비게이션 링크에 active 클래스를 추가 또는 제거하는 기능을 수행
const currentURL = window.location.href;
const activePage =
  currentURL.substring(currentURL.lastIndexOf('/') + 1) || 'index.html';
const navLinks = document
  .querySelectorAll('.overlay ul li a')
  .forEach((link) => {
    if (link.href.includes(`${activePage}`)) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
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

// 전체 title 부분 애니메이션 사용
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
const gridItems = document.querySelectorAll('.grid-item');
const grid = document.querySelector('.grid');

// Isotope 초기화 코드를 실행하도록 조건을 추가, .grid 요소가 해당 페이지에 존재하는 경우에만 Isotope 초기화를 수행하도록 조건문을 사용
if (grid) {
  const iso = new Isotope(grid, {
    itemSelector: '.grid-item',
    percentPosition: true,
  });

  const filterItems = document.querySelectorAll('.filters li');
  filterItems.forEach((item) => {
    item.addEventListener('click', function () {
      filterItems.forEach((filterItem) => {
        filterItem.classList.remove('on');
      });
      this.classList.add('on');

      const selector = this.getAttribute('data-filter');
      iso.arrange({ filter: selector });
    });
  });
}
// jarallax - elements.html
jarallax(document.querySelectorAll('.banner'), {
  speed: 0.2,
});
