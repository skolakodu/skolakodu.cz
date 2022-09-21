const swiper = new Swiper('.swiper1', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 5,
    spaceBetween: 20,
    navigation: false,
    slidesOffsetBefore: 200,
    slidesOffsetAfter: 50,
    // breakpoints: {
    //   // when window width is >= 320px
    //   320: {
    //     slidesPerView: 1,
    //     slidesOffsetBefore: 20,
    //   },
    //   // when window width is >= 480px
    //   480: {
    //     slidesPerView: 3,
    //     slidesOffsetBefore: 20
    //   },
    //   // when window width is >= 640px
    //   640: {
    //     slidesPerView: 4,
    //     slidesOffsetBefore: 20
    //   }
    // }
});


const swiperReviews = new Swiper('.swiper2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: true,
});
