window.onload =function{
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(displayLocation);
	} else {
		alert("Location Access Denied");
	}
}

function displayLocation(position){
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;

	var span = document.getElementById("userLocation");
	span.innerHTML = "latitude: "+latitude+" longitude: "+longitude;
}