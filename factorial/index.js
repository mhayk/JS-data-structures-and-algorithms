function findFactorialRecursive(number) {
    if (number == 0)
        return 1;


    return number * findFactorialRecursive(number - 1)
}

function findFactorialIterative(number) {
    if (number == 0)
        return 1;

    let total = 1;
    let counter = number;
    while (counter > 0) {
        total *= counter;
        counter--;
    }
    return total;
}

console.log(findFactorialRecursive(4))
console.log(findFactorialIterative(4))