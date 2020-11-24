gsap.from('.background-pattern', {
  opacity: 0,
  duration: 25,
  y: -50,
  ease: Elastic.easeOut.config(1, 0.3), y: 300
});

gsap.from('.hdr-stagger', {
  opacity: 0,
  duration: 2,
  y: -50,
  stagger: 0.6
});

