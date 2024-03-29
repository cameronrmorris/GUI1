/*
  File:  ~cmorris/GUI/dynamictablejQuery.js
  Cameron R. Morris, UMass Lowell Computer Science, cmorris@cs.uml.edu
  Copyright (c) 2013 by Cameron R. Morris.  All rights reserved.  May be freely
  copied or excerpted for educational purposes with credit to the author.

  Last Updated: November 6, 2013 at 4:10 PM

  Description: This file contains the jQuery validation functions for the
  dynamic table assignment
*/


// Form functions //

$().ready(function() {

    // Multiplier beginning is greater than end
    $.validator.addMethod("n2smaller", function(value, element) {
        return this.optional(element) || parseInt(value) > $("#n1").val()
    }, "Multiplier begin is greater than the end.");
    // Multiplier beginning is greater than end
    $.validator.addMethod("n4smaller", function(value, element) {
        return this.optional(element) || parseInt(value) > $("#n3").val()
    }, "Multiplier begin is greater than the end.");

    var errorMessages = {
        required: "This field is required.",
        digits: "Please enter a valid integer.",
        n2smaller: "Multiplier End has to be greater than the start.",
        n4smaller: "Multplicand End has to be greater than the start."
    };

    // validate signup form on keyup and submit
    $("#tableForm").validate({

        // Tells the user the number of fields missed
        invalidHandler: function(event, validator) {
            var errors = validator.numberOfInvalids();
            if (errors) {
                var message = errors == 1
                    ? 'You missed 1 field. It has been highlighted above'
                    : 'You missed ' + errors
                    + ' fields.  They have been highlighted above';
                $("#errormessage")
                    .html(message)
                    .delay(5000)
                    .slideUp(300, function() {
                        $("#errormessage")
                            .html(" ")
                            .css("display","block");
                    });
            } else {
                $("#errormessage").hide();
            }
        },

        // Changes where the error message is.
        errorPlacement: function(error, element) {
            error.insertAfter( element );
        },

        // Rules for the fields
        rules: {
            n1: {
                required: true,
                digits: true
            },
            n2: {
                required: true,
                digits: true,
                n2smaller: true
            },
            n3: {
                required: true,
                digits: true
            },
            n4: {
                required: true,
                digits: true,
                n4smaller: true
            }
        },
        // Error messages for each input field
        messages: {
            n1: errorMessages,
            n2: errorMessages,
            n3: errorMessages,
            n4: errorMessages
        }
    });
});
