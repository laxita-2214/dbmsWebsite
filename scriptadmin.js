let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

document.querySelector('#login-btn').onclick = () =>{
  document.querySelector('.login-form-container').classList.toggle('active');
}
document.querySelector('#addvehicle').onclick = () =>{
  document.querySelector('.login-form-container').classList.toggle('active');
}
document.querySelector('#removevehicle').onclick = () =>{
  document.querySelector('.login-form-container').classList.toggle('active');
}
document.querySelector('#updatevehicle').onclick = () =>{
  document.querySelector('.login-form-container').classList.toggle('active');
}
document.querySelector('#adddriver').onclick = () =>{
  document.querySelector('.login-form-container').classList.toggle('active');
}
document.querySelector('#removedriver').onclick = () =>{
  document.querySelector('.login-form-container').classList.toggle('active');
}
document.querySelector('#checkbooking').onclick = () =>{
  document.querySelector('.login-form-container').classList.toggle('active');
}
document.querySelector('#signup-btn').onclick = () =>{
    document.querySelector('.login-form-container').classList.remove('active');
  document.querySelector('.signup-form-container').classList.toggle('active');
}
document.querySelector('#close-login-form').onclick = () =>{
  document.querySelector('.login-form-container').classList.remove('active');
}

document.querySelector('#close-signup-form').onclick = () =>{
  document.querySelector('.signup-form-container').classList.remove('active');
}
window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 0){
    document.querySelector('.header').classList.add('active');
  }else{
    document.querySelector('.header').classList.remove('active');
  };

};



var swiper = new Swiper(".review-slider", {
  grabCursor: true,
  centeredSlides: true,  
  spaceBetween: 20,
  loop:true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});