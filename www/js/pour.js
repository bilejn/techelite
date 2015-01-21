var pour = (function(module) {

	module.drink = function (drinkName){
		var title = "New Order";
		var message = "Pour "+ drinkName + "?";
		var callback = emptyFunction();
		var buttons =  ['Pour','Cancel'];
		showConfirm (title, callback, message, buttons);
	}
	
	return module;
}(	pour || {}));

/* curl https://api.spark.io/v1/devices/0123456789abcdef01234567/order\-d access_token=1234123412341234123412341234123412341234\-dparams=”P0:XX;P1:XX;P2:XX;P3:XX;P4:XX;P5:XX;P6:XX;P7:XX"
Your access_token is: 35a502f3b004169b59838d087b2d20afebf85dc4
Your UnitID: 50ff70065067545650150287 
*/