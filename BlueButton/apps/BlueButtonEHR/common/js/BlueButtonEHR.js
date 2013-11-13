/**
* @license
* Licensed Materials - Property of IBM
* 5725-G92 (C) Copyright IBM Corp. 2006, 2013. All Rights Reserved.
* US Government Users Restricted Rights - Use, duplication or
* disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
*/

function wlCommonInit(){

	/*
	 * Application is started in offline mode as defined by a connectOnStartup property in initOptions.js file.
	 * In order to begin communicating with Worklight Server you need to either:
	 * 
	 * 1. Change connectOnStartup property in initOptions.js to true. 
	 *    This will make Worklight framework automatically attempt to connect to Worklight Server as a part of application start-up.
	 *    Keep in mind - this may increase application start-up time.
	 *    
	 * 2. Use WL.Client.connect() API once connectivity to a Worklight Server is required. 
	 *    This API needs to be called only once, before any other WL.Client methods that communicate with the Worklight Server.
	 *    Don't forget to specify and implement onSuccess and onFailure callback functions for WL.Client.connect(), e.g:
	 *    
	 *    WL.Client.connect({
	 *    		onSuccess: onConnectSuccess,
	 *    		onFailure: onConnectFailure
	 *    });
	 *     
	 */
	
	
	// Common initialization code goes here
	
	
	$.mobile.page.prototype.options.domCache = true;	
	$.mobile.loadPage("app-pages/Appointments.html", {});
	$.mobile.loadPage("app-pages/cardiac.html", {reloadPage: true});

}

$( document ).on('pagebeforeshow','#cardiac', function(event){
    extractData().then(function(p){
        var missing_data_array = report_missing_data(p);
        if (missing_data_array.length > 0) {
          $('#errors')
          .show()
          .html(function(){
            var out = '<h2>Can\'t Compute Cardiovascular Risk Score</h2><p>Can\'t compute cardiovascular risk score from available data because of the following issues:</p><ul>';
              $.each(missing_data_array, function(i, v){ out += '<li>' + missing_data_array[i] + '</li>'; }) 
              return out + '</ul>';
          });

          return; // abort script
          } else {
          $('#holder').show();
          draw_visualization();
        }			 

      });

      // checks for data needed to compute risk score. returns a possibly empty array of strings.
      // if the array is empty everything's ok. TODO: seperate missing and out of range criteria
      var report_missing_data = function(p){
        var a = [];
        if (p.gender.value != 'male' && p.gender.value != 'female') a.push('Gender is required')
        if (p.sbp.value < 105 || p.sbp.value > 200) a.push('Systolic blood pressure must be between 105 and 200mm/Hg')
        if (p.cholesterol.value < 140 || p.cholesterol.value > 400) a.push('Total cholesterol must be between 140 and 400mg/dL')
        if (p.HDL.value < 30 || p.HDL.value > 150) a.push('HDL cholesterol must be between 30 and 150mg/dL')
        if (p.hsCRP.value < 0.03 || p.hsCRP.value > 20) a.push('hsCRP must be between 0.03 and 20mg/L')
        if (p.smoker_p.value === false || p.smoker_p.value === true) {} else { a.push('Current smoking status must be defined') }
        if (p.fx_of_mi_p.value === false || p.fx_of_mi_p.value === true) {} else { a.push('Family history of heart attack before the age of 60 must be defined') }
        return a;
      };
});
