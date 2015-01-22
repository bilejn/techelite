$(document).ready(function(){
	
	  try{
        var networkState = navigator.connection && navigator.connection.type;

        setTimeout(function(){
            networkState = navigator.connection && navigator.connection.type;

            var states = {};
            states[Connection.UNKNOWN]  = 'Unknown connection';
            states[Connection.ETHERNET] = 'Ethernet connection';
            states[Connection.WIFI]     = 'WiFi connection';
            states[Connection.CELL_2G]  = 'Cell 2G connection';
            states[Connection.CELL_3G]  = 'Cell 3G connection';
            states[Connection.CELL_4G]  = 'Cell 4G connection';
            states[Connection.NONE]     = 'No network connection';

            alert('Connection type: ' + states[networkState]);
        }, 500);
    }catch(e){
        alert(e);
        $.each(navigator, function(key, value){
            alert(key+' => '+value);
        });
    }

});

					