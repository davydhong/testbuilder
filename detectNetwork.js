// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)


 // OBJECT METHOD!


var Card = function(network, prefix, digitLength) {
  this.network = network;
  this.prefix = prefix;
  this.digitLength = digitLength;
};


var DinerC = new Card("Diner's Club", [38,39],[14]);
var AmEx = new Card("American Express", [34,37],[15]);
var Cards = [DinerC, AmEx];
var Prefixes = [];


//Create an array  [{Card_1}, prefix1_1, prefix1_i, ... {Card_n}, prefixn_1, prefixn_2 ..]
//Purpose is to check for the prefix then point to the right card using a while loop.
for (var i = 0; i < Cards.length ; i++){
  Prefixes.push(Cards[i]);
  for (var j = 0; j<  (Cards[i]['prefix']).length ; j++ ){
    Prefixes.push(Cards[i]['prefix'][j]);
  }
};


var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  // Once you've read this, go ahead and try to implement this function, then return to the console.

  // cardNumber = cardNumber.toString();

  // Test for prefix
  var firstNums = parseInt(cardNumber.slice(0,2));
  if ( Prefixes.indexOf(firstNums) > -1  ){  //check the firstNums

    var idx = Prefixes.indexOf(firstNums);
    while (Number.isInteger(Prefixes[idx])){  //Points to the Network it maybe for the length testing
      idx --;
    }
      if ( Prefixes[idx]['digitLength'].indexOf(cardNumber.length)> -1){
        return Prefixes[idx]['network']; //Prefixes[idx] points back to the individual card object
      } /*else {
        return "Error: Re-enter the Digits";  //If passed the prefix test but failed length test
      } */

  } /*else {
    return "Error: Re-enter the Digits"; //If failed the prefix test
  }*/
};
