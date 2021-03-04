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

const textWrapper1 = document.querySelector('.header-1');
textWrapper1.innerHTML = textWrapper1.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline()
  .add({
    targets: '.header-1 .letter',
    translateY: [200, 0],
    // translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 2000,
    delay: (el, i) => 80 * i,
});


const textWrapper2 = document.querySelector('.header-2');
textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline()
.add({
  targets: '.header-2 .letter',
  translateY: [200, 0],
  opacity: [0, 1],
  easing: "easeOutExpo",
  duration: 2000,
  delay: (el, i) => 80 * i,
});


// let textWrapper = document.querySelector('.link-animation');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter2'>$&</span>");

// document.addEventListener('DOMContentLoaded', () => {
//   // LINK
//   let link = document.querySelector('.link-animation');

//   link.addEventListener('mouseenter', () => {

//     let letter2 = link.querySelectorAll('.letter2');
//     console.log("ok")
    
//     let tl = 	anime.timeline({
//       easing: 'easeInExpo',
// 		})

//     tl.add({
//       targets: letter2,
// 			translateY: [0, -30],
// 			opacity: [1, 0],
// 			duration: 350,
// 			delay: (el, i) => 30 * i,
//     })
    
// 		tl.add({
//       targets: letter2,
// 			translateY: [40, 0],
// 			opacity: [0, 1],
// 			duration: 350,
// 			delay: (el, i) => 30 * i,
// 		})
//   })
// })

document.addEventListener('DOMContentLoaded', () => {
  anime.timeline({

  })
  .add({
    targets: '.cover',
    left: ['-100%', '100%'],
    easing: 'easeOutExpo',
    duration: 2000,
    delay: (el, i) => 200 * i,
  })
  .add({
    targets: '.cover-2',
    left: ['-100%', '100%'],
    easing: 'easeOutExpo',
    duration: 2000,
    delay: (el, i) => 200 * i,
  })

})