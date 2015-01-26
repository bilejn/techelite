function checkConnection() {

   try{
        var networkState = navigator.connection.type;
        setTimeout(function(){
            networkState = navigator.connection.type;

            var states = {};
            states[Connection.UNKNOWN]  = 'Unknown connection';
            states[Connection.ETHERNET] = 'Ethernet connection';
            states[Connection.WIFI]     = 'WiFi connection';
            states[Connection.CELL_2G]  = 'Cell 2G connection';
            states[Connection.CELL_3G]  = 'Cell 3G connection';
            states[Connection.CELL_4G]  = 'Cell 4G connection';
            states[Connection.NONE]     = 'No network connection';
		if (states[networkState] == 'No network connection'){
			alert("No network connection. Please connect to internet.");
		}
            
        }, 2000);
    }catch(e){
        alert(e);
        $.each(navigator, function(key, value){
            alert(key+' => '+value);
        });
    }
}

