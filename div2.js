const args = process.argv.slice(2);

//args is an array of command line parameters. i.e.e what you pass on the command line
//args =  ["div2.js", "-n", "12", '-d", "6"]
//
function getArgumentValue(flag) {
    const index = args.indexOf(flag);
    console.log("index :" + index);
    console.log("args[index + 1]" + args[index + 1]);
    console.log("parse float:" + parseFloat(args[index + 1]));
    return (index > -1 && args[index +1] !== undefined) ? parseFloat(args[index + 1]) : null;
}
// condition ? value_if_true : value_if_false
// let x = 5 > 2 ? 33:102 

function divide(dividend, divisor) {
    if (divisor === 0) {
      return 'Cannot divide by zero.';
    }

    let quotient = 0;
    let remainder = Math.abs(dividend);
    const divisorAbs = Math.abs(divisor);

    // count how many times we can subtract
    while (remainder >= divisorAbs) {
        remainder -= divisorAbs;
        quotient++;
    }

    // ..Adjust quotient and remainder for negative values
    if (dividend < 0 && divisor > 0 || dividend > 0 && divisor < 0) {
         quotient = -quotient;
         remainder = -remainder;
    }
    return {
        quotient: quotient,
        remainder: remainder,
    };
}
// here is where I call functions that I wrote
const dividend = getArgumentValue('-n'); // Give me the value after -n
const divisor = getArgumentValue('-d'); // give me the value after the -d

if (dividend !== null && divisor !== null) {
   const result = divide(dividend, divisor);
   console.log(`Result: ${result.quotient}, Remainder: ${result.remainder}`);
} else {
   console.log('Please provide both dividend (-n) and divisor (-d).');
}
// What did you learn
// Loops, tenary operator, arrays, object literal syntax, recursion. functions, const, returning objects, parsing command line arguments, and math library.a
