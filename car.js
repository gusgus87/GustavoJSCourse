function Car(make, model) {
    this.make = make;
    this.model = model;
}
Car.prototype.drive = function () {
    console.log(`${this.make} ${this.model} is driving.`);
};

Car.prototype.stop = function () {
    console.log(`${this.make} ${this.model} has stopped.`);
};

// SportsCar.js
function SportsCar(make, model, topSpeed) {
    Car.call(this, make, model);
    this.topSpeed = topSpeed;
}

SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

SportsCar.prototype.driveFast = function () {
    console.log(`${this.make} ${this.model} is driving fast at ${this.topSpeed} mph.`);
};

// Truck.js
function Truck(make, model, towingCapacity) {
    Car.call(this, make, model);
    this.towingCapacity = towingCapacity;
}

Truck.prototype = Object.create(Car.prototype);
Truck.prototype.constructor = Truck;

Truck.prototype.tow = function () {
    console.log(`${this.make} ${this.model} is towing with a capacity of ${this.towingCapacity} lbs.`);
};

// main.js
const myCar = new Car('Toyota', 'Camry');
myCar.drive();  // Output: "Toyota Camry is driving."
myCar.stop();  // Output: "Toyota Camry has stopped."

const mySportsCar = new SportsCar('Ferrari', '488', 211);
mySportsCar.drive();  // Output: "Ferrari 488 is driving."
mySportsCar.driveFast();  // Output: "Ferrari 488 is driving fast at 211 mph."

const myTruck = new Truck('Ford', 'F-150', 13000);
myTruck.drive();  // Output: "Ford F-150 is driving."
myTruck.tow();  // Output: "Ford F-150 is towing with a capacity of 13000 lbs."




//The Car constructor acts as a generic base class with methods drive and stop.
//SportsCar and Truck are specialized types of Car.
//Both SportsCar and Truck inherit methods drive and stop from Car.
//SportsCar has an additional method driveFast, and Truck has an additional method tow.
//We use Object.create() for setting up prototype inheritance, ensuring that SportsCar and Truck have their own copies of Car.prototype.
//We manually set the constructor property back to SportsCar and Truck after altering their prototypes.
