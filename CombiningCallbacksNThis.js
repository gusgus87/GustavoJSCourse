/*Simple math functions assume we are only passing in numbers for a and b.
If other datatypes are passed into these functions all hell will break loose.
Numbers that are too big will eventually display infinity when they are not.
*/

/*Functions on lines 8-18 will add, subtract, or multiply respectively when 
called. These are designed to be used as callback functions used in Calculate.
*/
function Add(a,b){
    return a + b;
}

function Subtract(a,b){
    return a - b;
}

function Multiply(a,b){
    return a * b;
}

contextObject = {
    a: 2,
    b: 3
}

/*Calculate function calls the callback function on line 35, stores
the result, and will return result on line 43. Using Calculate you can now use multiple
operators depending on which cb function you pass in.
*/
function Calculate(contextObj,fn){
    let result = null;

    contextObj.callbacks = function() {
        if (typeof this.a === "number" && typeof this.b === "number"){
            result = fn(this.a, this.b);
            return;
        }
        else result = "Please insert valid number values.";
    }

/*Bind 'this' to the object being passed in to Calculate(). 
Then call the function that is bound to the context object. 
Finally, the Calculate function will return the number value stored in 
result or will return a message, stored in result, to insert valid number values. 
*/
    contextObj.callbacks = contextObj.callbacks.bind(contextObj);
    contextObj.callbacks();
    return result;
}

console.log("2 + 3 =", Calculate(contextObject, Add));
console.log("2 - 3 =", Calculate(contextObject, Subtract));
console.log("2 x 3 =", Calculate(contextObject, Multiply));

