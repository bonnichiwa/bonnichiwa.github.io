$(document).ready(function() {

  $('.port-img').mouseenter(function(){
    $('.tags-all').slideDown('slow');
    })
  .mouseleave(function(){
    $('.tags-all').slideUp('slow');
  })

  $('.port-img-2').mouseenter(function(){
    $('.tags-all-2').slideDown('slow');
    })
  .mouseleave(function(){
    $('.tags-all-2').slideUp('slow');
  })

  $('.port-img-3').mouseenter(function(){
    $('.tags-all-3').slideDown('slow');
    })
  .mouseleave(function(){
    $('.tags-all-3').slideUp('slow');
  })

  $('.port-img-4').mouseenter(function(){
    $('.tags-all-4').slideDown('slow');
    })
  .mouseleave(function(){
    $('.tags-all-4').slideUp('slow');
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