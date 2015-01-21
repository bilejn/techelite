    
  function emptyFunction() {
        // do something
    }
	
	// Show a custom alert
		//
		function showAlert(title, callback, message, button) {
			navigator.notification.alert(
				message,          // title
				callback,         // callback
				title,            // message
				button            // buttonName
			);
		}

		function showConfirm (title, callback, message, buttons){
			navigator.notification.confirm(
			message,           // message
			callback,          // callback to invoke with index of button pressed
			title,             // title
			buttons            // buttonLabels
			);

		}
		
		
		function refresh () {
			window.plugins.toast.showShortCenter('Refreshing List');
			model.setJson();
		}
		
		
		function checkConnection() {
			var networkState = navigator.connection.type;

			var states = {};
			states[Connection.UNKNOWN]  = 'Unknown connection';
			states[Connection.ETHERNET] = 'Ethernet connection';
			states[Connection.WIFI]     = 'WiFi connection';
			states[Connection.CELL_2G]  = 'Cell 2G connection';
			states[Connection.CELL_3G]  = 'Cell 3G connection';
			states[Connection.CELL_4G]  = 'Cell 4G connection';
			states[Connection.CELL]     = 'Cell generic connection';
			states[Connection.NONE]     = 'No network connection';

			alert('Connection type: ' + states[networkState]);
}

