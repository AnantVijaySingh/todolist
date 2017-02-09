var taskTextField
var todayButton
var tomorrowButton
var weekButton

window.onload = function() {
	taskTextField = document.getElementById('taskTextField');
	todayButton = document.getElementById('todayButton');
	tomorrowButton = document.getElementById('tomorrowButton');
	weekButton = document.getElementById('weekButton');

	todayButton.onclick = handleTodayButtonClick;
	// tomorrowButton.onclick = handleTomorrowButtonClick;
	// weekButton.onclick = handleWeekButtonClick;
}

function handleTodayButtonClick(){
	var userTask = taskTextField.value;
	alert(userTask);
}
