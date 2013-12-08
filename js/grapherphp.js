/*
  File:  grapher.js
  Cameron R. Morris, UMass Lowell Computer Science, cmorris@cs.uml.edu
  Copyright (c) 2013 by Cameron R. Morris.  All rights reserved.  May be freely
  copied or excerpted for educational purposes with credit to the author.

  Last Updated: November 17, 2013 at 12:30 PM

  Description: Contains all the functions required to generate the graphing
  calculator in the HTML canvas.

  Original author:

  * HTML5 Canvas Graphing Calculator
  * By Curran Kelleher 11/14/2013
  *
  * Draws from examples found in
  * https://github.com/curran/screencasts/tree/gh-pages/grapher

  */

// This function will send the expression to the server to be saved
// Source for AJAX: http://www.w3schools.com/php/php_ajax_php.asp
function saveExpression() {

  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  }
  else {
    // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }

  // Callback for AJAX completion
  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200 ) {

      if( xmlhttp.responseText == "OK" ) {
        document.getElementById("errormessage").innerHTML= "Saved.";
        //Update dropdown
        loadExpressions();
      }
      else {
        document.getElementById("errormessage").innerHTML= xmlhttp.responseText;
      }
    }
  }
  var parameters = "";

  parameters += "&expression=" + encodeURIComponent(document.getElementById("inputField").value);
  parameters += "&xmin=" + document.getElementById("xmin").value;
  parameters += "&xmax=" + document.getElementById("xmax").value;
  parameters += "&ymin=" + document.getElementById("ymin").value;
  parameters += "&ymax=" + document.getElementById("ymax").value;

  // Send request to store to database
  xmlhttp.open("GET","grapherServer.php?action=saveExpression"+parameters,true);
  xmlhttp.send();

}

// This function will load the expression stored on the server update the form
// Source for AJAX: http://www.w3schools.com/php/php_ajax_php.asp

// Populates the expressions;
document.onload = loadExpressions();

function loadExpressions() {

  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  }
  else {
    // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }

  // Callback for AJAX completion
  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200 ) {

      document.getElementById("serverExpressions").innerHTML= xmlhttp.responseText;
    }
  }
  // Send request for the expressions
  xmlhttp.open("GET","grapherServer.php?action=loadExpressions",true);
  xmlhttp.send();

}

// This function will update the fields when a item is selected from the server
// expressions
function updateFields() {

  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  }
  else {
    // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }

  // Callback for AJAX completion
  xmlhttp.onreadystatechange=function() {
    var result;
    if (xmlhttp.readyState==4 && xmlhttp.status==200 ) {

      //Update fields
      result = xmlhttp.responseText;
      result = result.split(" ");

      document.getElementById("inputField").value = result[0];
      document.getElementById("xmin").value = result[1];
      document.getElementById("xmax").value = result[2];
      document.getElementById("ymin").value = result[3];
      document.getElementById("ymax").value = result[4];

      //Update URL
      location.hash = result[0] + ","
        + result[1] + ","
        + result[2] + ","
        + result[3] + ","
        + result[4];
    }
  }

  var id = document.getElementById("expressions").value;

  // Send request to get the information for the specified expression
  xmlhttp.open("GET","grapherServer.php?action=loadExpression&id="+id,true);
  xmlhttp.send();


}
