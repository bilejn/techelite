


	function checkLanguage(){
		navigator.globalization.getPreferredLanguage(
		    //Get Language from Settings
		    function (locale) {
				var LANGUAGE = locale.value.charAt(0) + locale.value.charAt(1);
					//Check if language exists and set it as apps language
					if (checkLanguageExists(LANGUAGE)){
						$.jStorage.set("lang", LANGUAGE);
					} else {
						$.jStorage.set("lang", "en");	
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
		    //On Failure set language to English
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

	}
	


	
var locals = {
    'en': {
        header_title: "Invite Me",
        header_person: "The person you want to invite:",
        InvitationFirstname: "First name", 
        InvitationLastname: "Last name", 

		
		nationality: ["Nationality","Brasil", "Canada", "China", "Japan", "Spain", "UK", "USA"],
		
		language: ['Language', 'Arabic', 'English'],

		
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
		sent: "Invitation sent.",
		error: "Error sending invitation.",
		
		
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
		
		nationality: ['Nacionalnost','Brazil', 'Kanada', 'Kina', 'Japan', 'Spanija', 'Velika Britanija', 'SAD'],

		language: ['Jezik', 'Arapski', 'Engleski'],

		
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
		sent: "Pozivnica poslata.",
		error: "Greska u slanju pozivnice.",

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
	
		nationality: ['الجنسية','البرازيل', 'كندا', 'الصين', 'اليابان', 'اسبانيا', 'المملكة المتحدة', 'الولايات المتحدة الأمريكية'],
		
		language: ['اللغة', 'العربية', 'الأنكليزية'],
		
		InvitationPhoneNo: "رقم الأتصال",
		InvitationEmail: "البريد الإلكتروني",
		InvitationAnotherContactInfo: "بيانات شخص آخر",

		InvitationGender: "الجنس",
		male: "ذكر &nbsp &nbsp",
		female: "انثى",
		
		InvitationStatus: "الحالة",
		
		header_inviter: "بيانات الداعي",
		
		InviterFirstname: "اسم الأول لداعي",
		InviterLastname: "الاسم الأخير لداعي",
		InviterPhoneNo: "رقم الاتصال بالداعي",
		InviterEmail: "البريد الإلكتروني لداعي",
		
		submit: "ارسال",
		clear: 'تصفية الحقول',
		sent: "تم الإرسال",
		error: "خطأ أثناء الإرسال",
		
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



