$(document).ready(function() {

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