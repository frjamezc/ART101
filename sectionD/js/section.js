/*
function userInfo(first, last) {
  first = first[0].toUpperCase() + first.substring(1).toLowerCase();
  last = last[0].toUpperCase() + last.substring(1).toLowerCase();
  return "My first name is " + first +
          " and my last name is " + last;
}

document.writeln(userInfo("FrAnCiScO", "AmEzCuA"));
*/

//substring
//keypressed

function matching() {
  input = $("#box").val();
  substr  = $("p").text().substring(0,input.length);
  if(input == substr){
    $("#box").css("border-color","blue");
  } else {
    $("#box").css("border-color","red");
  }
  console.log(input);
}

$("#box").keyup(matching);
