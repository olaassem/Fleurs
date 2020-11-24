gsap.from('.background-pattern', {
  opacity: 0,
  duration: 1,
  y: 80,
});

gsap.from('.hdr-stagger', {
  opacity: 0,
  duration: 1,
  y: -50,
  stagger: 0.6
});

gsap.from('.img-woman', {
  opacity: 0,
  duration: 5,
  y: -50,
  ease: Elastic.easeOut.config(1, 0.3), y: -80
});

gsap.from('.img-flowers', {
  opacity: 0,
  duration: 30,
  y: 50,
  ease: Elastic.easeOut.config(1, 0.3), y: 100
});

