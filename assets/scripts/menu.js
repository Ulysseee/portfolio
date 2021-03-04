$(document).ready(function(){
    $('.menu').hide();

    // ========== OUVERTURE DU MENU ==========
    $('body').on('click', '.burger-menu.open', function(){
        $('.burger-menu').toggleClass('close open');
        $('.menu').show();

        // ANIMATION DU SLIDE
        anime({
            targets: '.menu-before',
            width: '100%',
            duration: 600,
            easing: 'easeInOutQuart'
        });

        anime({
            targets: '.menu',
            width: '100%',
            duration: 800,
            easing: 'easeInOutQuart'
        });

        // ANIMATION DE LA CROIX
        anime({
            targets: '.burger-menu .line-1',
            rotate: '45deg',
            translateY: '10px',
        });

        anime({
            targets: '.burger-menu .line-2',
            rotate: '-45deg',
            translateY: '-10px',
        });

        // ANIMATION DES GROS LIENS
        setTimeout(function() {
            anime({
                targets: '.menu-link',
                opacity: 1,
                translateY: '-32px',
                delay: anime.stagger(100),
                easing: 'easeInOutQuart'
            });
        }, 200);
    });

    // ========== FERMETURE DU MENU ==========
    $('body').on('click', '.burger-menu.close', function(){
        $('.burger-menu').toggleClass('open close');

        // ANIMATION DES PETITS LIENS
        anime({
            targets: '.menu .inline-link',
            opacity: 0,
            delay: anime.stagger(100),
            easing: 'easeInOutQuart'
        });

        // ANIMATION DES GROS LIENS
        anime({
            targets: '.menu-link ',
            opacity: 0,
            translateY: '0px',
            delay: anime.stagger(100),
            easing: 'easeInOutQuart'
        });

        // ANIMATION DE LA CROIX
        anime({
            targets: '.burger-menu .line-1',
            rotate: '0deg',
            translateY: '0px',
        });

        anime({
            targets: '.burger-menu .line-2',
            rotate: '0deg',
            translateY: '0px',
        });

        // ANIMATION DU SLIDE
        setTimeout(function() {
            anime({
                targets: '.menu-before',
                width: '0%',
                duration: 800,
                easing: 'easeInOutQuart'
            });
    
            anime({
                targets: '.menu',
                width: '0%',
                duration: 600,
                easing: 'easeInOutQuart'
            });
        }, 600);

        // FINAL
        setTimeout(function(){
            $('.menu').hide();
        }, 1200);
    });

    // ========== CLICK SUR UN MENU-LINK ==========
    $('body').on('click', '.menu-link', function(){
        $('.burger-menu').toggleClass('open close');
        
        // ANIMATION DE LA CROIX
        anime({
            targets: '.burger-menu .line-1',
            rotate: '0deg',
            translateY: '0px',
        });

        anime({
            targets: '.burger-menu .line-2',
            rotate: '0deg',
            translateY: '0px',
        });

        // ANIMATION DES PETITS LIENS
        anime({
            targets: '.menu .inline-link ',
            opacity: 0,
            delay: anime.stagger(100),
            easing: 'easeInOutQuart'
        });

        // ANIMATION DES GROS LIENS
        anime({
            targets: '.menu-link ',
            opacity: 0,
            translateY: '0px',
            delay: anime.stagger(100),
            easing: 'easeInOutQuart'
        });

        // ANIMATION DU SLIDE
        setTimeout(function() {
            anime({
                targets: '.menu-before',
                width: '0%',
                duration: 800,
                easing: 'easeInOutQuart'
            });
    
            anime({
                targets: '.menu',
                width: '0%',
                duration: 600,
                easing: 'easeInOutQuart'
            });
        }, 600);
    });
});


// function delay(n) {
//     n = n || 2000;
//     return new Promise((done) => {
//         setTimeout(() => {
//             done();
//         }, n);
//     });
// }

// function pageTransitionLeft() {
//     let tl = gsap.timeline();

// 	tl.to(".loading-screen-left", {
// 		duration: 1,
// 		width: "100%",
// 		left: "0%",
// 		delay: 0.2,
//         // stagger: 0.05,
//         ease: "Expo.easeInOut",
// 	});
// 	tl.to(".loading-screen-left", {
// 		duration: 1,
// 		width: "100%",
// 		left: "0%",
// 		delay: 2,
//         // stagger: -0.05,
//         ease: "Expo.easeInOut",
// 	});
// 	tl.set(".loading-screen-left", { left: "0", width: "100%" });
// }

// function pageTransitionTop() {
//     let tl2 = gsap.timeline();

// 	tl2.to(".loading-screen-left", {
// 		duration: 1,
// 		width: "100%",
//         bottom: "100%",
//         // stagger: 0.8,
// 		delay: 1.4,
//         ease: "Expo.easeInOut",
// 	});
// 	tl2.to(".loading-screen-left", {
// 		duration: 1,
// 		width: "100%",
//         bottom: "100%",
//         // stagger: 0.8,
// 		delay: 0.8,
//         ease: "Expo.easeInOut",
// 	});
// 	tl2.set(".loading-screen-left", { bottom: "0", width: "0" });
// }


// function contentAnimation() {
//     var tl = gsap.timeline();
//     tl.from(".animate-this", { duration: 1, y: 30, opacity: 0, stagger: 0.4, delay: 0.2 });
// }

// $(function () {
//     barba.init({
//         sync: true,

//         transitions: [
//             {
//                 async leave(data) {
//                     const done = this.async();

//                     pageTransitionLeft();
//                     pageTransitionTop();
//                     await delay(1450);
//                     done();
//                 },
//             },
//         ],
//     });
// });
