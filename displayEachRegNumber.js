var displayEachRegNumber = function(regNum)
{

  var numPlate = regNum.split(", ");

  for (var i = 0; i < numPlate.length; i++)
  {
    console.log(numPlate[i]);
  }

}

displayEachRegNumber("CA 4334-6664, CA 8767-4444, CL 7111 94444, 4534-2343 JHB, CJ 2535-8544");
