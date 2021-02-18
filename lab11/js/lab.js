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
  })
  $('#problems button').click(function(){
    $('#problems .special').toggle();
  })
  $('#results button').click(function(){
    $('#results .special').toggle();
  })
});
