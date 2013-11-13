/**
* @license
* Licensed Materials - Property of IBM
* 5725-G92 (C) Copyright IBM Corp. 2006, 2013. All Rights Reserved.
* US Government Users Restricted Rights - Use, duplication or
* disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
*/



$( document ).on('pagebeforeshow','#appointmentsPage' ,function(event){ 
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
    
    $("#calendar").jqmCalendar({
        events: [{
            "summary": "Appt With Dr Myers: 14:30",
            "begin": new Date(y,m, 27 ),
            "end": new Date(y, m, 28)
            
        }, {
            "summary": "Knee Therapy Appt: 08:30",
            "begin": new Date(y, m, d + 3),
            "end": new Date(y, m, d + 4)
            
        }, {
            "summary": "Knee Therapy Appt: 10:00 )",
            "begin": new Date(y, m, d + 6),
            "end": new Date(y, m, d + 7)
            
        }, 
                ],
                 months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        days: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        startOfWeek: 0
        
    });
});
