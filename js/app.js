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

  $('.port-img-5').mouseenter(function(){
    $('.tags-all-5').slideDown('slow');
    })
  .mouseleave(function(){
    $('.tags-all-5').slideUp('slow');
  })

  $('.port-img-6').mouseenter(function(){
    $('.tags-all-6').slideDown('slow');
    })
  .mouseleave(function(){
    $('.tags-all-6').slideUp('slow');
  })

  $('.port-img-7').mouseenter(function(){
    $('.tags-all-7').slideDown('slow');
    })
  .mouseleave(function(){
    $('.tags-all-7').slideUp('slow');
  })

  $('.port-img-8').mouseenter(function(){
    $('.tags-all-8').slideDown('slow');
    })
  .mouseleave(function(){
    $('.tags-all-8').slideUp('slow');
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