document.addEventListener("DOMContentLoaded", function () {
  const slideImages = [
    { src: "assets/img/corporate/kusuma.png", alt: "Image 1" },
    { src: "assets/img/corporate/mnc.png", alt: "Image 2" },
    { src: "assets/img/corporate/kdi.png", alt: "Image 9" },
    { src: "assets/img/corporate/uin-suka.png", alt: "Image 3" },
    { src: "assets/img/corporate/uii.png", alt: "Image 4" },
    { src: "assets/img/corporate/uad.png", alt: "Image 5" },
    { src: "assets/img/corporate/smk-dr-sutomo-temanggung.png", alt: "Image 6" },
    { src: "assets/img/corporate/ruhui-rahayu.png", alt: "Image 7" },
    { src: "assets/img/corporate/polita.png", alt: "Image 8" },
    { src: "assets/img/corporate/gides.jpg", alt: "Image 9" },
    { src: "assets/img/corporate/avo.png", alt: "Image 9" },
    { src: "assets/img/corporate/aveon.png", alt: "Image 9" },
    { src: "assets/img/corporate/amikom.png", alt: "Image 9" },
    { src: "assets/img/corporate/uad.png", alt: "Image 9" },
  ];

  // Initialize Swiper with virtual slides
  new Swiper(".partner-slider", {
    speed: 2000,
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    spaceBetween: 10,
    virtual: {
      slides: slideImages.map(
        (image) =>
          `<div class="swiper-slide"><img src="${image.src}" alt="${image.alt}"></div>`
      ),
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 60,
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 80,
      },
    },
  });
});
