
document.addEventListener("deviceready", OnDeviceReady, false);

	function OnDeviceReady(){
	
		checkConnection();
		checkLanguage();

	}

	$(function (){

		$("#generalData p").html("*");
		if ($.jStorage.get("rtl") == "true"){
			loadRTL();
		}
	});
	

