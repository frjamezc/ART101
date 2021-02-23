/*
Author: Francisco Amezcua
Date: 02/22/21
Public License
*/

function sortHat(name) {
  var length = name.length;
  var mod = length % 4;
   switch(mod)
   {
    case 0:
      return "Gryffindor";
      break;
    case 1:
      return "Ravenclaw";
      break;
    case 2:
      return "Slytherin";
      break;
    case 3:
      return "Hufflepuff";
      break;
   }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function(){
  var name = document.getElementById('input').value;
  var house = sortHat(name);
  var newText = "<p>The Sorting Hat has sorted you into " + house + "</p>";
  document.getElementById("output").innerHTML = newText;
});
