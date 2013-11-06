/*
  File:  ~cmorris/GUI/guiutil.js
  Cameron R. Morris, UMass Lowell Computer Science, cmorris@cs.uml.edu
  Copyright (c) 2013 by Cameron R. Morris.  All rights reserved.  May be freely
  copied or excerpted for educational purposes with credit to the author.

  Last Updated: September 11, 2013 at 12:40 PM

  Description: This file contains utility functions to simplify scripts and repeated elements
*/


// This function writes the title to the page.

function showTitle() {

    document.write('<h2>UMass Lowell: 91.61 GUI Programming I</h2>');
    document.write('<h3>Cameron Morris - Fall 2013</h1>');
    document.write('<h5>cmorris@cs.uml.edu');

}

// This function writes the navigation bar to the page.
function showNavigation() {
    
    document.write('<nav>');
    document.write('<ul>');
    document.write('<li><a href="index.html">Home</a></li>');
    // All assignment links.
    document.write('<li><a href="assignments.html">Assignments</a>');
    document.write('<ul>');
    document.write('<li><a href="index.html">Assignment #1: Installing XAMMP</a></li>');
    document.write('<li><a href="index.html">Assignment #2: Creating Your First Web Page</a></li>');
    document.write('<li><a href="index.html">Assignment #3: Styling Your First Website with CSS</a></li>');
    document.write('<li><a href="dynamictext.html">Assignment #4: Dynamic Text</a></li>');
 document.write('<li><a href="dynamictableform.html">Assignment #5: Creating a Dynamic Table </a></li>');
     document.write('<li><a href="dynamictableformjQuery.html">Assignment #6: Using the jQuery Validation Plugin with Your Dynamic Table</a></li>');
    document.write('</ul></li>');
    document.write('<li><a href="about.html">About</a></li>');
    document.write('</ul>');
    document.write('</nav>');

}
