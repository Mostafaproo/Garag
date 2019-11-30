$(document).ready(function(){

  $('.icon-bars').on('click',function(){
    $('.nav-bar').toggleClass('is-visible');
  })



  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    rtl:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})








});




