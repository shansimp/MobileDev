/*( function( $ ) {
$( document ).ready(function() {
$('#cssmenu').prepend('<div id="bg-one"></div><div id="bg-two"></div><div id="bg-three"></div><div id="bg-four"></div>');
});
} )( jQuery );
*/
$(document).ready(function() {

  	"use strict";
  	//var resultDiv = document.getElementById("results");
  	//resultDiv.innerHTML = "<p>Hello world in JavaScript!</p>";
	  
  	var resultList = $("#resultList");  
  	resultList.text("This is from JQuery");
	  
  	var toggleButton = $("#toggleBtn");
	
  	toggleButton.on("click",function(){
	    resultList.toggle(500);
	
	
	    if(toggleButton.text() == "Hide")
	    {
      	toggleButton.text("Show") ;
    	}
    	else
      	toggleButton.text("Hide");
	  
  	});
	
	
	
	function valid_check()  
	{  
		//check is phone number is in valid format:
		alert(document.getElementById("txt_Phone").value);
	  	if((txt_Phone.value.match(/^[2-9]{1}\d{2}-[2-9]{1}\d{2}-\d{4}$/))) 
	  	{
  			console.log("valid PHONE number");
  		}
  		else  
  		{
	  		alert("Invalid Phone Number Format. Please input: XXX-XXX-XXXX");  
    		console.log("INVALD phone number");
  		}  
	
	  	//Check is email is valid:
	  	//Alternate, simpler: /\S+@\S+\.\S+/
	  	if((txt_Email.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))) 
	  	{
  			console.log("valid EMAIL");
  		}
  		else  
  		{
	  		alert("Invalid Email Format. Please input: XXXXXXXX@XXX.XXX");  
    		console.log("INVALD EMAIL number");
  		}  
	}
	
	
	/*Network API Calls */
	
	//on submit, we need to trigger the API with a submit event handler
	
	
	$( "#main" ).submit(function( event ) {
	  
  	console.log( "Submit Handler called." );
  	event.preventDefault();
	
  	var phrase;
  	var language;
  	var stars;
  	phrase = document.getElementById('searchPhrase').value;
  	language = document.getElementById('langChoice').value;
  	stars = document.getElementById('useStars').value;
  	console.log( phrase, language, stars );
	
  	if (stars == "on")
  	{
	    stars = "&sort=stars";
	}
	  else
	  {
	    stars = "";
	  }
	
	
	  var gitHubSearch = "https://api.github.com/search/repositories?q=" + phrase + "_language:" + language + " + stars";
	
	  //This does not need to be harcoded. This needs to be a variable.
	  //https://api.github.com/search/repositories?q=***SEARCHPHASE***_language:***VARIABLE B***&sort=***VARIABLE C***
	  //var gitHubSearch = "https://api.github.com/search/repositories?q=jquery_language:javascript&sort=stars"
	  
	  //IE broswer will require to make the cross domain value to true 
	  jQuery.support.cors = true;
	 
	//BEGINS the API CALL 
	  $.get(gitHubSearch)
	  //All 3 handler for the API
	  .success(function(r) {
	          console.log("How big is the item data? " + r.items.length);
	      displayResults(r.items);
	        })
	  .fail(function(err) {
	          console.log("Failed to query GitHub");
	          alert("API CALL FAILED. Pleae try again.")
	        })
	  .done(function() {
	          console.log("API Call completed");
	        });
	  });
	
	
	//ENDS the API CALL
	    
	  function displayResults(results) {
	    resultList.empty();
	    $.each(results, function(i, item) {
	
	      var newResult = $("<div class='result'>" +
	        "<div class='title'>" + "Name: " + item.name + "</div>" +
	        "<div>Language: " + item.language + "</div>" +
	        "<div>Owner: " + item.owner.login + "</div>" + 
	        "</div>");
	
	      newResult.hover(function() {
	        // make it darker
	        $(this).css("background-color", "lightgray");
	      }, function() {
	        // reverse
	        $(this).css("background-color", "transparent");
	      });
	
	      resultList.append(newResult);
	
	    });
	  }

	 function initialize() {
	  var mapProp = {
	    center:new google.maps.LatLng(47.6397,6.8638),
	    zoom:5,
	    mapTypeId:google.maps.MapTypeId.ROADMAP
	  };
	  	var map=new google.maps.Map(document.getElementById("map-canvas"),mapProp);
	}
		google.maps.event.addDomListener(window, 'load', initialize); 
  
});