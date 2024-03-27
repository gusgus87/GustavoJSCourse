
function Fibonacci(n){
    if(n == 2 || n == 1)
        return 1;
    else
        return Fibonacci(n-2) + Fibonacci(n-1);
}

console.log("6th term is");
console.log(Fibonacci(6));
