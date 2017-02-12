var taskTextField
var todayButton
var tomorrowButton
var weekButton

window.onload = function() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(displayLocation);
	} else {
		alert("Location Access Denied");
	}

	taskTextField = document.getElementById('taskTextField');
	todayButton = document.getElementById('todayButton');
	tomorrowButton = document.getElementById('tomorrowButton');
	weekButton = document.getElementById('weekButton');

	todayButton.onclick = handleTodayButtonClick;
	// tomorrowButton.onclick = handleTomorrowButtonClick;
	// weekButton.onclick = handleWeekButtonClick;
}

function displayLocation(position){
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;

	var span = document.getElementById("userLocation");
	span.innerHTML = "latitude: "+latitude+" longitude: "+longitude;
}


function handleTodayButtonClick(){
	var userTask = taskTextField.value;
	alert(userTask);
}
// ---------- Task Object Constructor ----------
// ----- add functioanlity for time -----
function TaskObject(taskText,taskType){
	this.taskText = taskText;
	this.taskType = taskType;
	this.taskCompleteStatus = "incomplete";		//Possible statues: incomplete, complete
	this.taskProgressStatus = "notStarted";		//Possible statues: notStarted, inProgress, paused
	this.timeStamp = new Date().getTime();		// Compare with current time to determine is the task counts under today or backlog.
												//In conjuction with week paramter, add to this week initially and to backlog only if its the next week
	
	var listElement = document.createElement("li");
	listElement.innerHTML = songName;
	list.appendChild(listElement);
}

// ---------- DOM Element Creator Fucntion ----------
function taskCard(TaskObject){
	var parentElement = document.getElementById("taskList");
}