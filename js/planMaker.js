
let animationSpeed = 1000;
var adjustmentFactor = 200;

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
   //
    var projectFolder = 'css/img/'+projectFolder;
    var projectFolder = 'https://github.com/planmaker/planmaker/blob/master/css/img/HOTEL/09.jpg';
    var projectFullName = "Project Name: "+projectName;
    $('#portfolioDetails').empty();
    $.ajax({
    url : projectFolder,
    success: function (data) {
        
        portfolioDetails = '<div class="project1portfolio-gallery">'+'<h2 class="project-header">'+projectFullName+'</h2>'
        + '<ul class="porfolio">';
        var childs = '';
        
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|png|gif)$/) ) {
                childs+='<li class="portfolio-list">'+'<img src='+val+'>'+'</li>'
            } 
        });
        
        childs+='</ul>';
        portfolioDetails+=childs;
        
        $('#portfolioDetails').append(portfolioDetails);
        $('#portfolioDetails').css('transform', 'scale(1,1)');
        $('#portfolioDetails').addClass('project-details-opened');
        console.log(portfolioDetails);
    }
});
}
