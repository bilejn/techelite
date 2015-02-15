
document.addEventListener("deviceready", OnDeviceReady, false);

	function OnDeviceReady()    {
		checkConnection();
		checkLanguage();
		if (cLANGUAGE == "ar"){
			loadar();
		} else {
			loaden();
		}
		
	}

	$(function (){
	
		$("#generalData p").html("*");


	});