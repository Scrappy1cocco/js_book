"use strict";

function lieDetectorTest() {
	var lies = 0;

	var stolenDiamond = { };
	if (stolenDiamond) {
		console.log("You stole the diamond");
		lies++;
	}
	var car = {
		keysInPocket: null
	}
	if (car.keysInPocket) {
		console.log("Uh oh, guess you stole the car!");
		lies++;
	}
	if (car.emptyGasTank) {
		console.log("You drove the car after you stole it!")
		lies++;
	}
	var foundYouAtTheCrimeScene = [ ];
	if (foundYouAtTheCrimeScene) {
		console.log("A sure sign of guilt");
		lies++;
	}
	if (foundYouAtTheCrimeScene[0]) {
		console.log("Caught with a stolen item!");
		lies++;
	}
	var yourName = " ";
	if (yourName) {
		console.log("Guess you lied about your name");
		lies++;
	}
	return lies;
}
var numberOfLies = lieDetectorTest();
console.log("You told " + numberOfLies + " lies!");
if (numberOfLies >= 3) {
	console.log("Guilty as charged");
}

var data = "name|phone|address";
var vals = data.split("|");
console.log("Split array is ", vals);

function Duck(sound) {
	this.sound = sound;
	this.quack = function() {
		console.log(this.sound);
	}
}

var toy = new Duck("quack quack");

toy.quack();

console.log(typeof toy);
console.log(toy instanceof Duck);