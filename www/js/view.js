
$(document).on("pagebeforeshow", "#home", function (){
	var cLANGUAGE;
	if ($.jStorage.get("lang")==null){
			cLANGUAGE = "en";	
			$.jStorage.set("lang", cLANGUAGE);
	}else{
			cLANGUAGE = $.jStorage.get("lang");	
	}
		
	var data ={};	
	if ($.jStorage.get("json_data")){
		var data = $.jStorage.get("json_data");	
	}


	$("#header_title").html(locals[cLANGUAGE].header_title);
	$("#header_person").html(locals[cLANGUAGE].header_person);
	
	if (data.InvitationFirstname == null){
		$("#InvitationFirstname").attr("placeholder", locals[cLANGUAGE].InvitationFirstname);	
	} else {
		$("#InvitationFirstname").val(data.InvitationFirstname);	
	}
	
	$("#InvitationLastname").attr("placeholder", locals[cLANGUAGE].InvitationLastname);
	

	
    $('[name=InvitationNationality]  option[value="0"]').html(locals[cLANGUAGE].nationality_title);
	$('[name=InvitationNationality]  option[value="1"]').html(locals[cLANGUAGE].nationality_1);
	$('[name=InvitationNationality]  option[value="2"]').html(locals[cLANGUAGE].nationality_2);
	$('[name=InvitationNationality]  option[value="3"]').html(locals[cLANGUAGE].nationality_3);
	$('[name=InvitationNationality]  option[value="4"]').html(locals[cLANGUAGE].nationality_4);
	$('[name=InvitationNationality]  option[value="5"]').html(locals[cLANGUAGE].nationality_5);
	$('[name=InvitationNationality]  option[value="6"]').html(locals[cLANGUAGE].nationality_6);
	$('[name=InvitationNationality]  option[value="7"]').html(locals[cLANGUAGE].nationality_7);
	
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
			InvitationNationality: locals[cLANGUAGE].nationality_title,
			InvitationLanguage: locals[cLANGUAGE].language_title,
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
			output = output + '<div class="ui-block-a">' +names[key2] + ':</div><div class="ui-block-b">' + data[key] + '</div>';
		}		
		output = output + '</div>';
		$("#reviewInvitation").html(output);
	
		$("#confirm").trigger("create");


});	