const toggle = document.getElementsByClassName("navbar-toggle");

toggle[0].addEventListener("click", function(event) {
  event.preventDefault();
  this.classList.toggle("is-active");
});

const closeNavbarMobile = document.getElementsByClassName("close");

closeNavbarMobile[0].addEventListener("click", function(event) {
  event.preventDefault();
  toggle[0].classList.remove("is-active");
});
const swiper = new Swiper('.first-swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
var swiperSecondary = new Swiper('.second-swiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});