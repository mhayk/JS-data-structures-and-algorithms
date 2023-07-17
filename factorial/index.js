let total = 1;
function findFactorialRecursive(number) {
    if (number == 0)
        return 1;

    if (number == 1) {
        return total;
    }

    total *= number;
    return findFactorialRecursive(number - 1)
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