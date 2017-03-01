var taskTextField
var todayButton
var tomorrowButton
var weekButton
var taskListElement
var userTaskMap

window.onload = function() {

	taskTextField = document.getElementById('taskTextField');
	todayButton = document.getElementById('todayButton');
	tomorrowButton = document.getElementById('tomorrowButton');
	weekButton = document.getElementById('weekButton');
	taskListElement = document.getElementById('taskList');
	doneButton = document.getElementById('doneButton');
	userTaskMap = new Map();

	todayButton.onclick = handleTodayButtonClick;
	// tomorrowButton.onclick = handleTomorrowButtonClick;
	// weekButton.onclick = handleWeekButtonClick;
}

function handleTodayButtonClick(){
	var userTask = taskTextField.value;
	if (userTask !="") {
		var taskType = "today";
		var newUserTask = new TaskObject(userTask,taskType);
		userTaskMap.set(newUserTask.timeStamp,newUserTask);
		console.log(userTaskMap);
		createTaskCard(newUserTask);
		var span = todayButton.childNodes;
		var span2 = span[1].childNodes;
		var newCount = parseInt(span2[1].getAttribute("data-badge"));
		span2[1].setAttribute("data-badge",newCount+1);
	}
	
}
// ---------- Task Object Constructor ----------
// ----- add functioanlity for time -----
function TaskObject(Text,Type){
	this.taskText = Text;
	this.taskType = Type;
	this.taskCompleteStatus = "incomplete";		//Possible statues: incomplete, complete
	this.taskProgressStatus = "notStarted";		//Possible statues: notStarted, inProgress, paused
	this.timeStamp = new Date().getTime();		// Compare with current time to determine is the task counts under today or backlog.
												//In conjuction with week paramter, add to this week initially and to backlog only if its the next week
												//Using timestamp as a div id to help manupilate the DOM
}

function createTaskCard(object) {
	var taskOuterDivElement = document.createElement("div");
	var innerDivElement1 = document.createElement("div");
	var innerDivElement2 = document.createElement("div");
	var innerSpan = document.createElement("span");
	var doneButton = document.createElement("button");
	var deleteButton = document.createElement("button");
	var mailButton = document.createElement("button");
	var doneButtonIcon = document.createElement("i");
	var deleteButtonIcon = document.createElement("i");
	var mailButtonIcon = document.createElement("i");

	taskOuterDivElement.setAttribute("class","mdl-card-custom mdl-card mdl-shadow--2dp");
	taskOuterDivElement.setAttribute("id",object.timeStamp);
	innerDivElement1.setAttribute("class","mdl-card__supporting-text");
	innerDivElement2.setAttribute("class","mdl-card__actions mdl-card--border");
	innerSpan.setAttribute("class","timeStamp");
	doneButton.setAttribute("class","mdl-button mdl-js-button mdl-button--icon mdl-button--colored button-icons");
	doneButton.setAttribute("id","doneButton");
	doneButton.setAttribute("onclick","handleDoneButtonClick(this.parentElement.parentElement.id)");
	deleteButton.setAttribute("class","mdl-button mdl-js-button mdl-button--icon mdl-button--colored button-icons");
	deleteButton.setAttribute("id","deleteButton");
	mailButton.setAttribute("class","mdl-button mdl-js-button mdl-button--icon mdl-button--colored button-icons");
	mailButton.setAttribute("id","mailButton");
	doneButtonIcon.setAttribute("class","material-icons");
	deleteButtonIcon.setAttribute("class","material-icons");
	mailButtonIcon.setAttribute("class","material-icons");

	

	doneButtonIcon.innerHTML = "done";
	deleteButtonIcon.innerHTML = "delete";
	mailButtonIcon.innerHTML = "email" ;
	innerSpan.innerHTML = new Date(object.timeStamp).toDateString(); // toUTCString();

	// var content = document.createTextNode(object.taskText);
	// var content = document.createTextNode(object.taskText);

	// for testing---------	
	var objectString = JSON.stringify(object);
	var content = document.createTextNode(objectString);


	innerDivElement1.appendChild(content);
	doneButton.appendChild(doneButtonIcon);
	deleteButton.appendChild(deleteButtonIcon);
	mailButton.appendChild(mailButtonIcon);
	innerDivElement2.appendChild(doneButton);
	innerDivElement2.appendChild(deleteButton);
	innerDivElement2.appendChild(mailButton);
	innerDivElement2.appendChild(innerSpan);
	taskOuterDivElement.appendChild(innerDivElement1);
	taskOuterDivElement.appendChild(innerDivElement2);
	taskListElement.appendChild(taskOuterDivElement);
}

// ---------- DOM Element Creator Fucntion ----------
function taskCard(TaskObject){
	var parentElement = document.getElementById("taskList");
}

// ---------- Task Card Actions ---------------------
function handleDoneButtonClick(divElement){
	console.log(divElement);
	console.log(document.getElementById(divElement).firstChild);
	var taskTextDiv = document.getElementById(divElement).firstChild;
	taskTextDiv.setAttribute("style","text-decoration: line-through");
}

