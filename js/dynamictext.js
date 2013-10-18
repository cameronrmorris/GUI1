/*
  File:  ~cmorris/GUI/dynamictext.js
  Cameron R. Morris, UMass Lowell Computer Science, cmorris@cs.uml.edu
  Copyright (c) 2013 by Cameron R. Morris.  All rights reserved.  May be freely
  copied or excerpted for educational purposes with credit to the author.

  Last Updated: October 3, 2013 at 2:40 PM

  Description: This file contains the functions for the dynamic text assignment
*/

// This function will place the content from the JSON file onto the document.
// Much of this is Jesse's work : https://teaching.cs.uml.edu/~heines/91.461/91.461-2010-11f/CSSTests/FormattingText/build/web/FormattingText-listing.htm

function placeContent() {
    var strContent = "";

    // create dynamic content from JSON
    strContent += "<h1 class='title'>" + story.title + "</h1>" ;
    strContent += "<h2 class='author'>by " + story.author + "</h2>" ;
    strContent += "<h3 class='location'>" + story.location + "</h3>" ;
    strContent += "<h3 class='date'>" + story.date + "</h3>" ;
    strContent += "<a class='source' href=\"" + story.source + "\"><h3>Source</h3></a>" ;
    // loop through all the paragraphs and sentences
    for ( var para = 0 ; para < story.text.paragraphs.length ; para++ ) {
        strContent += "<p class='paragraph'>" ;
        for ( var sent = 0 ; sent < story.text.paragraphs[para].length ; sent++ ) {
            strContent += story.text.paragraphs[para][sent] + "&nbsp; " ;
        }
        strContent += "</p>" ;
    }
    // place dynamic content on page
    $("#content").html( strContent ) ;
}
