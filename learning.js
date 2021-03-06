 // Object Exampls

 var exampleObject = {
 	property1: "string",
 	property2: 10,
 	property3: ["array","as as property"],
 	property4: function(){
 		return "Test" + this.property1; //this keyword helps to get the reference to the current object
 	}
 };


 // accessing properties of objects

 var ex1 = exampleObject.property1;
 var ex2 = exampleObject["property1"];
 exampleObject.property4();

 // change the property

 exampleObject.property1 = "new value";
 exampleObject.property3.push("new array value");


 // FOR IN LOOP ----- To enumerate through all the object properties

 var prop
 for(prop IN exampleObject){
 	var ex3 = fido[prop];
 }


 // Assign property to a variable

 var ex4 = exampleObject.property3;

 // Pass object to a function

 function exampleFunction(exampleObjectType){
 	// some code that calls the object properties to do something
 }

 exampleFunction(exampleObject);

 // Add/delete new properties to a n object

 exampleObject.newProperty = "property value";

delete exampleObject.newProperty; 


//----------------------------Constructors---------------------------

function exampleConstructor(property1Name, property2Name, property3Name){
	this.propertyOne = property1Name;
	this.propertyTwo = property2Name;
	this.propertyThree = function(){
		window.write(this.propertyOne);
	};
}

// Using constructors to create objects

var exampleObject1 = new exampleConstructor("property1Value","property2Value") // there is no value for property3 as it is a function

//common objects in Javascript

// --------------------- HTML Requests in Javascript --------------------------

var url = "http://someserver.com/data.json"; //JSON file type

var request = new XMLHttpRequest(); // Creates a new HTTP request object

request.open("GET", url); // "GET" - standard way of getting http data, url to get the data from 

request.onload = function () { // when the data is received from the server
	if(request.status == 200){ // response code 200 means data was recevied successfully
		alert(request.responseText);
	}
}

request.server("something"); // data or request that needs to be sent to the server

// ------------------ JSON Objects --------------------------------------------

JSON.stringify{objectToBeConvertedToJSON}; //concerts Javascript object into a json string

JSON.parse(jsonString); // Returns a javascript object





//------------ Script tag can be used to retrive data wrapped in a function as a javascript object using ?callback=wrapperFunction --------
//------------ The script tag can be created/replaced again and again to recall data from the server --------------------------------------

window.onload = function(){
	setInterval(handleRefresh,3000); // returns an id that can be used to stop it ----------------------------
}

function handleRefresh(){
	var url = "http://gumball.wickedlysmart.com/?callback=updateSales" + "&random=" + (new Date()).getTime();

	var newScriptElement = document.createElement("script");
	newScriptElement.setAttribute("src",url);
	newScriptElement.setAttribute("id","jsonp");

	var oldScriptElement = document.getElementById("jsonp");
	var head = document.getElementsByTagName("head")[0]; // ------- returns an array of elements ------------------
	if(oldScriptElement == null){
		head.appendChild(newScriptElement);
	}
	else{
		head.replaceChild(newScriptElement,oldScriptElement);
	}

}




window 
{
	document
	location
	onload
	status

	alert
	prompt
	open
	close
	setTimeout
	setInterval
}

document{
	domain
	title
	URL

	getElementById
	getElementByTagName
	getElementByClassName
	createElement
}

button{
	onClick
}

elements
{
	innerHTML
	childElementCount
	firstChild

	appendChild
	insertBefore
	setAttribute
	getAttribute
}