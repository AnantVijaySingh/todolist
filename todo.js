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
	var p = document.createElement("p");
	var content = document.createTextNode(object.taskText);
	p.appendChild(content);
	taskOuterDivElement.appendChild(p);
	taskListElement.appendChild(taskOuterDivElement);
}

// ---------- DOM Element Creator Fucntion ----------
function taskCard(TaskObject){
	var parentElement = document.getElementById("taskList");
}

