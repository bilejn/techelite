
document.addEventListener("deviceready", OnDeviceReady, false);

	function OnDeviceReady(){
	
		checkConnection();
		setLanguage();
		if (cLANGUAGE === "ar"){
			loadRTL();		
		}
	}

	$(function (){

		$("#generalData p").html("*");



	});
	
	function setLanguage(){
		var lang = checkLanguage();
		var previous = $.jStorage.get("lang");
			if (previous != lang){
					$.jStorage.set("lang", previous);	
					window.location.reload(true);				
			}

	}
		
	function loadRTL(){

		document.getElementsByTagName("head")[0].removeChild(document.getElementById("css"));
		document.getElementsByTagName("head")[0].removeChild(document.getElementById("js"));

	  var filerefcss=document.createElement("link")
	  filerefcss.setAttribute("rel", "stylesheet")
	  filerefcss.setAttribute("type", "text/css")
	  filerefcss.setAttribute("href", "css/rtl.jquery.mobile-1.4.0.css");
		document.getElementsByTagName("head")[0].appendChild(filerefcss);

		$("#home").trigger("pagebeforeshow");
		/* $("#home").page("refresh"); */

	}