"use strict";

function Dog(name, breed, weight) {
	this.name = name;
	this.breed = breed;
	this.weight = weight;
}

// Для прототипа выставочной собаки
function ShowDog(name, breed, weight, handler) { 
	Dog.call(this, name, breed, weight);
	this.handler = handler;
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

 // прототипу выставочной собаки задаем экземпляр собаки
ShowDog.prototype = new Dog();

ShowDog.prototype.constructor = ShowDog;

ShowDog.prototype.league = "Webville";

ShowDog.prototype.stack = function() {
	console.log("Stack");
};

ShowDog.prototype.bait = function() {
	console.log("Bait");
};

ShowDog.prototype.gait = function(kind) {
	console.log(kind + "ing");
};

ShowDog.prototype.groom = function() {
	console.log("Groom");
};

var fido = new Dog("Fido", "Mixed", 38);

// if (fido instanceof Dog) {
// 	console.log("Fido is a Dog");
// }

// if (fido instanceof ShowDog) {
// 	console.log("Fido is a ShowDog");
// }

var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);
spot.bark = function() {
	console.log(this.name + " says WOOF!");
};
var barnaby = new Dog("Barnaby", "Basset Hound", 55);

// выставочная собака
var scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie");

// if (scotty instanceof Dog) {
// 	console.log("Scotty is a Dog");
// }

// if (scotty instanceof ShowDog) {
// 	console.log("Scotty is a ShowDog");
// }

var beatrice = new ShowDog("Beatrice", "Pomeranian", 5, "Hamilton");

fido.bark();
fluffy.bark();
spot.bark();
scotty.bark();
beatrice.bark();
scotty.gait("Walk");
beatrice.groom();