var userInput = prompt("Please enter a sentence.");
var firstLetter = userInput.charAt(0);
var lastLetter = userInput.charAt(userInput.length - 1);
var lengthDividedTwo = userInput.charAt(userInput.length / 2);
var firstLast = function(){
  return (firstLetter + lastLetter).toUpperCase();
};

var lastFirst = function(){
  return (lastLetter + firstLetter).toUpperCase();
};

var thirdFunction = function(){
  return (userInput + lastFirst());
};

var fourthFunction = function() {
  return lengthDividedTwo + thirdFunction();
};

// var lastFirst = function(){
//   return firstLast.reverse();

 //
 // alert(firstLast());
 // alert(lastFirst());
 // alert(thirdFunction());

alert(fourthFunction());

/*var newLetter = userInput.charAt(0, userInput.length - 1);
Alert(newLetter);*/
