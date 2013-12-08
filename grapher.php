<!DOCTYPE html>
<html>
  <head>
    <meta charset=utf-8 />
    <!--
        File:  grapher.php
        GUI Programming I

        Cameron R. Morris
        cmorris@cs.uml.edu
        UMass Lowell Computer Science Undergraduate

        Last Updated: December 8, 2013 at 3:00 PM

        Description: This page will display an interactive graphing calculator
        which allow the user to manipulate the function plot. Extended with
				server abilities to save and load expressions

        Original author:

        HTML5 Canvas Graphing Calculator
        By Curran Kelleher 11/14/2013

        Draws from examples found in
        https://github.com/curran/screencasts/tree/gh-pages/grapher

      -->
    <title>Graphing Calculator</title>

    <!-- Style sheet -->
    <link rel="stylesheet" type="text/css" href="css/style.css" />
    <!-- Grapher page style -->
    <link rel="stylesheet" type="text/css" href="css/grapher.css" />
    <!-- Scripts -->
    <script src="js/guiutil.js"></script>

    <!-- Load dependencies -->
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js"></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/mathjs/0.15.0/math.min.js"></script>

    <!-- This contains the main graphing calculator program. -->
    <script src="js/grapher.js"> </script>
		<!-- This contains the serverside javascript functions -->
    <script src="js/grapherphp.js"> </script>
  </head>
  <body>

    <!-- Title -->
    <div id="header">
      <script>
        showTitle();
      </script>
    </div>

    <!-- Navigation bar -->
    <script>
      showNavigation();
    </script>

    <!-- Content section -->
    <div id="content">
      <h3>HTML5 Graphing calculator</h3>
      <!-- The math expression will be plotted on this Canvas. -->
      <canvas width="400" height="400" id="myCanvas"></canvas>
      <!-- This text field will contain the math expression to plot. -->
      <!-- Blank div for the errormessage -->
      <div id="errormessage"></div>
      <div id="fields">
        <label for="inputField">F(x+t)=
          <input id="inputField" tabindex="1" type="text">
        </label>
        <label for="xmin">X minimum:
          <input id="xmin" tabindex="2" type="number" min="-20" max="0" value="-10">
        </label>
        <label for="xmax">X maximum:
          <input id="xmax" tabindex="3" type="number" min="0" max="20" value="10">
        </label>
        <label for="ymin">Y minimum:
          <input id="ymin" tabindex="4" type="number" min="-20" max="0" value="-10">
        </label>
        <label for="ymax">Y maximum:
          <input id="ymax" tabindex="5" type="number" min="0" max="20" value="10">
        </label>
        <!-- Sends data to server -->
        <input id="saveButton" tabindex="6" type="button" value="Save expression" onClick="saveExpression()">
        <!-- Populated by server -->
        <label id="serverExpressions" for="expressions">Load expression:
          <select></select>
        </label>
      </div>
    </div>
  </body>
</html>
