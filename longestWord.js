const assert = require('assert');

var longestWord = function(sentence)
{
  var words = sentence.split(" ");
  var longest = ;

  for( var w = 0; w < words.length; w++)
  {
    if (words[w].length > longest)
    {
      longest = words[w];
    }
  }

  return longest;
}

var storeFunc = longestWord("Programming is  a must have skill to own");
assert.equal(storeFunc, "Programming")
console.log("The longest word in the sentence is: " + storeFunc);
