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

// anime.timeline()
//   .add({
//     targets: '.title-animation-2 .letter',
//     translateY: [120, 0],
//     opacity: [0, 1],
//     easing: "easeOutExpo",
//     duration: 2000,
//     delay: (el, i) => 600 + 50 * i
// });

const blocks = document.getElementsByClassName("block");
const main = document.getElementsByClassName("slider");
let hs = new HorizontalScroll.default({
  blocks: blocks,
  container: main,
  isAnimated: true,
  spring: 0.08,
});

$(document).ready(function () {
  window.addEventListener('resize', updateMin);
  updateMin();

  function updateMin() {
    if (window.matchMedia("(max-width: 736px)").matches) {
      const element = $('.horizontal-scroll').html();

      $('.horizontal-scroll').removeClass('horizontal-scroll').removeAttr("style");

      $('.slider').empty().remove();
      $('.wrapper').append(element);
      // $('[class*="block-"]').removeAttr("style");
    }
  }

  let textWrapper = document.querySelector('.title-animation-1');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  let textWrapper2 = document.querySelector('.title-animation-2');
  textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  anime.timeline()
    .add({
      targets: '.letter',
      translateY: [120, 0],
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 2000,
      delay: (el, i) => 1200 + 50 * i
  });
  
  let anim = new TimelineMax();

  anim.from(".line-reveal h1", 1.8, {
    y: 200,
    ease: Expo.easeInOut,
    delay: 1,
    skewY: 0.8,
  });

  let tl1 = new TweenMax.staggerFrom(".logo", 2, {
    opacity: 0,
    y: 30,
    ease: Expo.easeInOut,
  }, 0.1);

  let tl2 = new TweenMax.staggerFrom(".nav-list li", 2, {
    opacity: 0,
    y: 30,
    ease: Expo.easeInOut,
    delay: 0.2
  }, 0.1);

  let tl3 = new TweenMax.staggerFrom(".scroll span", 2, {
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut,
    delay: 0.3
  }, 0.1);

  let tl4 = new TweenMax.staggerFrom(".block", 2, {
    y: 100,
    opacity: 0,
    ease: Expo.easeInOut,
    delay: 0.6
  }, 0.1);
});
