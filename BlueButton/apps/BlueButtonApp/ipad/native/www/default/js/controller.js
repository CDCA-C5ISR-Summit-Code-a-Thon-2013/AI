
/* JavaScript content from js/controller.js in folder common */
var controller = function(){
	
	return {
		init: function(){
			$.get("pages/login.html", function(data){
				$("#mainPort").html(data);
				renderer.setLoginHeight();
			});
		},
		logIn: function(){
			var username = $("#username").val().trim();
			var password = $("#password").val().trim();
			
			if(username=="" || password=="")
				alert("Please enter username and/or password!");
			else
				$.get("pages/landing.html", function(data){
					$("#mainPort").html(data);
				});
		},
		logout: function(){
			$.get("pages/login.html", function(data){
				$("#mainPort").html(data);
				renderer.setLoginHeight();
			});
		},
		home: function(){
			$.get("pages/landing.html", function(data){
				$("#mainPort").html(data);
			});
		},
		loadBpPage: function(){
			$.get("pages/bloodPressure.html", function(data){
				$("#mainPort").html(data);
			});
		},
		loadEmergencyInfoPage: function(){
			$.get("pages/emergencyInfo.html", function(data){
				$("#mainPort").html(data);
			});
		},
		loadVaccinePage: function(){
			$.get("pages/vaccineRecords.html", function(data){
				$("#mainPort").html(data);
			});
		},
		loadCardiacPage: function(){
			$.get("pages/cardiac.html", function(data){
				$("#mainPort").html(data);
			});
		},
		loadAppointmentsPage: function(){
			$.get("pages/Appointments.html", function(data){
				$("#mainPort").html(data);
			});
		},
		loadMedicationPage: function(){
			$.get("pages/medication.html", function(data){
				$("#mainPort").html(data);
			});
		},
		drugInteraction: function(){
			$.get("pages/drugInteraction.html", function(data){
				$("#mainPort").html(data);
			});
		}
	};
}();