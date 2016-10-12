const assert = require('assert');

var enoughAirtime = function(log)
{
  var phoneActivities = log.split(', ');
  var callList = [];
  var smsList = [];
  var dataList = [];
  var myBalance = 50;
  var callPrice = 1.88;
  var smsPrice = 0.75;
  var dataPrice = 12;

  for (var y = 0; y < phoneActivities.length; y++)
  {
    if (phoneActivities[y] === "call")
    {
      callList.push(phoneActivities[y]);
    }

    if (phoneActivities[y] === "sms")
    {
      smsList.push(phoneActivities[y]);
    }

    if (phoneActivities[y] === "data")
    {
      dataList.push(phoneActivities[y]);
    }
  }

  var totalCallPrice = callList.length * callPrice;
  var totalSmsPrice = smsList.length * smsPrice;
  var totalDataPrice = dataList.length * dataPrice;

  var totalBill = totalCallPrice + totalSmsPrice + totalDataPrice;

  return (myBalance - totalBill).toFixed(2);

}

  var storeFunc = enoughAirtime("call, call, call, data, sms, sms, call, data");
  assert.equal(storeFunc, 16.98);
  console.log("Your remaining balance is: R" + storeFunc);
