function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function () {
    console.log(`${this.name} makes a noise.`);
};

function Dog(name) {
    Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.speak = function () {
    console.log(`${this.name} barks.`);
};

const myDog = new Dog('Rex');
myDog.speak(); // Output: "Rex barks."

const genericAnimal = new Animal('Generic');
genericAnimal.speak(); // Output: "Generic makes a noise."


//The Dog function is a constructor that inherits from Animal.
//Dog.prototype = Object.create(Animal.prototype); is used for setting up inheritance.
//The speak method is overridden for Dog.
