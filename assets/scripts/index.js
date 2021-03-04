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

$(document).ready(function () {
  let textWrapper = document.querySelector('.header-1');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  let textWrapper2 = document.querySelector('.header-2');
  textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  const tl = new TimelineMax();

  tl.from(".loader", 1.6, {
    scaleY: "0%",
    y: 80,
    ease: Expo.easeInOut,
    delay: 1,
    transformOrigin: "50% 100%"
  });

  tl.to(".loader", 1.6, {
    height: "20vh",
    scaleY: "0%",
    ease: Expo.easeInOut,
    transformOrigin: "0% -100%"
  });

  if (window.matchMedia("(max-width: 415px)").matches) {
    TweenMax.to(".wrapper", 2, {
      top: "-116%",
      ease: Expo.easeInOut,
      delay: 3.6
    });
  } else {
    TweenMax.to(".wrapper", 2, {
      top: "-110%",
      ease: Expo.easeInOut,
      delay: 3.6
    });
  }

  TweenMax.to(".box", 2.4, {
    y: "-100%",
    ease: Expo.easeInOut,
    delay: 3.8,
  });

  anime.timeline()
    .add({
      targets: '.letter',
      translateY: [120, 0],
      // translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 2000,
      delay: (el, i) => 4800 + 50 * i
    })

  let textRev = new TimelineMax();

  textRev.from(".line-reveal h2", 1.8, {
    y: 300,
    ease: Expo.easeInOut,
    delay: 4.5,
    skewY: 10,
  });

  let tl2 = new TweenMax.staggerFrom(".logo", 2, {
    opacity: 0,
    y: 30,
    ease: Expo.easeInOut,
    delay: 4.0
  }, 0.1);

  let tl3 = new TweenMax.staggerFrom(".nav-list li", 2, {
    opacity: 0,
    y: 30,
    ease: Expo.easeInOut,
    delay: 4.1
  }, 0.1);

  let t14 = new TimelineMax({
    paused: true
  });

  TweenMax.staggerFrom(".media ul li", 2, {
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut,
    delay: 3.9
  }, 0.1);
})