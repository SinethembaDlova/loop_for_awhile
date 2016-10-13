const assert = require('assert');

var wordLengths = function(sentence)
{
  var words = sentence.split(" ");
  console.log(words);
  var noOfWords = 0;
  var wordL = [];

  for( var w = 0; w < words.length; w++)
  {

    wordL.push(words[w].length);
    noOfWords += wordL[w];
  }

  return noOfWords;
}

var storeFunc = wordLengths("Programming is a must have skill to own");
assert.equal(storeFunc, 32)
console.log("The sum of all word lengths is: " + storeFunc);
