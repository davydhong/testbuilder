
/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
// var FILL_ME_IN = 'Fill this value in';
//
// describe('Introduction to Mocha Tests - READ ME FIRST', function() {
//   // A Mocha test is just a function!
//   // If the function throws an error when run, it fails.
//   // If it doesn't throw an error when run, it doesn't fail.
//   // To read more about mocha, visit mochajs.org
//
//   // Once you've read and understood this section, please comment it out.
//   // You will not be able to proceed with a failing test.
//
//   it('Throws an error so it fails', function() {
//     throw new Error('Delete me!');
//   });
//
//   it('Doesn\'t throw an error, so it doesn\'t fail', function() {
//     // This test doesn't really test anything at all! It will pass no matter what.
//     var even = function(num){
//       return num/2 === 0;
//     }
//     return even(10) === true;
//   });
//
//   // In tests, we want to compare the expected behavior to the actual behavior.
//   // A test should only fail if the expected behavior doesn't match the actual.
//   it('Throws an error when expected behavior does not match actual behavior', function() {
//     var even = function(num){
//       return num/2 === 0;
//     }
//
//     if(even(10) !== true) {
//       throw new Error('10 should be even!');
//     }
//   });
// });

var TestInput =[];

describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }

  });
});
TestInput.push("38345678901234","39345678901234");

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true.
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});
TestInput.push("343456789012345","373456789012345");

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it.
  //   http://chaijs.com/
  var assert = chai.assert;


  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});
TestInput.push("4123456789012","4123456789012345","4123456789012345678");

var expect = chai.expect;

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others.
  // If you want to know more, check out the documentation.
  //   http://chaijs.com/api/bdd/


  it('has a prefix of 51 and a length of 16', function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });

  it('has a prefix of 52 and a length of 16', function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });

  it('has a prefix of 53 and a length of 16', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });


  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten
  // these tests to pass using should syntax, refactor your tests to
  // use either expect or should, but not both.
  // var should = chai.should();

  it('has a prefix of 54 and a length of 16', function() {
    expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
    // detectNetwork('5412345678901234').should.equal('MasterCard');
  });

  it('has a prefix of 55 and a length of 16', function() {
    expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
    // detectNetwork('5512345678901234').should.equal('MasterCard');
  })
});

//
TestInput.push("5112345678901234","5212345678901234","5312345678901234","5412345678901234","5512345678901234");


describe('Discover', function() {
//   // Tests without a function will be marked as "pending" and not run
//   // Implement these tests (and others) and make them pass!
// var Discover = new Card('Discover', [6011,644,645,646,647,648,649,65],[16,19]);
prefix = [6011,644,645,646,647,648,649,65];
digitLength = [16,19];


var template = "12345123451234512345"
  template = template.split("");
var Tests = [];

for (var i=0; i < prefix.length; i++){
  for (var j = 0; j < digitLength.length; j++){
    var dialogue = "has a prefix of " + prefix[i] + " and a length of " + digitLength[j];

    template.unshift(prefix[i]); // => [prefix#, "1", "2" , "3", "4"...  ]
      var testNum = template.join("").slice(0,digitLength[j]);
    TestInput.push(testNum);

    it(dialogue, function() {
      expect(detectNetwork(testNum)).to.equal('Discover');
      // detectNetwork(testNum).should.equal('Discover');
    });

  }
}

});


// var DinerC = new Card('Diner\'s Club', [38,39],[14]);
// var AmEx = new Card('American Express', [34,37],[15]);
// var Visa = new Card('Visa', [4],[13,16,19]);
// var MasterCard = new Card('MasterCard', [51,52,53,54,55],[16]);

// var Maestro = new Card('Maestro', [5020,5038,6304],[12,13,14,15,16,17,18,19]);

describe('Maestro', function() {
  prefix = [5018,5020,5038,6304];
  digitLength = [12,13,14,15,16,17,18,19];


  var template = "12345123451234512345"
    template = template.split("");
  var Tests = [];

  for (var i=0; i < prefix.length; i++){
    for (var j = 0; j < digitLength.length; j++){
      var dialogue = "has a prefix of " + prefix[i] + " and a length of " + digitLength[j];

      template.unshift(prefix[i]); // => [prefix#, "1", "2" , "3", "4"...  ]
        var testNum = template.join("").slice(0,digitLength[j]);
      TestInput.push(testNum);

      it(dialogue, function() {
        expect(detectNetwork(testNum)).to.equal('Maestro');
        // detectNetwork(testNum).should.equal('Maestro');
      });

    }
  }

});

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

describe('China UnionPay', function(){
  prefix = ChinaU_pre;
  digitLength = [16,17,18,19];


  var template = "12345123451234512345"
    template = template.split("");
  var Tests = [];

  for (var i=0; i < prefix.length; i++){
    for (var j = 0; j < digitLength.length; j++){
      var dialogue = "has a prefix of " + prefix[i] + " and a length of " + digitLength[j];

      template.unshift(prefix[i]); // => [prefix#, "1", "2" , "3", "4"...  ]
        var testNum = template.join("").slice(0,digitLength[j]);
      TestInput.push(testNum);

      it(dialogue, function() {
        expect(detectNetwork(testNum)).to.equal('China UnionPay');
        // detectNetwork(testNum).should.equal('Maestro');
      });

    }
  }
});

describe('Switch', function(){
  prefix = [4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759];
  digitLength = [16,18,19];

  var template = "12345123451234512345"
    template = template.split("");
  var Tests = [];

  for (var i=0; i < prefix.length; i++){
    for (var j = 0; j < digitLength.length; j++){
      var dialogue = "has a prefix of " + prefix[i] + " and a length of " + digitLength[j];

      template.unshift(prefix[i]); // => [prefix#, "1", "2" , "3", "4"...  ]
        var testNum = template.join("").slice(0,digitLength[j]);
      TestInput.push(testNum);

      it(dialogue, function() {
        expect(detectNetwork(testNum)).to.equal('Switch');
        // detectNetwork(testNum).should.equal('Maestro');
      });

    }
  }
});

// for (var i = 0 ; i < TestInput.length ; i ++){
//   detectNetwork(TestInput[i]);
// }

//
