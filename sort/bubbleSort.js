// Bubble Sort
// Time Complexity: O(n^2)
// Space Complexity: O(1)

function bubbleSort(arr) {
    let swapped = true;
    while (swapped) {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            let j = i + 1;
            if (arr[i] > arr[j]) {
                swapped = true;
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
    return arr;
}

console.log(bubbleSort([5, 3, 4, 1, 2])); // [1, 2, 3, 4, 5]