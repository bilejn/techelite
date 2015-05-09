
$(document).on("pagebeforeshow", "#home", function (){
	var cLANGUAGE;
	if  ($.jStorage.get("lang")==null){
			cLANGUAGE = "en";	
			$.jStorage.set("lang", cLANGUAGE);
	}else{
			cLANGUAGE = $.jStorage.get("lang");	
	}
		

	$("#header_title").html(locals[cLANGUAGE].header_title);
	$("#header_person").html(locals[cLANGUAGE].header_person);
	

	$("#InvitationFirstname").attr("placeholder", locals[cLANGUAGE].InvitationFirstname);	
	$("#InvitationLastname").attr("placeholder", locals[cLANGUAGE].InvitationLastname);
	
	
	

	// ================================== NATIONALITY ============================================//
	$('#nationalities').html("");
	$('<select>').attr({'name':'InvitationNationality','id':'InvitationNationality','data-native-menu':'false'}).appendTo('#nationalities');
	$('<option>').html(nations[cLANGUAGE].nationality[0]).appendTo('#InvitationNationality');	
	for (i=1; i < nations[cLANGUAGE].nationality.length; i++){
	     $('<option>').attr({'value':i}).html(nations[cLANGUAGE].nationality[i]).appendTo('#InvitationNationality');
	}
	$('#InvitationNationality').selectmenu();
	
	
	
	
	// ================================== LANGUAGE ============================================//	
	$('#languages').html("");
	$('<select>').attr({'name':'InvitationLanguage','id':'InvitationLanguage','data-native-menu':'false'}).appendTo('#languages');
	$('<option>').html(nations[cLANGUAGE].language[0]).appendTo('#InvitationLanguage');
	for (i=1; i < nations[cLANGUAGE].language.length; i++){
	     $('<option>').attr({'value':i}).html(nations[cLANGUAGE].language[i]).appendTo('#InvitationLanguage');
	}
	$('#InvitationLanguage').selectmenu();	
	
	
	

	$('[name=InvitationLanguage]  option[value="0"]').html(locals[cLANGUAGE].language_title);
	$('[name=InvitationLanguage]  option[value="1"]').html(locals[cLANGUAGE].language_1);
	$('[name=InvitationLanguage]  option[value="2"]').html(locals[cLANGUAGE].language_2);
	
	$("#InvitationPhoneNo").attr("placeholder", locals[cLANGUAGE].InvitationPhoneNo);
	$("#InvitationEmail").attr("placeholder", locals[cLANGUAGE].InvitationEmail);
	$("#InvitationAnotherContactInfo").attr("placeholder", locals[cLANGUAGE].InvitationAnotherContactInfo);
	
	$('label[for="male"]').html(locals[cLANGUAGE].male);
	$('label[for="female"]').html(locals[cLANGUAGE].female);

	//$("#InvitationStatus").attr("placeholder", locals[cLANGUAGE].InvitationStatus);	
	
	$("#header_inviter").html(locals[cLANGUAGE].header_inviter);

	$("#InviterFirstname").attr("placeholder", locals[cLANGUAGE].InviterFirstname);
	$("#InviterLastname").attr("placeholder", locals[cLANGUAGE].InviterLastname);
	$("#InviterPhoneNo").attr("placeholder", locals[cLANGUAGE].InviterPhoneNo);
	$("#InviterEmail").attr("placeholder", locals[cLANGUAGE].InviterEmail);

	$("#submit").attr("value", locals[cLANGUAGE].submit);
	$("#clear").html(locals[cLANGUAGE].clear);
	
	
	$('#InvitationNationality').selectmenu("refresh", true);
	$('#InvitationLanguage').selectmenu("refresh", true);
	$('[type="submit"]').button('refresh');
	$("#home").trigger("create");
});

$(document).on("pagebeforeshow", "#confirm", function (){

	var cLANGUAGE;
	if ($.jStorage.get("lang")==null){
			cLANGUAGE = "en";	
			$.jStorage.set("lang", cLANGUAGE);
	}else{
			cLANGUAGE = $.jStorage.get("lang");	
	}

		$("#header_title_confirm").html(locals[cLANGUAGE].header_title);
		$("#confirm_title").html(locals[cLANGUAGE].confirm_title);
		$("#send").html(locals[cLANGUAGE].send_button);
		$("#back").html(locals[cLANGUAGE].back_button);

		var names = {
			InvitationFirstname : locals[cLANGUAGE].InvitationFirstname,
			InvitationLastname: locals[cLANGUAGE].InvitationLastname,
			InvitationNationality: locals[cLANGUAGE].nationality[0],
			InvitationLanguage: locals[cLANGUAGE].language[0],
			InvitationPhoneNo: locals[cLANGUAGE].InvitationPhoneNo,
			InvitationEmail: locals[cLANGUAGE].InvitationEmail,
			InvitationAnotherContactInfo: locals[cLANGUAGE].InvitationAnotherContactInfo,
			InvitationGender:  locals[cLANGUAGE].InvitationGender,
			InvitationStatus:  locals[cLANGUAGE].InvitationStatus,
			InviterFirstname: locals[cLANGUAGE].InviterFirstname,
			InviterLastname: locals[cLANGUAGE].InviterLastname,
			InviterPhoneNo: locals[cLANGUAGE].InviterPhoneNo,
			InviterEmail: locals[cLANGUAGE].InviterEmail
		};
	
		var data = $.jStorage.get("json_data");
		var output = '<div class="confirm-grid ui-grid-a">';
		for (var key in data) {
			var key2 = key;
			output = output + '<div class="ui-block-a">' +names[key2] + ':</div><div class="ui-block-b">' + ispis(key2) + '</div>';
		}		
		output = output + '</div>';
		$("#reviewInvitation").html(output);
	
		$("#confirm").trigger("create");


});	


function ispis (key){
	var cLANGUAGE = $.jStorage.get("lang");	
	var data = $.jStorage.get("json_data");
	if (key == "InvitationNationality")
		return locals[cLANGUAGE].nationality[data[key]];
	else if (key == "InvitationLanguage")
		return locals[cLANGUAGE].language[data[key]];
	else
		
		return data[key];
}




