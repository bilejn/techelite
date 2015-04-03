var nations = {
	nationalities: [
		{"0": "Brasil"},
		{"1": "Canada"},
	],
	languages: []
};

var output = '<select name="InvitationNationality" id="InvitationNationality">';
for (i=0; i < locals[cLANGUAGE].nationality.length; i++){
	output = output + '<options value="' + i + '">'+ locals[cLANGUAGE].nationality[i] +'</option>';
}
output = output + '</select>';