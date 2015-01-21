var model = (function(base) {
	var json = "";
	/*var json = '[{"ID": 1,"Name": "Screwdriver","Url": "https://raw.githubusercontent.com/felixekman/Drinkbot/master/Graphics/DrinkIcons/Screwdriver.jpg","Content0": "0,4","Content1": "1,0","Content2": "2,0","Content3": "3,0","Content4": "4,0","Content5": "5,0","Content6": "6,0","Content7": "7,0"}, {"ID": 2,"Name": "P2","Url": "https://raw.githubusercontent.com/felixekman/Drinkbot/master/Graphics/DrinkIcons/P2.jpg","Content0": "0,0","Content1": "0,0","Content2": "0,0","Content3": "0,0","Content4": "0,0","Content5": "0,0","Content6": "0,0","Content7": "0,0"}, {"ID": 3,"Name": "Whiskey Sour","Url": "https://raw.githubusercontent.com/felixekman/Drinkbot/master/Graphics/DrinkIcons/WhiskeySour.jpg","Content0": "0,0","Content1": "0,0","Content2": "0,0","Content3": "0,0","Content4": "0,0","Content5": "0,0","Content6": "0,0","Content7": "0,0"}, {"ID": 4,"Name": "Firefighter","Url": "https://raw.githubusercontent.com/felixekman/Drinkbot/master/Graphics/DrinkIcons/Firefighter.jpg","Content0": "0,0","Content1": "0,0","Content2": "0,0","Content3": "0,0","Content4": "0,0","Content5": "0,0","Content6": "0,0","Content7": "0,0"}, {"ID": 5,"Name": "Cuba Libre","Url": "https://raw.githubusercontent.com/felixekman/Drinkbot/master/Graphics/DrinkIcons/CubaLibre.jpg","Content0": "0,0","Content1": "0,0","Content2": "0,0","Content3": "0,0","Content4": "0,0","Content5": "0,0","Content6": "0,0","Content7": "0,0"}, {"ID": 6,"Name": "Margarita","Url": "https://raw.githubusercontent.com/felixekman/Drinkbot/master/Graphics/DrinkIcons/Margarita.jpg","Content0": "0,0","Content1": "0,0","Content2": "0,0","Content3": "0,0","Content4": "0,0","Content5": "0,0","Content6": "0,0","Content7": "0,0"}, {"ID": 7,"Name": "Daiquiri","Url": "https://raw.githubusercontent.com/felixekman/Drinkbot/master/Graphics/DrinkIcons/Daiquiri.jpg","Content0": "0,0","Content1": "0,0","Content2": "0,0","Content3": "0,0","Content4": "0,0","Content5": "0,0","Content6": "0,0","Content7": "0,0"}, {"ID": 8,"Name": "Mojito","Url": "https://raw.githubusercontent.com/felixekman/Drinkbot/master/Graphics/DrinkIcons/Mojito.jpg","Content0": "0,0","Content1": "0,0","Content2": "0,0","Content3": "0,0","Content4": "0,0","Content5": "0,0","Content6": "0,0","Content7": "0,0"}, {"ID": 9,"Name": "Moscow Mule","Url": "https://raw.githubusercontent.com/felixekman/Drinkbot/master/Graphics/DrinkIcons/MoscowMule.jpg","Content0": "0,0","Content1": "0,0","Content2": "0,0","Content3": "0,0","Content4": "0,0","Content5": "0,0","Content6": "0,0","Content7": "0,0"}, {"ID": 10,"Name": "Cosmopolitan","Url": "https://raw.githubusercontent.com/felixekman/Drinkbot/master/Graphics/DrinkIcons/Cosmopolitan.jpg","Content0": "0,0","Content1": "0,0","Content2": "0,0","Content3": "0,0","Content4": "0,0","Content5": "0,0","Content6": "0,0","Content7": "0,0"}]';*/
	
	
	
	base.getJson = json;
	
	base.setJson = function () {
		$.ajax({
    		url : "http://54.154.177.207/db.php",
		    dataType:"jsonp",
		    jsonp:"mycallback",
		    success:function(data) {
				$.jStorage.set("data", data);
				$.mobile.changePage( "#home", { allowSamePageTransition: true } );
		    },
			error: function(e) {
				window.plugins.toast.showShortTop('Network Error!');
			}
		});
	}
	
	return base;
}( model || {}));