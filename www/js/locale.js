	var cLANGUAGE = "en";
	var LANGUAGE;
	function checkLanguage(){
		navigator.globalization.getPreferredLanguage(
		    //Get Language from Settings
		    function (locale) {
			alert(locale.value);
		    },
		    //On Failure set language to english
		    function () {}
		 );

	}


var locals= {
    'en': {
        header_title: "Invitation Form",
        header_person: "The person you want to invite:",
        InvitationFirstname: "First name", 
        InvitationLastname: "Last name", 


        nationality_title: 'Nationality:',
        nationality_1: 'Brazil',
        nationality_2: 'Canada',
        nationality_3: 'China',
		nationality_4: 'Japan',
		nationality_5: 'Spain',
		nationality_6: 'UK',
		nationality_7: 'USA',
		
		language_title: 'Language:',
		language_1: 'Arabic',
		language_2: 'English',
		
		InvitationPhoneNo: "Phone number",
		InvitationEmail: "E-mail",
		InvitationAnotherContactInfo: "Another contact info",
		
		gender: "Gender",
		male: "Male &nbsp &nbsp",
		female: "Female",
		
		InvitationStatus: "Status",
		
		header_inviter: "Another contact information:",

		InviterFirstname: "Inviter first name",
		InviterLastname: "Inviter last name",
		InviterPhoneNo: "Inviter phone number",
		InviterEmail: "Inviter e-mail",
		
		submit: "Submit",
		clear: 'Clear'
    },
	
    'sr': {
        header_title: "Pozivnica",
        header_person: "Osoba koju pozivate:",
        InvitationFirstname: "Ime", 
        InvitationLastname: "Prezime",

        nationality_title: 'Nacionalnost',
        nationality_1: 'Brazil',
        nationality_2: 'Kanada',
        nationality_3: 'Kina',
		nationality_4: 'Japan',
		nationality_5: 'Spanija',
		nationality_6: 'Velika Britanija',
		nationality_7: 'SAD',
		
		language_title: 'Jezik',
		language_1: 'Arapski',
		language_2: 'Engleski',
		
		InvitationPhoneNo: "Broj telefona",
		InvitationEmail: "E-posta",
		InvitationAnotherContactInfo: "Ostali podaci",
		
		InvitationGender: "Pol",		
		male: "Musko",
		female: "Zensko",
		
		InvitationStatus: "Status",
		
		header_inviter: "Podaci o pozivaocu:",
		

		InviterFirstname: "Ime",
		InviterLastname: "Prezime",
		InviterPhoneNo: "Broj telefona",
		InviterEmail: "E-posta",
		
		submit: "Posalji",
		clear: 'Obrisi'
    }
};



