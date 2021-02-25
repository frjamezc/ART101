/*
Author: Francisco Amezcua
Date: 02/24/21
Public License
*/

function fizzBuzz() {
  var output = "";
  for(i = 0; i <= 200; i++)
  {
    if(i%3 == 0 && i%5 == 0 && i%7 == 0)
    {
      output += i + " - FizzBuzzBoom!<br>";
    }
    else if(i%3 == 0 && i%5 == 0) {
      output += i + " - FizzBuzz!<br>";
    }
    else if (i%3 == 0 && i%7 == 0) {
      output += i + " - FizzBoom!<br>";
    }
    else if (i%5 == 0 && i%7 == 0) {
      output += i + " - BuzzBoom!<br>";
    }
    else if (i%3 == 0) {
      output += i + " - Fizz!<br>";
    }
    else if (i%5 == 0) {
      output += i + " - Buzz!<br>";
    }
    else if (i%7 == 0) {
      output += i + " - Boom!<br>";
    }
    else
    {
      output += i + " -<br>"
    }
  }
  $("#output").html(output);
}

fizzBuzz();
