	var cLANGUAGE = "ar";

	function checkLanguage(){
		navigator.globalization.getPreferredLanguage(
		    //Get Language from Settings
		    function (locale) {
				var LANGUAGE = locale.value.charAt(0) + locale.value.charAt(1);
			//Check if language exists and set it as apps language
				if (checkLanguageExists(LANGUAGE)){
					cLANGUAGE = LANGUAGE;
				/* 	$("#home").trigger("pagebeforeshow"); */
				} else {
					cLANGUAGE = "ar";
				/* 	$("#home").trigger("pagebeforeshow");	 */			
				}
				
		    },
		    //On Failure set language to english
		    function () {
				cLANGUAGE = "en";
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

	// load ltr css if language is English
	function loaden(){

	  var filerefcss=document.createElement("link")
	  filerefcss.setAttribute("rel", "stylesheet")
	  filerefcss.setAttribute("type", "text/css")
	  filerefcss.setAttribute("href", "css/jquery.mobile-1.4.2.css");
		document.getElementsByTagName("head")[0].appendChild(filerefcss);

	  var filerefjs=document.createElement('script')
	  filerefjs.setAttribute("type","text/javascript")
	  filerefjs.setAttribute("src", "js/jquery.mobile-1.4.2.js");
		document.getElementsByTagName("head")[0].appendChild(filerefjs);		
		
		
		$("#home").trigger("pagebeforeshow");

	}
	
	// load rtl css if language is Arabic
	function loadar(){

		
		document.getElementsByTagName("head")[0].removeChild(document.getElementById("css"));
		document.getElementsByTagName("head")[0].removeChild(document.getElementById("js"));

	  var filerefcss=document.createElement("link")
	  filerefcss.setAttribute("rel", "stylesheet")
	  filerefcss.setAttribute("type", "text/css")
	  filerefcss.setAttribute("href", "css/rtl.jquery.mobile-1.4.0.css");
		document.getElementsByTagName("head")[0].appendChild(filerefcss);
	

		
		
		/* $("#home").trigger("pagebeforeshow"); */
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
		
		/* alerts*/
		
		fillAll: 'Molimo ispunite sva obavezna polja.',
		confirmDelete: 'Otkazi brisanje?',
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

		gender: "الجنس",
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



