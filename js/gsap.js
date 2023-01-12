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
