/*
Author:   Francisco Amezcua
Created:  02/15/2021
Public License
*/

function sortName() {
  // get name from text field
  var name = document.getElementById("user-name").value;
  // split: Splits the string  into an array of characters.
  // sort: Sorts the array in lexicographic order.
  //   function: If a and b are the same, yet different cases, sort them as if
  //      its the same case.
  // join: Creates returnable string of array elements.
  name = name.split('').sort(function (a, b) {
    if(a==b) {
      return 0;
    } else {
      return a.localeCompare(b);
    }
  }).join('');

  // write to output div
  document.getElementById("output").innerHTML = name;
  return name;
}
function changeBack() {
  document.body.style.backgroundImage = "url('https://pbs.twimg.com/media/EPgYu08U4AM18dd?format=jpg&name=large')";
  document.body.style.backgroundSize = "cover";
}

function repeatBack() {
  document.body.style.backgroundSize = "30%";
  document.body.style.backgroundImage = "url('https://pbs.twimg.com/media/EPgYu08U4AM18dd?format=jpg&name=small')";
  document.body.style.backgroundRepeat =  "repeat";
}

function strobe() {
  var ofs = 0;

  window.setInterval(function(){
    document.body.style.background = 'rgba(255,0,0,'+Math.abs(Math.sin(ofs))+')';
    ofs += 0.01;
  }, 10);
}

document.getElementById("my-button").addEventListener("click", sortName);
document.getElementById("first").addEventListener("click" , changeBack);
document.getElementById("second").addEventListener("click" , repeatBack);
document.getElementById("third").addEventListener("click" , strobe);
