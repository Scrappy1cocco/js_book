"use strict";

function Robot(name, year, owner) {
	this.name = name;
	this.year = year;
	this.owner = owner;
}

Robot.prototype.maker = "ObjectRUs";

Robot.prototype.speak = function() {
	// code 4 speak;
}

Robot.prototype.makeCoffee = function() {
	// code 4 coffee;
}

Robot.prototype.blinkLights = function() {
	// code 4 lights;
}

var robby = new Robot("Robby", 1956, "Dr. Morbius");
robby.onOffSwitch = true;
robby.makeCoffee = function() {
	console.log("I'm back from Starbucks with nasty coffee!");
}

var rosie = new Robot("Rosie", 1962, "George Jetson");
rosie.cleanHouse = function() {
	console.log("House cleaned");
}

console.log(robby.name + " was made by " + robby.maker + " in " + robby.year + " and is owned by " + robby.owner);
robby.makeCoffee();
robby.blinkLights();

console.log(rosie.name + " was made by " + rosie.maker + " in " + rosie.year + " and is owned by " + rosie.owner);
rosie.cleanHouse();