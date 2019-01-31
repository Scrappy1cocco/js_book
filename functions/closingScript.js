"use strict";

function multN(n) {
	return function multBy(m) {
		return n*m;
	};
}

var multBy3 = multN(3);
console.log("Multiplying 2: " + multBy3(11));



function makeCounter() {
	var count = 0;
	return {
		increment: function() {
			count++;
			return count;
		}
	};
}

var counter = makeCounter();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());