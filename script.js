const toggleButton = document.getElementById('toggle-button');
let roundBg = document.querySelector('.round-toggle')
const switchT = document.querySelector('input[type="checkbox"]')

function switchMOde(event) {
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark')
        roundBg.classList.add('change')
    }
    else{
        document.documentElement.setAttribute('data-theme', 'light')
        roundBg.classList.remove('change')
    }
}

switchT.addEventListener('change', switchMOde)

// swipper stle
var swipers = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });
// end of swipper style

// service swiper
var swiper = new Swiper(".mySwiper-service", {
      cssMode: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      mousewheel: true,
      keyboard: true,
    });
// end of service swiper

let wrappers = document.querySelectorAll('.wrapper')
let menuBtn = document.querySelector('.menu-wrapper')
let navBar = document.querySelector('.nav-bar')
menuBtn.addEventListener('click', ()=>{
  menuBtn.classList.toggle('change');
  navBar.classList.toggle('change')
  wrappers.forEach((wrapper)=>{
    wrapper.classList.toggle('target')
  } )
})
wrappers.forEach((wrapper)=>{
  wrapper.addEventListener('click', ()=>{
    menuBtn.classList.remove('change')
    navBar.classList.remove('change')
    wrappers.forEach((element) =>{
      element.classList.remove('target')
    })
  })
})

// spinner loader
window.addEventListener('load', ()=>{
  let loader =  document.querySelector('.spinner-wrapper')
  loader.classList.add('loaded')
})
// end of spinner loader

// social links
var socialLinks = document.querySelectorAll('.social-link');
socialLinks.forEach((link) => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    window.open(link.href, '_blank');
  });
});
// end of social links
