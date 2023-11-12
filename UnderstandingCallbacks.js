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

/*Calculate function calls the callback function on line 26, stores
the result, and will return result. Using Calculate you can now use multiple
operators depending on which cb function you pass in.
*/
function Calculate(a,b,fn){
    let result = fn(a,b);
    return result;
}

console.log("2 + 3 =",Calculate(2,3,Add));
console.log("2 - 3 =",Calculate(2,3,Subtract));
console.log("2 x 3 =",Calculate(2,3,Multiply));
