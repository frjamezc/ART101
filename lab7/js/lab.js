/*
Author:   Francisco Amezcua
Created:  02/02/2021
Public License
*/

function sortName() {
  // Opens prompt to take user input
  var userName = window.prompt("Name. Now.");
  // split: Splits the string  into an array of characters.
  // sort: Sorts the array in lexicographic order.
  //   function: If a and b are the same, yet different cases, sort them as if
  //      its the same case.
  // join: Creates returnable string of array elements.
  return userName.split('').sort(function (a, b) {
    if(a==b) {
      return 0;
    } else {
      return a.localeCompare(b);
    }
  }).join('');
}

document.writeln("Name fixed, cretin: <br>", sortName(), "<br>");
