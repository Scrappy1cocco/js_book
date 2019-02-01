"use strict";

var chevyParams = {make: "Chevy",
				  model: "Bel Air",
				  year: 1957,
				  color: "red",
				  passengers: 2,
				  convertible: false,
				  mileage: 1021};

var fiatParams = {make: "Fiat",
				  model: "500",
				  year: 1957,
				  color: "Medium Blue",
				  passengers: 2,
				  convertible: false,
				  mileage: 88000};

var cadiParams = {make: "GM",
				  model: "Cadillac",
				  year: 1955,
				  color: "tan",
				  passengers: 5,
				  convertible: false,
				  mileage: 12892};

var taxiParams = {make: "Webville Motors",
				  model: "Taxi",
				  year: 1955,
				  color: "yellow",
				  passengers: 4,
				  convertible: false,
				  mileage: 281341};

var porschParams = {make: "Porsche",
				  model: "Bird",
				  year: 2500,
				  color: "purple",
				  passengers: 2,
				  convertible: true,
				  mileage: 0};

var chevy = new Car(chevyParams);
var fiat = new Car(fiatParams);
var cadi = new Car(cadiParams);
var taxi = new Car(taxiParams);
var porsche = new Car(porschParams);

function Car(params) {
	this.make = params.make;
	this.model = params.model;
	this.year = params.year;
	this.color = params.color;
	this.passengers = params.passengers;
	this.convertible = params.convertible;
	this.mileage = params.mileage;
	this.started = false;
	this.start = function() {
		this.started = true;
	};
	this.stop = function() {
		this.started = false;
	};
	this.drive = function() {
		if (this.started) {
			console.log(this.make + " " + this.model + " goes zoom zoom!");
		} else {
			console.log("Start the engine first.");
		}
	}
}

var cars = [chevy, cadi, taxi, fiat, porsche];

for (var i = 0; i < cars.length; i++) {
	var randDrive = Math.floor(Math.random() * 5);
	cars[i].start();
	for (var j = 0; j <= randDrive; j++) {
		cars[i].drive();
	}
	cars[i].stop();
}
