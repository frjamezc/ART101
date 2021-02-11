/*
Author: Francisco Amezcua
Date: 02/10/2021
Public License
*/

var outputEl = document.getElementById("output"); // Get element
var new1El = document.createElement("p"); // Creates <p> element
new1El.innerHTML = "Poggers!"; // Sets the P tag's text
new1El.setAttribute("style","color: red"); // makes the p red
var new2El = document.createElement("h4"); // creates <h4> element
new2El.innerHTML ="This text is in an h4 tag!"; // set h4 text
new2El.setAttribute("style","color: red"); // make h4 red
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

document.writeln(outputEl);
