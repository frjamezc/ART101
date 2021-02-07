/**
 * Author:    Francisco Amezcua
 * Created:   02.06.2021
 *
 * Public License
 **/

// Each of these three functions print their respective identifiers and the
// variable test.
function firstThing(test) {
  console.log("First Thing: " + test);
}

function secondThing(test) {
  console.log("Second Thing: " + test);
}

function thirdThing(test) {
  console.log("Third Thing: " + test);
}

// Declare and initialize test strings
var tst1 = "TEST 1";
var tst2 = "TEST 2";
var tst3 = "TEST 3";

// Test 1: Call functions
firstThing(tst1);
secondThing(tst1);
thirdThing(tst1);

// Test 2: Callbacks, no delay
setTimeout(function() {
  firstThing(tst2);
}, 0);
setTimeout(function() {
  secondThing(tst2);
}, 0);
setTimeout(function() {
  thirdThing(tst2);
}, 0);

// Test 3: Callbacks, with delay
setTimeout(function() {
  firstThing(tst3);
}, 3000);
setTimeout(function() {
  secondThing(tst3);
}, 1000);
setTimeout(function() {
  thirdThing(tst3);
}, 2000);
