"use strict";

var passengers = [{name: "Mr. Glass", paid: true, ticket: "firstclass"},
				  {name: "Untackeble", paid: true, ticket: "coach"},
				  {name: "Orda", paid: false, ticket: "coach"},
				  {name: "Tony Stark", paid: true, ticket: "firstclass"}];

function processPassengers(passengers, testFunction) {
	for (var i = 0; i < passengers.length; i++) {
		if (testFunction(passengers[i])) {
			return false;
		}
	}
	return true;
}

function checkNoFlyList(passenger) {
	return (passenger.name === "Mr. Glass");
}

function checkNotPaid(passenger) {
	return (!passenger.paid);
}

function printPassenger(passenger) {
	console.log(passenger.name + " paid? - " + passenger.paid);
}

function servCustomer(passenger) {
	var getDrinkOrderFunction = createDrinkOrder(passenger);
	getDrinkOrderFunction();
}

function createDrinkOrder(passenger) {
	var orderFunction;
	if (passenger.ticket === "firstclass") {
		orderFunction = function() {
			alert("Would you like cocktail or wine?");
		} 
	} else {
		orderFunction = function() {
			alert("Your choise is cola or water.");
		}
	}
	return orderFunction;
}

var allCanFly = processPassengers(passengers, checkNoFlyList);
if (!allCanFly) {
	console.log("The plane can't take off: we have a passenger on the no-fly-list.");
}

var allPaid = processPassengers(passengers, checkNotPaid);
if (!allPaid) {
	console.log("The plane can't take off: not everyone has paid.");
}

processPassengers(passengers, printPassenger);
servCustomer(passengers);