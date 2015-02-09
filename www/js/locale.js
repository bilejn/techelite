	var cLANGUAGE = "sr";

	function checkLanguage(){
		navigator.globalization.getPreferredLanguage(
		    //Get Language from Settings
		    function (locale) {
				var LANGUAGE = locale.value.charAt(0) + locale.value.charAt(1);

				if (checkLanguageExists(LANGUAGE)){
					cLANGUAGE = LANGUAGE;
					$("#home").trigger("pagebeforeshow");
				}
				
		    },
		    //On Failure set language to english
		    function () {
				cLANGUAGE = "en";
			}
		 );
	}
	
	function checkLanguageExists(lang){
		var arr = Object.keys(locals);
		for (var i = 0; i < arr.length;  i++){
			if (arr[i] == lang){
				return true;
			}
		}
		return false;
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
		clear: 'Clear',
		
		
		/* alerts*/
		
		fillAll: 'Fill all required fields',
		confirmDelete: 'Cancel delete?',
		cancelDelete: 'Cancelled',
		
		/*confirm*/
		
		confirm_title:'Confirm and send',
		send_button: 'Send',
		back_button: 'Back'
		
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
		clear: 'Obrisi',
		
		/* alerts*/
		
		fillAll: 'Molimo ispunite sva obavezna polja.',
		confirmDelete: 'Otkazi brisanje?',
		cancelDelete: 'Otkazano',
		
		/*confirm*/
		
		confirm_title:'Potvrdi i posalji',
		send_button: 'Posalji',
		back_button: 'Nazad'
		
    }
};



