//JavaScript 6th Edition
//Chapter 12
//Hands-on Project 12-2

//Author: Thomas Donaldson
//Date:   July 23, 2018

//Filename: script.js

function convert() {
    var lb = $("#pValue").val();
    var kg = Math.round(lb / 2.2);
    $("#kValue").html(kg);
}
   $("#convertButton").click(convert);
   $("#pValue").val("");
   $("#kValue").html("");