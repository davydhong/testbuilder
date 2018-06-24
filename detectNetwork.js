// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

// Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
// Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.


// OBJECT METHOD!


var Card = function(network, prefix, digitLength) {
  this.network = network;
  this.prefix = prefix;
  this.digitLength = digitLength;
};

var ChinaU_pre = []; // just for China Union Pay prefix
for (var i = 622126; i <= 622925; i++){
  ChinaU_pre.push(i);
}
for (var i = 624; i <= 626; i++) {
  ChinaU_pre.push(i);
}
for (var i = 6282; i <= 6288; i++) {
  ChinaU_pre.push(i);
}

var DinerC = new Card('Diner\'s Club', [38,39],[14]);
var AmEx = new Card('American Express', [34,37],[15]);
var Visa = new Card('Visa', [4],[13,16,19]);
var MasterCard = new Card('MasterCard', [51,52,53,54,55],[16]);
var Discover = new Card('Discover', [6011,644,645,646,647,648,649,65],[16,19]);
var Maestro = new Card('Maestro', [5018,5020,5038,6304],[12,13,14,15,16,17,18,19]);
var ChinaUP = new Card('China UnionPay', ChinaU_pre,[16,17,18,19]);
var Switch = new Card('Switch', [4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759],[16,18,19]);
var Cards = [DinerC, AmEx, Visa, MasterCard, Discover, Maestro,ChinaUP,Switch];
var Prefixes = [];


//Create an array  [{Card_1}, prefix1_1, prefix1_i, ... {Card_n}, prefixn_1, prefixn_2 ..]
//Purpose is to check for the prefix then point to the right card using a while loop.
for (var i = 0; i < Cards.length ; i++){
  Prefixes.push(Cards[i]);
  for (var j = 0; j<  (Cards[i]['prefix']).length ; j++ ){
    Prefixes.push(Cards[i]['prefix'][j]);
  }
};

// console.log(Prefixes);

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  // Once you've read this, go ahead and try to implement this function, then return to the console.

  // cardNumber = cardNumber.toString();

  // Test for prefix

  var prefixLength = 6;
  var firstNums = parseInt(cardNumber.slice(0,prefixLength));

  while ( Prefixes.indexOf(firstNums) === -1 ){
    prefixLength --;
    firstNums = parseInt(cardNumber.slice(0,prefixLength));
  }

  if ( Prefixes.indexOf(firstNums) > -1  ){  //check the firstNums

    var idx = Prefixes.indexOf(firstNums);
    while (Number.isInteger(Prefixes[idx])){  //Points to the Network it maybe for the length testing
      idx --;
    }
      if ( Prefixes[idx]['digitLength'].indexOf(cardNumber.length)> -1){
        return Prefixes[idx]['network']; //Prefixes[idx] points back to the individual card object
      } else {
        return "pending";  //If passed the prefix test but failed length test
      }

  } else {
    return "pending"; //If failed the prefix test
  }
};
