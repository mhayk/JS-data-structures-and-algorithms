// Dynamic Programming - Fibonacci
// Divide and Conquer
// Memoization
// O(2^n) ----> O(n)
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// fibonacci(100);

function fibonacciMemoized() {
    let cache = {};

    return function fib(n) {
        if (n in cache) return cache[n];
        if (n <= 1) return n;
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
    }
}

const fib = fibonacciMemoized();
console.log(fib(100));