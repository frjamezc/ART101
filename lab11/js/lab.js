/*
  author: Francisco Amezcua
  date: 17 February 2021
  license: MIT
*/

$(document).ready(function() { // Alter document
  $('#challenge, #problems, #results').append(
    $(document.createElement('button')).prop({
      type: 'button',
      innerHTML: 'Press me'
    })
  );
  $('#challenge button').click(function(){
    $('#challenge .special').toggle();
    $('#challenge button').css('background-color', 'white');
    $('#problems button').css('background-color','blue');
  })
  $('#problems button').click(function(){
    $('#problems .special').toggle();
    $('#problems button').css('background-color', 'white');
    $('#challenge button').css('background-color','red');
  })
  $('#results button').click(function(){
    $('#results .special').toggle();
  })
});
