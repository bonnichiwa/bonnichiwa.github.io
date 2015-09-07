$(document).ready(function() {

  $('.port-img-1').mouseenter(function(){
    $('.tags-all-1').slideDown('slow');
    })
  .mouseleave(function(){
    $('.tags-all-1').slideUp('slow');
  })

  function changeColor(element, curNumber){
    curNumber++;

    if(curNumber > 4){
        curNumber = 1;
    }
    console.log(curNumber);
    element.addClass('color' + curNumber, 500);
    // So previous classes get removed.
    element.attr('class', 'color' + curNumber);
    setTimeout(function(){changeColor(element, curNumber)}, 1000);  
  }

  changeColor($('#circle'), 0);

});