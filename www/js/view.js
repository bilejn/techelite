$(document).on("pagebeforeshow", "#home", function (){

/* 	if ($.jStorage.get("json_data") != null){
	
		var data = $.jStorage.get("json_data");
		$("#InvitationFirstname").val(data.InvitationFirstname);
		$("#InvitationLastname").val(data.InvitationLastname);
		$("#InvitationNationality").val(data.InvitationNationality);		
		
		
		
		$("#home").trigger("create");
	} */

});

$(document).on("pagebeforeshow", "#confirm", function (){


	
		var data = $.jStorage.get("json_data");
		var output = ""
		for (var key in data) {
			output = output + '<p>' + key + ': ' + data[key] + '</p>';
		}		
		
		$("#reviewInvitation").html(output);
		
		
		$("#confirm").trigger("create");


});