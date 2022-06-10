var swiper = new Swiper(".slide-content", {  display: flex;
  flex-wrap: wrap;

    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {  display: flex;
  flex-wrap: wrap;

      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {  display: flex;
  flex-wrap: wrap;

      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{  display: flex;
  flex-wrap: wrap;

        0: {  display: flex;
  flex-wrap: wrap;

            slidesPerView: 1,
        },
        520: {  display: flex;
  flex-wrap: wrap;

            slidesPerView: 2,
        },
        950: {  display: flex;
  flex-wrap: wrap;

            slidesPerView: 3,
        },
    },
  });