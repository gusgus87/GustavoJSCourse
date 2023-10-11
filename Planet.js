
//create a constructor function
function Planet(name) {
	this.name = name;
}

// add a method to the prototype
Planet.prototype.orbit = function() {
	return this.name + " orbits around the sun.";
}

//create an instance of a planet
let mercury  = new Planet("Mercury");

// show mercury has access to the method orbit
console.log( mercury.orbit() );

// extend the prototype
Planet.prototype.explodes = function() {
	console.log(this.orbit() + " It suddenly explodes.");
}

// use the new method
mercury.explodes();

//create new constructor that inherates properties and methods of object Planet
function Gaseous (name, rings) {
	Planet.call(this, name);
	this.rings = rings;
}

//set up inheritance
Gaseous.prototype = Object.create(Planet.prototype);

//add a method to Gaseous
Gaseous.prototype.numOfRings = function() {
	console.log(this.name + " has " + this.rings + " rings.");
}

// create an instance of a Gaseous Planet
let saturn = new Gaseous ("Saturn", 8);

//check if saturn is an instance of both Gasesous and Planet
console.log( saturn instanceof Gaseous);
console.log( saturn instanceof Planet);

// check numOfRings function
saturn.numOfRings();




