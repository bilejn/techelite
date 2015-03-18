


	function checkLanguage(){
		navigator.globalization.getPreferredLanguage(
		    //Get Language from Settings
		    function (locale) {
				var LANGUAGE = locale.value.charAt(0) + locale.value.charAt(1);
					//Check if language exists and set it as apps language
					if (checkLanguageExists(LANGUAGE)){
						$.jStorage.set("lang", LANGUAGE);
					} else {
						$.jStorage.set("lang", "ar");	
					}
					if ($.jStorage.get("rtl") != "true" && $.jStorage.get("lang") == "ar"){
						$.jStorage.set("rtl", "true");
						window.location.reload(true);					
					}
					if ($.jStorage.get("rtl") == "true" && $.jStorage.get("lang") != "ar"){
						$.jStorage.set("rtl", "false");
						window.location.reload(true);					
					}
			

		    },
		    //On Failure set language to english
		    function () {
				$.jStorage.set("lang", "en");
			}
		 );
	}
	
	
	// check if support exists for default language
	function checkLanguageExists(lang){
		var arr = Object.keys(locals);
		for (var i = 0; i < arr.length;  i++){
			if (arr[i] == lang){
				return true;
			}
		}
		return false;
	}

	// load rtl css if language is Arabic
	function loadRTL(){

		document.getElementsByTagName("head")[0].removeChild(document.getElementById("css"));
		document.getElementsByTagName("head")[0].removeChild(document.getElementById("js"));

	  var filerefcss=document.createElement("link")
	  filerefcss.setAttribute("rel", "stylesheet")
	  filerefcss.setAttribute("type", "text/css")
	  filerefcss.setAttribute("href", "css/rtl.jquery.mobile-1.4.0.css");
		document.getElementsByTagName("head")[0].appendChild(filerefcss);

	
		/* $("#home").page("refresh"); */

	}
	


	
var locals= {
    'en': {
        header_title: "Invite Me",
        header_person: "The person you want to invite:",
        InvitationFirstname: "First name", 
        InvitationLastname: "Last name", 


        nationality_title: 'Nationality',
        nationality_1: 'Brazil',
        nationality_2: 'Canada',
        nationality_3: 'China',
		nationality_4: 'Japan',
		nationality_5: 'Spain',
		nationality_6: 'UK',
		nationality_7: 'USA',
		
		language_title: 'Language',
		language_1: 'Arabic',
		language_2: 'English',
		
		InvitationPhoneNo: "Phone number",
		InvitationEmail: "E-mail",
		InvitationAnotherContactInfo: "Another contact info",
		
		InvitationGender: "Gender",
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
		confirmDelete: 'Delete?',
		cancelDelete: 'Cancelled',
		
		/*confirm*/
		
		confirm_title:'Confirm and send',
		send_button: 'Send',
		back_button: 'Back'
		
    },
	
    'sr': {
        header_title: "Pozovi me",
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
		sent: "Pozivnica poslata",
		/* alerts*/
		
		fillAll: 'Molimo ispunite sva obavezna polja.',
		confirmDelete: 'Obrisi?',
		cancelDelete: 'Otkazano',
		
		/*confirm*/
		
		confirm_title:'Potvrdi i posalji',
		send_button: 'Posalji',
		back_button: 'Nazad'
		
    },
	
	'ar': {
        header_title: "ادعني",
		header_person:	"الشخص المراد دعوته للإسلام:",
		InvitationFirstname: "الاسم الأول", 
		InvitationLastname:	"الاسم الأخير", 
		
		nationality_title: 'الجنسية',
        nationality_1: 'البرازيل',
        nationality_2: 'كندا',
		nationality_3: 'الصين',
		nationality_4: 'اليابان',
		nationality_5: 'اسبانيا',
		nationality_6: 'المملكة المتحدة',
		nationality_7: 'الولايات المتحدة الأمريكية',
		
		language_title: 'اللغة',
		language_1: 'العربية',
		language_2: 'الأنكليزية',
		
		InvitationPhoneNo: "رقم الأتصال",
		InvitationEmail: "البريد الإلكتروني",
		InvitationAnotherContactInfo: "بيانات شخص آخر",

		InvitationGender: "الجنس",
		male: "ذكر &nbsp &nbsp",
		female: "انثى",
		
		InvitationStatus: "الحالة",
		
		header_inviter: "بيانات الداعي",
		
		InviterFirstname: "Ime",
		InviterLastname: "الاسم الأخير لداعي",
		InviterPhoneNo: "رقم الاتصال بالداعي",
		InviterEmail: "البريد الإلكتروني لداعي",
		
		submit: "ارسال",
		clear: 'تصفية الحقول',
		
	/* alerts*/
		
	fillAll: 'الرجاء تعبئة جميع الحقول',
	confirmDelete: 'التأكد من الحذف؟',
	cancelDelete: 'تم الإلغاء',
		
	/*confirm*/

	confirm_title:'هل متأكد من البيانات؟',
	send_button: 'ارسل',
	back_button: 'الرجوع'
}
	
};



