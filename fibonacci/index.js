// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n) {
    //code here;
    if (n == 0) return 0

    let count = 0;
    let total = 1;
    let prev = 0;
    while (count + 1 < n) {
        let aux = total;
        total += prev;
        prev = aux;
        count++
    }
    return total
}

console.log(fibonacciIterative(3))

function fibonacciRecursive(n, string) { // O(2^n) exponencial

    if (n <= 1)
        return n;

    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
}

console.log("result: ", fibonacciRecursive(6));

function fibonacci(n, memo = {}) {
    // if value exists in memo, return it (memoization)
    if (n in memo) return memo[n];

    // base cases
    if (n <= 0) return 0;
    if (n === 1) return 1;

    // store computed value in memo and return
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
}

function printFibonacciSteps(n) {
    const memo = {};
    for (let i = 0; i <= n; i++) {
        let result = fibonacci(i, memo);
        if (i <= 1) {
            console.log(`Step ${i}: ${result}`);
        } else {
            console.log(`Step ${i}: fib(${i - 1}) + fib(${i - 2}) = ${result}`);
        }
    }
}

// printFibonacciSteps(6);