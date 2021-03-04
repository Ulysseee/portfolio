$(document).ready(function () {
  $('.background-landing path').each(function () {
    anime({
      targets: this,
      d: this.getAttribute('data-move'),
      easing: 'easeInOutSine',
      duration: anime.random(4000, 8000),
      loop: true,
      direction: 'alternate'
    });
  });
  
  let tl1 = new TweenMax.staggerFrom(".logo", 2, {
    opacity: 0,
    y: 30,
    ease: Expo.easeInOut,
    delay: 0.1
  }, 0.1);
  
  let tl2 = new TweenMax.staggerFrom(".nav-list li", 2, {
    opacity: 0,
    y: 30,
    ease: Expo.easeInOut,
    delay: 0.2
  }, 0.1);
  
  let textRev = new TimelineMax();

  if (window.matchMedia("(max-width: 415px)").matches) {
    textRev.from(".line-reveal h1", 1.8, {
      y: 490,
      ease: Expo.easeInOut,
      delay: 0,
      skewY: 10,
    });
  } else {
    textRev.from(".line-reveal h1", 1.8, {
      y: 320,
      ease: Expo.easeInOut,
      delay: 0,
      skewY: 10,
    });
  }
})
