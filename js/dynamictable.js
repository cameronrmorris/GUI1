/*
	File:	 ~cmorris/GUI/dynamictext.js
	Cameron R. Morris, UMass Lowell Computer Science, cmorris@cs.uml.edu
	Copyright (c) 2013 by Cameron R. Morris.	All rights reserved.	May be freely
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

	if( validNumber(parseInt(str)) ) {
		return parseInt(str);
	}
	else
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
	document.getElementById("errormessage").innerHTML="";


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
		document.getElementById("errormessage").innerHTML=
			"Number 1 is not valid.";
		// Cancel submit
		return false;

	}
	if( !validNumber( frm.n2.value ) ) {

		// Alert user
		frm.n2.style.borderColor = "red";
		frm.n2.focus();
		document.getElementById("errormessage").innerHTML=
			"Number 2 is not valid.";

		// Cancel submit
		return false;

	}

	// Multiplier beginning is greater than end
	if( parseInt(frm.n1.value) > parseInt(frm.n2.value) ) {

		// Alert user
		frm.n1.style.borderColor = "red";
		frm.n1.focus();
		frm.n2.style.borderColor = "red";
		frm.n2.focus();
		document.getElementById("errormessage").innerHTML=
			"Error: Multiplier begin is greater than the end.";

		// Cancel submit
		return false;


	}

	if( !validNumber( frm.n3.value ) ) {

		// Alert user
		frm.n3.style.borderColor = "red";
		frm.n3.focus();
		document.getElementById("errormessage").innerHTML=
			"Number 3 is not valid.";

		// Cancel submit
		return false;

	}
	if( !validNumber( frm.n4.value ) ) {

		// Alert user
		frm.n4.style.borderColor = "red";
		frm.n4.focus();
		document.getElementById("errormessage").innerHTML=
			"Number 4 is not valid.";

		// Cancel submit
		return false;

	}


	// Multiplicand beginning is greater than end
	if( parseInt(frm.n3.value) > parseInt(frm.n4.value) ) {

		// Alert user
		frm.n3.style.borderColor = "red";
		frm.n3.focus();
		frm.n4.style.borderColor = "red";
		frm.n4.focus();
		document.getElementById("errormessage").innerHTML=
			"Error: Multiplicand begin is greater than the end.";

		// Cancel submit
		return false;


	}


	// Valid input
	return true;
}


function buildTable() {

	// Get the values passed from the form
	var numbers = new Array();
	// Horizontal start
	numbers[0] = parseInt(getParameter("n1"));
	// Horizontal end
	numbers[1] = parseInt(getParameter("n2"));
	// Vertical start
	numbers[2] = parseInt(getParameter("n3"));
	// Vertical end
	numbers[3] = parseInt(getParameter("n4"));

	// Holds the resulting HTML table
	var strResult = "";

	// Title
	strResult += '<h3>Multiplication Table of<br>Multipliers: ';
	strResult += numbers[0] + " to ";
	strResult += numbers[1] + ". Multiplicands: ";
	strResult += numbers[2] + " to ";
	strResult += numbers[3] + ".";
	strResult += '</h3>'

	// Build the table
	strResult += '<table class="dynamictable">';

	// Generate top columns
	strResult += '<tr><td></td>';
	for( var i= numbers[0] ; i <= numbers[1]; i++ ) {

		strResult += '<td>' + i + '</td>';

	}
	strResult += '</tr>';
	// Generate rows headers and values
	for( var i = numbers[2]; i <= numbers[3]; i++ ) {

		strResult += '<tr>';
		strResult += '<td>' + i + '</td>';
		for( var j = numbers[0] ; j <= numbers[1]; j++ ) {

			strResult += '<td>';
			var result =	i * j;
			// Decimal number.
			if( result != Math.floor( result ) ) {
				strResult += result.toFixed(2);
			}
			// Does not contain decimal.
			else {
				strResult += result;
			}
			strResult += '</td>';

		}
		strResult += '</tr>';
	}
	strResult += '</table>';

	// Place the table on the page
	document.getElementById("content").innerHTML=strResult;

	// Need scrolling?

	if( numbers[1]-numbers[0] > 15 ) {
		document.getElementById("content").style.overflow = "scroll";
	}
}
