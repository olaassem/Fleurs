//Header Animation Timeline
let hdrTimeline = gsap.timeline({ defaults:{ opacity: 0 } });

hdrTimeline.from('.background-pattern',{ duration: 1, y: 80 })
  .from('.img-flowers', { duration: 10, y: 80, ease: Elastic.easeOut.config(1, 0.3), y: 20}, "-=0.8" )
  .from('.img-woman', { duration: 10, y: -80, ease: Elastic.easeOut.config(1, 0.3), y: -20}, "-=10")
  .from('.hdr-stagger', { duration: 1, y: -50, stagger: 0.4 }, "-=9");



