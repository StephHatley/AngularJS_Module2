(function() {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyList = this;

  toBuyList.items = ShoppingListCheckOffService.getToBuyItems();

  toBuyList.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  };
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtItems = this;

  boughtItems.items = ShoppingListCheckOffService.getBoughtItems();
  console.log(boughtItems.items.length);

}

function ShoppingListCheckOffService() {
  var service = this;

  var item1 = {name: "tomatoes", quantity: 3};
  var item2 = {name: "onion", quantity: 1};
  var item3 = {name: "cilantro bunch", quantity: 1};
  var item4 = {name: "jalapeno", quantity: 2};
  var item5 = {name: "bag of chips", quantity: 1};

  //list of ToBuy items
  var toBuyItems = [item1, item2, item3, item4, item5];

  //list of already bought items
  var boughtItems = [];

  service.getToBuyItems = function() {
    return toBuyItems;
  };

  service.getBoughtItems = function() {
    return boughtItems;
  };

  service.buyItem = function (itemIndex) {
    boughtItems.push(toBuyItems[itemIndex]);
    toBuyItems.splice(itemIndex,1);
  };

}

})();
