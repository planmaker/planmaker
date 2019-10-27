
let animationSpeed = 1000;
var adjustmentFactor = 200;

$('#home').on("click",function(){
    
    if(!$('.mobile-nav').is(":visible")){
        adjustmentFactor = 0;
    }
    
    $('html, body').animate({
        scrollTop: $(".homenav").offset().top - adjustmentFactor
    }, animationSpeed);
});

$('#hiw').on("click",function(){
    
    if(!$('.mobile-nav').is(":visible")){
        adjustmentFactor = 0;
    }
    
    $('html, body').animate({
        scrollTop: $(".section-features").offset().top - adjustmentFactor
    }, animationSpeed);
});

$('#portfolio').on("click",function(){
    
    if(!$('.mobile-nav').is(":visible")){
        adjustmentFactor = 40;
    }
    $('html, body').animate({
        scrollTop: $(".portfolio-section").offset().top- adjustmentFactor
    }, animationSpeed);
});

$('#contactus').on("click",function(){
    
    if(!$('.mobile-nav').is(":visible")){
        adjustmentFactor = 0;
    }
    
    $('html, body').animate({
        scrollTop: $(".section-form").offset().top- adjustmentFactor
    }, animationSpeed);
});

$('.mobile-nav').on("click",function(){
   $('.main-nav').animate({
       height:'toggle'
   });
});


// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header =document.getElementById("web-nav");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky-nav");
  } else {
    header.classList.remove("sticky-nav");
  }
}

id="intrested"

$('#intrested').on("click",function(){
    
    if(!$('.mobile-nav').is(":visible")){
        adjustmentFactor = 0;
    }
    
    $('html, body').animate({
        scrollTop: $(".section-form").offset().top- adjustmentFactor
    }, animationSpeed);
});

$('#more').on("click",function(){
    
    if(!$('.mobile-nav').is(":visible")){
        adjustmentFactor = 0;
    }
    
    $('html, body').animate({
        scrollTop: $(".portfolio-section").offset().top- adjustmentFactor
    }, animationSpeed);
});


