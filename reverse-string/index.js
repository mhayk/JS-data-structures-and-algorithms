function reverse(string) { // O(n)
    if (!string || string.length < 2 || typeof string !== 'string') {
        return 'hmm that is not good';
    }
    let reversed = [];
    for (let i = string.length - 1; i >= 0; i--) { // O(n)
        reversed.push(string[i]);
    }
    console.log(reversed)
    return reversed.join('');
}

function reverse2(string) { // O(n)
    return string.split('').reverse().join('');
}

console.log(reverse('Hi my name is Mhayk'));
console.log(reverse2('Hi my name is Mhayk'));