/*
Author:   Francisco Amezcua
Created:  02/02/2021
Public License
*/

function sortName() {
  // Opens prompt to take user input
  var userName = window.prompt("Name. Now.");
  // toLowerCase: Makes every character in the  userName string toLowerCase
  // split: Splits the string  into an array of characters
  // sort: Sorts the array in lexicographic order
  // join: Creates returnable string of array elements
  return userName.toLowerCase().split('').sort().join('');
}

document.writeln("Name fixed, cretin: ", sortName(), "<br>");
