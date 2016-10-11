const assert = require('assert');

var countAllFromTown = function(regNum)
{
  var storeList = regNum.split(', ');
  var fromJHB = [];

  for (var i = 0; i < storeList.length; i++)
  {
    if(storeList[i].endsWith("JHB"))
    {
      fromJHB.push(storeList[i]);
    }
  }
  return fromJHB.length;
}

var fromJozi = countAllFromTown("CA 1244-3444, sned JHB, CJ 5532-4444, CA 2121-522, CJ 1554-5522, DA 1323-ddJHB");
assert.deepEqual(fromJozi, 2);
console.log(fromJozi);
