// Insertion Sort
// Time Complexity: O(n^2)
// Space Complexity: O(1)

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1;
        let temp = arr[i];
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp;
    }
    return arr;
}

console.log(insertionSort([5, 3, 4, 1, 2])); // [1, 2, 3, 4, 5]