/**
 * Author:    Francisco Amezcua
 * Created:   02/01/2021
 * Public License
 **/

var myTransport = ["Car", "Skateboard"];
var myMainRide = {
  make: "Nissan",
  model : "Sentra",
  color : "Silver",
  year : 2016,
};

document.writeln("Getting around: ", myTransport, "<br>");

document.writeln("<p>My main ride: <\p><pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
