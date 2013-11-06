/*
  File:  ~cmorris/GUI/dynamictextjQuery.js
  Cameron R. Morris, UMass Lowell Computer Science, cmorris@cs.uml.edu
  Copyright (c) 2013 by Cameron R. Morris.  All rights reserved.  May be freely
  copied or excerpted for educational purposes with credit to the author.

  Last Updated: October 19, 2013 at 1:40 PM

  Description: This file contains the functions for the dynamic table
  assignment.

  Note: buildTable() depends on formutilities.js which is Jesse's work.
*/


// Form functions //

$().ready(function() {

    // validate signup form on keyup and submit
    $("#tableForm").validate({

        invalidHandler: function(event, validator) {
            var errors = validator.numberOfInvalids();
            if (errors) {
                var message = errors == 1
                    ? 'You missed 1 field. It has been highlighted above'
                    : 'You missed ' + errors + ' fields.  They have been highlighted above';
                $("#errormessage").html(message);
                $("#errormessage").show();
            } else {
                $("#errormessage").hide();
            }
        },

        errorPlacement: function(error, element) {
            error.insertAfter( element );
        },

        rules: {
            n1: {
                required: true,
                digits: true
            },
            n2: {
                required: true,
                digits: true
            },
            n3: {
                required: true,
                digits: true
            },
            n4: {
                required: true,
                digits: true
            }
        },
        messages: {

            n1: "A valid integer is required.",
            n2: "A valid integer is required.",
            n3: "A valid integer is required.",
            n4: "A valid integer is required."

        }
    });
});
