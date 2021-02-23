/*
Author: Francisco Amezcua
Date: 02/22/21
Public License
*/
var houses = ["Gryffindor", "Ravenclaw", "Slytherin", "Hufflepuff"];

function sortHat(name) {
  var length = name.length;
  var mod = length % 4;
  return houses[mod];
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function(){
  var name = document.getElementById('input').value;
  var house = sortHat(name);
  var newText = "<p>The Sorting Hat has sorted you into " + house + "</p>";
  document.getElementById("output").innerHTML = newText;
});
