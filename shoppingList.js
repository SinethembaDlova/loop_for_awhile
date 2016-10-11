var shoppingList = function(shopList)
{
  var storeList = shopList.split(", ");

  console.log("Shopping list:" );
  console.log("");
  for (var i = 0; i < storeList.length; i++)
  {
    console.log(storeList[i]);
  }
}

shoppingList("1x bread, 6x hotdog rolls, 2x tubs of margarine");
shoppingList("1x rice, 3x chicken, 1x coffee, 4x spices");
