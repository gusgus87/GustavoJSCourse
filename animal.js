function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function () {
    console.log(`${this.name} makes a noise.`);
};
Animal.prototype.walk = function () {
    console.log("walking");
};

const dog = new Animal('Dog');
dog.speak(); // Output: "Dog makes a noise."
dog.walk();

const cat = new Animal('Cat');
cat.speak(); // Output: "Cat makes a noise."

