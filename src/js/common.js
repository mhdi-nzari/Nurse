// $(document).ready(function () {
//   $(".header--main--menu--ul__link").hover(
//     function () {
//       $(this).children[1].stop(true).delay(1500).slideDown(500);
//      },
//      function () {

//           $(this).children[1].stop(true).delay(1500).slideUp(500);
//     }
//   );
// });

// === Services
const services_item = document.querySelectorAll(".service--box");
services_item.forEach((service, idx) => {
  service.addEventListener("mouseover", () => {
    // --- add selected class
    if (!service.classList.contains("services__item--selected")) {
      service.classList.add("services__item--selected");
    }

    // --- remove selected class from siblings
    services_item.forEach((el, index) => {
      if (index !== idx) {
        if (el.classList.contains("services__item--selected")) {
          el.classList.remove("services__item--selected");
        }
      }
    });
  });
});

const swiper_video = new Swiper('#swiper_video', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  autoplay: {
    delay: 3000,
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});
const swiper_slider = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  autoplay: {
    delay: 3000,
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});