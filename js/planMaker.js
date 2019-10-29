
let animationSpeed = 1000;
var adjustmentFactor = 200;

let imageportFolioMapping=
{
    "HOTEL":[...Array(25).keys()],
    "Jalgaon":[...Array(29).keys()],
    "JalgaonBunglow":[...Array(10).keys()],
    "Kasarabungalow":[...Array(33).keys()],
    "Valivali":[...Array(8).keys()],
    "Wada":[...Array(5).keys()],
    "wadaBunglow":[...Array(6).keys()],
    "Ulhasnagar":[...Array(4).keys()]
}


$('#home').on("click",function(){
    
   $('.portfolioDetails').css('transform', 'scale(0,0)');
   $('.projectportfolio').removeClass('project-details-opened');

    if(!$('.mobile-nav').is(":visible")){
        adjustmentFactor = 0;
    }
    
    $('html, body').animate({
        scrollTop: $(".homenav").offset().top - adjustmentFactor
    }, animationSpeed);
});

$('#hiw').on("click",function(){
   $('.projectportfolio').css('transform', 'scale(0,0)');
   $('.projectportfolio').removeClass('project-details-opened');


    if(!$('.mobile-nav').is(":visible")){
        adjustmentFactor = 0;
    }
    
    $('html, body').animate({
        scrollTop: $(".section-features").offset().top - adjustmentFactor
    }, animationSpeed);
});

$('#portfolio').on("click",function(){
    
  $('.projectportfolio').css('transform', 'scale(0,0)');
  $('.projectportfolio').removeClass('project-details-opened');

    
    if(!$('.mobile-nav').is(":visible")){
        adjustmentFactor = 40;
    }
    $('html, body').animate({
        scrollTop: $(".portfolio-section").offset().top- adjustmentFactor
    }, animationSpeed);
});

$('#contactus').on("click",function(){
    
$('.projectportfolio').css('transform', 'scale(0,0)');
  $('.projectportfolio').removeClass('project-details-opened');

    
    if(!$('.mobile-nav').is(":visible")){
        adjustmentFactor = 0;
    }
    
    $('html, body').animate({
        scrollTop: $(".section-form").offset().top- adjustmentFactor
    }, animationSpeed);
});

$('.mobile-nav').on("click",function(){
    
$('.projectportfolio').css('transform', 'scale(0,0)');
$('.projectportfolio').removeClass('project-details-opened');


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
    if(!$('.projectportfolio').hasClass('project-details-opened')){
            header.classList.remove("sticky-nav");
    }
  }
}

var portfolioElement = document.getElementsByClassName('projectportfolio');
portfolioElement.onscroll = function(){myFunction()}

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



function getPortfolioDetails(projectName,projectFolder){
   var projectFullName = "Project Name: "+projectName;
    $('#portfolioDetails').empty();
        portfolioDetails = '<div class="project1portfolio-gallery">'+'<h2 class="project-header">'+projectFullName+'</h2>'
        + '<ul class="porfolio">';
        var childs = '';
    var images = imageportFolioMapping[projectFolder];
    console.log(images);
    for(var i=1;i<images.length;i++){
            var imagePath = 'css/img/'+projectFolder+'/'+i+'.jpg';
                childs+='<li class="portfolio-list">'+'<img src='+imagePath+'>'+'</li>'
            }
    
        childs+='</ul>';
        portfolioDetails+=childs;
        
        $('#portfolioDetails').append(portfolioDetails);
        $('#portfolioDetails').css('transform', 'scale(1,1)');
        $('#portfolioDetails').addClass('project-details-opened');
        console.log(portfolioDetails);
}
