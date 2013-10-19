/*
  File:  ~cmorris/GUI/dynamictext.js
  Cameron R. Morris, UMass Lowell Computer Science, cmorris@cs.uml.edu
  Copyright (c) 2013 by Cameron R. Morris.  All rights reserved.  May be freely
  copied or excerpted for educational purposes with credit to the author.

  Last Updated: October 19, 2013 at 1:40 PM

  Description: This file contains the functions for the dynamic table 
               assignment.

  Note: buildTable() depends on formutilities.js which is Jesse's work.
*/


// Form functions //

/* This function will sanitize the user input
   Source for space removal: http://goo.gl/YxuVRn */
function sanitizeNumber( number ) {

    var str = number;

    // Remove any spaces
    str = str.split(' ').join('');

    return str;

}


// This function checks a value if it is a valid number.
function validNumber( number ) {

    if( number == "" || isNaN(number) ) {
	return false;
    }
    return true;

}

/* This function validates the form input and helps the user correct it if 
   necessary */
function validateForm() {

    var frm = document.getElementById( "tableForm" );
    
    // Reset borders of text boxes
    frm.n1.style.borderColor = null;
    frm.n2.style.borderColor = null;
    frm.n3.style.borderColor = null;
    frm.n4.style.borderColor = null;

    // Sanitize the user input and update it on the page
    frm.n1.value = sanitizeNumber(frm.n1.value);
    frm.n2.value = sanitizeNumber(frm.n2.value);
    frm.n3.value = sanitizeNumber(frm.n3.value);
    frm.n4.value = sanitizeNumber(frm.n4.value);

    // Check each number box for a valid number
    if( !validNumber( frm.n1.value ) ) {

	// Alert user
	frm.n1.style.borderColor = "red";
	frm.n1.focus();
	// Cancel submit
	return false;

    }
    if( !validNumber( frm.n2.value ) ) {

        // Alert user
        frm.n2.style.borderColor = "red";
        frm.n2.focus();

        // Cancel submit
        return false;

    }
    if( !validNumber( frm.n3.value ) ) {

        // Alert user
        frm.n3.style.borderColor = "red";
        frm.n3.focus();

        // Cancel submit
        return false;

    }
    if( !validNumber( frm.n4.value ) ) {

        // Alert user
        frm.n4.style.borderColor = "red";
        frm.n4.focus();

        // Cancel submit
        return false;

    }

    return true;
}


function buildTable() {

    // Get the values passed from the form
    var numbers = new Array();
    numbers[0] = parseFloat(getParameter("number1"));
    numbers[1] = parseFloat(getParameter("number2"));
    numbers[2] = parseFloat(getParameter("number3"));
    numbers[3] = parseFloat(getParameter("number4"));

    // Holds the resulting HTML table
    var strResult = "";

    // Build the table
    strResult += '<table class="dynamictable">';

    // Generate top columns
    strResult += '<tr><td></td>';
    for( var i=0; i < numbers.length; i++ ) {
	
	strResult += '<td>' + numbers[i] + '</td>';
    
    }
    strResult += '</tr>';
    // Generate rows headers and values
    for( var i=0; i < numbers.length; i++ ) {

	strResult += '<tr>';
	strResult += '<td>' + numbers[i] + '</td>';
	for( var j=0; j < numbers.length; j++ ) {

	    strResult += '<td>';
	    strResult += ( numbers[i] * numbers[j] );
	    strResult += '</td>';

	}
	strResult += '</tr>';
    }
    strResult += '</table>';

    // Place the table on the page
    document.getElementById("content").innerHTML=strResult;

}
