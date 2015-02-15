
document.addEventListener("deviceready", OnDeviceReady, false);

	function OnDeviceReady(){
	
		checkConnection();
		setLanguage();
	
	}

	$(function (){

		$("#generalData p").html("*");
		if ($.jStorage.get("lang") == "ar"){
		loadRTL();		
		}


	});
	
	function setLanguage(){
		var lang = checkLanguage();
		var previous = $.jStorage.get("lang");
			if ( previous != lang){
					$.jStorage.set("lang", previous);	
						window.location.reload(true);				
			}
	}
		
