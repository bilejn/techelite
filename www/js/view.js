$(function(){
/*	$( "#cosmopolitan" ).bind( "click", function () {
			pour.drink("Cosmopolitan");
	});
	$( "#cubaLibre" ).bind( "click", function () {
			pour.drink("Cuba Libre");
	});
	$( "#daiquiri" ).bind( "click", function () {
			pour.drink("Daiquiri");
	});
	$( "#firefighter" ).bind( "click", function () {
			pour.drink("Firefighter");
	});
	$( "#margarita" ).bind( "click", function () {
			pour.drink("Margarita");
	});
	$( "#mojito" ).bind( "click", function () {
			pour.drink("Mojito");
	});
	$( "#moscowMule" ).bind( "click", function () {
			pour.drink("Moscow Mule");
	});
	$( "#p2" ).bind( "click", function () {
			pour.drink("P2");
	});
	$( "#screwdriver" ).bind( "click", function () {
			pour.drink("Screwdriver");
	});	
	$( "#whiskeySour" ).bind( "click", function () {
			pour.drink("Whiskey Sour");
	}); */
});

$(document).on("pagebeforeshow", "#home", function (){
	if($.jStorage.get("data")){
			var list;
			var grid = true;
			var json = JSON.parse($.jStorage.get("data"));
			var list = '<div class="ui-grid-a">';
			for (i = 0; i < json.length; i++){
				if (grid) { 
					var block = '<div class="ui-block-a">';
				} else {
					var block = '<div class="ui-block-b">';
				}
				list = list + block + '<img src="' + json[i].Url + '" id ="' + json[i].Name + '" onclick ="pour.drink(\'' + json[i].Name + '\')" /> </div>'; 
				if (grid) {
					grid = false;
				} else {
					grid = true;
				}
			}
			list = list + '</div>';
			$("#homeScreenList").html(list);
			$("#home").trigger("create"); 
	}
});

