// adding the locomotive.js source code 
// it is useful for user experince while scrolling... it makes the scroll smoothes ....

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    // spaceBetween:0,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
  });
// });
 
// loader part

var loader = document.querySelector(".loader")
setTimeout(function(){
  loader.style.top="-100%"
},4200)