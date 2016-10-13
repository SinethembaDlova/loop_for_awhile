const assert = require('assert');

var shortestWord = function(sentence)
{
  var words = sentence.split(" ");
  var shortest = words[0].length;
  var wordNum = 2;
  for( var w = 0; w < words.length; w++)
  {
    if (wordNum > words[w].length)
    {
      word = words[w];
    }
  }

  return word;
}

var storeFunc = shortestWord("Programming is a must have skill to own");
assert.equal(storeFunc, "a")
console.log("The shortest word in the sentence is: " + storeFunc);
