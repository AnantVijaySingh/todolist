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
	alert(userTask);
	var taskType = "today";
	var newUserTask = new TaskObject(userTask,taskType);
	newUserTask.createTaskCard();
	alert(userTask);
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
	this.createTaskCard = function(this.Text){
		var taskOuterDivElement = document.createElement('div');
		taskOuterDivElement = taskText;
		taskListElement.appendChild(taskOuterDivElement);
	};
}

// ---------- DOM Element Creator Fucntion ----------
function taskCard(TaskObject){
	var parentElement = document.getElementById("taskList");
}

