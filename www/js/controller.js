
document.addEventListener("deviceready", OnDeviceReady, false);

	function OnDeviceReady()    {
		checkConnection();
		checkLanguage();
		if (cLANGUAGE == "ar"){
			loadar();
		}
		
	}

	$(function (){
	
		$("#generalData p").html("*");
/* 		if (cLANGUAGE == "ar"){
			loadar();
		}  */

	});