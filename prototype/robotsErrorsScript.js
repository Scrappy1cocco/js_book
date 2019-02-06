"use strict";

function Robot(name, year, owner) {
	this.name = name;
	this.year = year;
	this.owner = owner;
}

Robot.prototype.maker = "ObjectRUs";
Robot.prototype.errorMessage = "All systems go.";
Robot.prototype.reportError = function() {
	console.log(this.name + " says " + this.errorMessage);
};
Robot.prototype.spillWater = function() {
	this.errorMessage = "I appear to have a short circuit!";
};

var robby = new Robot("Robby", 1956, "Dr. Morbius");
var rosie = new Robot("Rosie", 1962, "George Jetson");

robby.reportError();
rosie.reportError();
robby.spillWater();
robby.reportError();
rosie.reportError();

console.log(robby.hasOwnProperty("errorMessage"));
console.log(rosie.hasOwnProperty("errorMessage"));