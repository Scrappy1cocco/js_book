"use strict";

var map = document.getElementById('map');
map.onmousemove = showCoords;

function showCoords(eventObj) {
	var map = document.getElementById('coords');
	var x = eventObj.clientX;
	var y = eventObj.clientY;
	map.innerHTML = "Map coordinates: " + x + ", " + y;
}

var i = 1;
function timerHandler() {
	alert(" hey hey, you are gey # " + i);
	i++;
	setTimeout(timerHandler, 5000);
}

setTimeout(timerHandler, 5000);