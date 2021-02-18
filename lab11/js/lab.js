/*
  author: Francisco Amezcua
  date: 17 February 2021
  license: MIT
*/

$(document).ready(function() { // Choose document
  $('#challenge, #problems, #results').append( // Add buttons to each div w/ ID
    // Button creation
    $(document.createElement('button')).prop({
      type: 'button',
      innerHTML: 'Press me'
    })
  );
  // Toggle hide() show() div of class special
  $('#challenge button').click(function(){
    $('#challenge .special').toggle();
    $('#challenge button').css('background-color', 'white'); // BONUS
    $('#problems button').css('background-color','blue'); // BONUS
  })
  $('#problems button').click(function(){
    $('#problems .special').toggle();
    $('#problems button').css('background-color', 'white'); // BONUS
    $('#challenge button').css('background-color','red'); // BONUS
  })
  $('#results button').click(function(){
    $('#results .special').toggle();
  })
});
