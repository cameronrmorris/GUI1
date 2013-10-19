/*
  File:  ~cmorris/GUI/dynamictext.js
  Cameron R. Morris, UMass Lowell Computer Science, cmorris@cs.uml.edu
  Copyright (c) 2013 by Cameron R. Morris.  All rights reserved.  May be freely
  copied or excerpted for educational purposes with credit to the author.

  Last Updated: October 19, 2013 at 1:40 PM

  Description: This file contains the functions for the dynamic table 
               assignment
*/


// Form functions //


// This function checks a value if it is a valid number.
function validNumber( number ) {

    if( number == "" || isNaN(number) ) {
	return false;
    }
    return true;

}

// This function validates the form input and helps the user correct it if 
// necessary

function validateForm() {

    var frm = document.getElementById( "tableForm" );
    
    // Reset borders of text boxes
    frm.n1.style.borderColor = null;
    frm.n2.style.borderColor = null;
    frm.n3.style.borderColor = null;
    frm.n4.style.borderColor = null;

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
