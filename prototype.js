// Step 1: Define a basic constructor for a `Person`.
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// Step 2: Add a method to the Person prototype.
// Any instance of Person will inherit this method, thanks to the prototype.
Person.prototype.getFullName = function() {
    return this.firstName + ' ' + this.lastName;
}

// Step 3: Create an instance of Person.
let john = new Person('John', 'Doe');

// Step 4: Demonstrate that the instance has access to the method on the prototype.
console.log(john.getFullName());  // Expected output: John Doe

// Step 5: Extend the prototype further by adding another method.
Person.prototype.greet = function() {
    console.log('Hello, ' + this.getFullName() + '!');
}

// Step 6: Use the new method on the same instance.
john.greet();  // Expected output: Hello, John Doe!

// Step 7: Show that modifying the prototype affects all instances, even those created before the modification.
function Developer(firstName, lastName, language) {
    Person.call(this, firstName, lastName);  // Inherit properties from Person.
    this.language = language;  // Additional property for Developer.
}

// Set up inheritance of prototype methods.
Developer.prototype = Object.create(Person.prototype);

// Add method specific to Developer.
Developer.prototype.introduce = function() {
    console.log(`Hi, I'm ${this.getFullName()} and I code in ${this.language}.`);
}

let jane = new Developer('Jane', 'Smith', 'JavaScript');
jane.introduce();  // Expected output: Hi, I'm Jane Smith and I code in JavaScript.

// Check if jane is an instance of both Developer and Person.
console.log(jane instanceof Developer);  // true
console.log(jane instanceof Person);  // true

// Demonstrating that prototype is dynamic.
// Let's add a new method to Person's prototype.
Person.prototype.sayBye = function() {
    console.log('Goodbye!');
}

// Even though jane was created before this method was added, she has access to it.
jane.sayBye();  // Expected output: Goodbye!





















