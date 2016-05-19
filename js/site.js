/* 
  site.js
*/
/*
"use strict";

var result = {
	name: "name",
	phone: "phone",
	email: "email",
	language: "JavaScript"
	};






var result = {
	name: document.getElementById("txt_Name").value,
	phone: document.getElementById('txt_Phone').value,
	language: "JavaScript"
	};


/*
var message = "Hello world in JavaScript!" ;
console.log(message);		
var resultDiv = document.getElementById("results");
resultDiv.innerHTML = "<p>Hello world in JavaScript!</p>";



/*variable and type

console.log("message is " + typeof(message));
console.log("resultDiv is " + typeof(resultDiv));

var empty;
var aNumber = 100 ;
var trueOrFalse = true ;

console.log("empty is " + typeof(empty));
console.log("aNumber is " + typeof(aNumber));
console.log("trueOrFalse is " + typeof(trueOrFalse));
*/

/*
var test;
console.log("test is " + typeof(test));

test = 100;
console.log("test is " + typeof(test));


test = "I am a string!" ;
console.log("test is " + typeof(test));
*/

/*
var msg = "This should not work!" ;
console.log(msg);
*/



/* Conditional Statment */



/*
var empty;

if(empty == undefined){
	console.log("empty's data type is undefined");
}

var aNumber = 100 ;
if(aNumber === 100){
	console.log("aNumber is 100");
}

if(aNumber !== "100"){
	console.log("aNumber is 100");
}

*/



/* Functions */
/*
function showMessage(message){
	console.log("The message is " + message);
}
showMessage("Dinner is ready!") ;
*/
/*
var isDinnerReady = function(message) {
 	console.log(message);
};

//isDinnerReady("Dinner is ready!");


function showItAgain(msg, callback) {
	isDinnerReady(msg) ;
	callback();
	//call back is another function that being passed in as a parameter
}


showItAgain("showItAgain called", function () {
	console.log("callback called");
});
*/



/* Scope */
/*
var inGlobal = true; 

function testScope() {
	console.log("testScope(): " + inGlobal);

	var someMsg = "some message in local" ;
	console.log("testScope(): " + someMsg);

}

testScope();

console.log("global: " + someMsg);
*/



/* objects and Arrays*/


/*
var result = {
	name: "jQuery",
	language: "JavaScript",
	score: 4.5
};


console.log(result.name);

var result = {
	name: "jQuery",
	language: "JavaScript",
	score: 4.5,
	showLog: function(){
	},
	owner : {
		login: "geyan",
		id: 123456
	}
};


result.phonenumber = "123-456-7890";
console.log(result.phonenumber);

*/
/*
var result = {
	name: "jQuery",
	language: "JavaScript",
	score: 4.5
};

var results = [];
results.push(result);

var results = [{
	name: "jQuery",
	language: "JavaScript",
	score: 3.5
},
{
	name: "jQuery UI",
	language: "JavaScript",
	score: 4.5
},
{
	name: "jQuery Mobile",
	language: "JavaScript",
	score: 5
}];


console.log(results.length);
console.log(results[1].name);
*/

/* Loop 

for (var i=0; i<results.length; i++){
	var result = results[i];
	console.log(result.name);
	if(result.score > 4)
		break;
}*/























