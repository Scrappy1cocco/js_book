"use strict";

function Dog(name, breed, weight) {
	this.name = name;
	this.breed = breed;
	this.weight = weight;
}

Dog.prototype.species = "Canine";

Dog.prototype.sitting = false;

Dog.prototype.bark = function() {
	if (this.weight > 25) {
		console.log(this.name + " says WOOF!");
	} else {
		console.log(this.name + " says Yip");1
	}
};

Dog.prototype.run = function() {
	console.log("Run!");
};

Dog.prototype.wag = function() {
	console.log("Wag!");
};

Dog.prototype.sit = function() {
	if (this.sitting) {
		console.log(this.name + " is already sitting");
	} else {
		this.sitting = true;
		console.log(this.name + " is now sitting!");
	}
};

var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);
spot.bark = function() {
	console.log(this.name + " says WOOF!");
};
var barnaby = new Dog("Barnaby", "Basset Hound", 55);


fido.bark();
fido.run();
fido.wag();

fluffy.bark();

spot.bark();
spot.run();
spot.run();
spot.run();
spot.run();
spot.run();
spot.run();
spot.run();
spot.run();

barnaby.sit();
barnaby.sit();

fido.sit();
fido.sit();
