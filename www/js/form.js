

var form = (function() {
	
	var url = "http://www.cuh.org.sa/invite/api/InvitationApi";
/* 	var data = {"InvitationFirstname":"Invitation Firstname 1",
				"InvitationLastname":"Invitation Lastname 1",
				"InvitationNationality":1,
				"InvitationLanguage":1,
				"InvitationPhoneNo":"11111",
				"InvitationEmail":"invitation1@email.com",
				"InvitationAnotherContactInfo":"10000",
				"InvitationGender":"M",
				"InvitationStatus":1,
				"InviterFirstname":"Inviter Firstname 1",
				"InviterLastname":"Inviter Lastname 1",
				"InviterPhoneNo":"11000",
				"InviterEmail":"inviter1@email.com"}; */
				
	var data = {};
	
	return {
	
		invitationForm: function () {
		/* Reset all control fields and set ok variable to true */
				var ok = true;
				$("#generalData p").removeClass("invalid");
			
		/* Check InvitationFirstname */			
				var value = $("#InvitationFirstname").val();
					data.InvitationFirstname = value;
					if (value == ""){
						var p = $('p[for="InvitationFirstname"]');
						p.addClass("invalid");
						ok = false;
					}

		/* Check InvitationLastname */						
				var value = $("#InvitationLastname").val();
				data.InvitationLastname = value;
					if (value == ""){
						var p = $('p[for="InvitationLastname"]');
						p.addClass("invalid");
						ok = false;
					}

		/* Check InvitationNationality */						
				var value = $("#InvitationNationality").val();
						data.InvitationNationality = parseInt(value);
					if (value == "0"){
						var p = $('p[for="InvitationNationality"]');
						p.addClass("invalid");
						ok = false;
					}	

		/* Check InvitationLanguage */						
				var value = $("#InvitationLanguage").val();
					data.InvitationLanguage = parseInt(value);
					if (value == "0"){
						var p = $('p[for="InvitationLanguage"]');
						p.addClass("invalid");
						ok = false;
					}

		/* Check InvitationPhoneNo */						
				var value = $("#InvitationPhoneNo").val();
				data.InvitationPhoneNo = value;	

		/* Check InvitationEmail */						
				var value = $("#InvitationEmail").val();
					data.InvitationEmail = value;
					if (value == ""){
						var p = $('p[for="InvitationEmail"]');
						p.addClass("invalid");
						ok = false;
					}
		/* Check InvitationAnotherContactInfo */						
				var value = $("#InvitationAnotherContactInfo").val();
				data.InvitationAnotherContactInfo = value;	
				

		/* Check InvitationGender */						
				var value = $("input[name=InvitationGender]:checked").val();
					if (value == undefined){
						var p = $('p[for="InvitationGender"]');
						p.addClass("invalid");
						data.InvitationGender = "";
						ok = false;
					} else {
						if (value = "male"){
							data.InvitationGender = "M";
						} else if (value = "female"){
							data.InvitationGender = "F";
						} 
					}	
					
		/* Check InvitationStatus */			
				//var value = $("#InvitationStatus").val();
				data.InvitationStatus = 1;
				/* 	if (value == ""){
						var p = $('p[for="InvitationStatus"]');
						p.addClass("invalid");
						ok = false;
				} */
					
			/* =========== Another contact information: =============== */					
			
			/* Check InviterFirstname */						
				var value = $("#InviterFirstname").val();
				data.InviterFirstname = value;
					if (value == ""){
						var p = $('p[for="InviterFirstname"]');
						p.addClass("invalid");
						ok = false;
					}				
	
			/* Check InviterLastname */						
				var value = $("#InviterLastname").val();
				data.InviterLastname = value;
					if (value == ""){
						var p = $('p[for="InviterLastname"]');
						p.addClass("invalid");
						ok = false;
					}	
	
			/* Check InviterPhoneNo */						
				var value = $("#InviterPhoneNo").val();
				data.InviterPhoneNo = value;
					if (value == ""){
						var p = $('p[for="InviterPhoneNo"]');
						p.addClass("invalid");
						ok = false;
					}

		/* Check InviterEmail */						
				var value = $("#InviterEmail").val();
				data.InviterEmail = value;
					if (value == ""){
						var p = $('p[for="InviterEmail"]');
						p.addClass("invalid");
						ok = false;
					}				
					
				$.jStorage.set("json_data", data);
					
					
				if (ok){
					$.mobile.changePage( "#confirm");			
				} else {
					alert(locals[cLANGUAGE].fillAll);
					// $.mobile.changePage( "#home", { allowSamePageTransition: true } );	 
				}
					
				return false;
		},
		
	
		sendJson: function () {
				var param = $.jStorage.get("json_data");

                $.ajax({
                    type: "POST",
                    url: "http://www.cuh.org.sa/invite/api/InvitationApi",
                    data: JSON.stringify(param),
                    contentType: "text/json",
                    success: function (data, textStatus, jqXHR) {
                        alert(JSON.stringify(data));
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        alert("Error loading list.");
                    },
                    complete: function (jqXHR, textStatus) {
                        alert(textStatus);
                    }
                });
		
			/* $.ajax({
				type: "POST",
				url : "http://www.cuh.org.sa/invite/api/InvitationApi",
				data: {"InvitationFirstname":"Invitation Firstname 1",
						"InvitationLastname":"Invitation Lastname 1",
						"InvitationNationality":1,
						"InvitationLanguage":1,
						"InvitationPhoneNo":"11111",
						"InvitationEmail":"invitation1@email.com",
						"InvitationAnotherContactInfo":"10000",
						"InvitationGender":"M",
						"InvitationStatus":1,
						"InviterFirstname":"Inviter Firstname 1",
						"InviterLastname":"Inviter Lastname 1",
						"InviterPhoneNo":"11000",
						"InviterEmail":"inviter1@email.com"},
				contentType:"text/json",
				success:function(data, textStatus, jqXHR) {
					alert(data);
				},
				error: function(jqXHR, textStatus, errorThrown) {
					alert("Error loading list.");
				},
				complete: function (jqXHR, textStatus){
					alert(textStatus);
				}
			}); */
			
		
		},
	
		/*Method deleteJson deletes "json_data" and reloads the window. The function is called from clear button (home section - end) . */		
		deleteJson: function () {
			var cLANGUAGE;
			if ($.jStorage.get("lang")==null){
					cLANGUAGE = "en";	
					$.jStorage.set("lang", cLANGUAGE);
			}else{
					cLANGUAGE = $.jStorage.get("lang");	
			}
			
			var r = confirm(locals[cLANGUAGE].confirmDelete);
			if (r == true) {
				 $.jStorage.deleteKey("json_data"); 
				 window.location.reload(true);
			} else {
				alert(locals[cLANGUAGE].cancelDelete);
			} 
		}
	}
	
}( form || {}));