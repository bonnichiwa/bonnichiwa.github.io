var app = angular.module('portfolioApp', []);

app.directive('portThumbnail', function() {
  return {
    scope: {title : '=portTitle',
    link : '=portLink',
    image : '=portImg',
    tags : '=portTags'},
    templateUrl: 'port-thumbnail.html',
    transclude: true,
    controller: function() { },
  };
});

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