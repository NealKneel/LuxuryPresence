
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 0,
    centeredSlides: false,
    grabCursor: true,
    keyboard: {
        enabled: true,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

ScrollReveal({ distance: '5rem', reset: true });
ScrollReveal().reveal('.top', {origin: 'top'});
ScrollReveal().reveal('.bottom', {origin: 'bottom'});
ScrollReveal().reveal('.right', {origin: 'right'});
ScrollReveal().reveal('.left', {origin: 'left'});
ScrollReveal().reveal('.scroll-reveal-1');
ScrollReveal().reveal('.scroll-reveal-2', {delay: 500});
ScrollReveal().reveal('.scroll-reveal-3', {delay: 600});
ScrollReveal().reveal('.scroll-reveal-4', {delay: 700});
ScrollReveal().reveal('.scroll-reveal-5', {delay: 800});
ScrollReveal().reveal('.scroll-reveal-6', {delay: 900});
ScrollReveal().reveal('.scroll-reveal-7', {delay: 1000});
ScrollReveal().reveal('.scroll-reveal-8', {delay: 1100});
ScrollReveal().reveal('.scroll-reveal-9', {delay: 1200});