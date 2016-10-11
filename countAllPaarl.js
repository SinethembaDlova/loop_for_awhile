const assert = require('assert');

var countAllPaarl = function(regNum)
{

   var storeList = regNum.split(", ");
   var paarlPlates = [];

   for(var i = 0; i < storeList.length; i++)
   {

     if(storeList[i].startsWith('CJ'))
     {
       paarlPlates.push(storeList[i]);
     }
   }

   return paarlPlates.length;
};

assert.equal(countAllPaarl("CA 1244-3444, 2343-34tfJHB, CJ1323-14342, CJ9334-33329, CA SNE"), 2);

var paarlie = countAllPaarl("CA 1244-3444, 2343-34tfJHB, CJ1323-14342, CJ9334-33329, CA SNE");
console.log(paarlie);
