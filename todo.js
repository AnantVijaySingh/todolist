var taskTextField
var todayButton
var tomorrowButton
var weekButton
var taskListElement

window.onload = function() {

	taskTextField = document.getElementById('taskTextField');
	todayButton = document.getElementById('todayButton');
	tomorrowButton = document.getElementById('tomorrowButton');
	weekButton = document.getElementById('weekButton');
	taskListElement = document.getElementById('taskList');

	todayButton.onclick = handleTodayButtonClick;
	// tomorrowButton.onclick = handleTomorrowButtonClick;
	// weekButton.onclick = handleWeekButtonClick;
}

function handleTodayButtonClick(){
	var userTask = taskTextField.value;
	var taskType = "today";
	var newUserTask = new TaskObject(userTask,taskType);
	createTaskCard(newUserTask);
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
	innerDivElement1.setAttribute("class","mdl-card__supporting-text");
	innerDivElement2.setAttribute("class","mdl-card__actions mdl-card--border");
	innerSpan.setAttribute("class","timeStamp");
	doneButton.setAttribute("class","mdl-button mdl-js-button mdl-button--icon mdl-button--colored button-icons");
	doneButton.setAttribute("id","doneButton");
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

	var p = document.createElement("p");
}

// ---------- DOM Element Creator Fucntion ----------
function taskCard(TaskObject){
	var parentElement = document.getElementById("taskList");
}

