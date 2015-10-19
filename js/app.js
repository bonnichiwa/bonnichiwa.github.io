angular.module('portfolioApp', []);

new WOW().init();

$(document).ready(function() {

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
      || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
       if (target.length) {
         $('html,body').animate({
           scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  })

  $('.port-img').mouseenter(function(){
    $('.col-sm-4').addClass('animated bounce');
    })
  .mouseleave(function(){
    $('.col-sm-4').addClass('animated bounce');
  })

  function changeColor(element, curNumber){
    curNumber++;

    if(curNumber > 5){
        curNumber = 1;
    }
    element.addClass('color' + curNumber, 500);
    // So previous classes get removed.
    element.attr('class', 'color' + curNumber);
    setTimeout(function(){changeColor(element, curNumber)}, 1000);  
  }

  changeColor($('#circle'), 0);

});