// Merge Sort
// Time Complexity: O(n log(n))
// Space Complexity: O(n)

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let leftArr = mergeSort(arr.slice(0, mid));
    let rightArr = mergeSort(arr.slice(mid));
    return merge(leftArr, rightArr);
}

function merge(arr1, arr2) {
    let merged = [];
    while (arr1.length && arr2.length) {
        if (arr1[0] > arr2[0]) merged.push(arr2.shift());
        else merged.push(arr1.shift());
    }
    return merged.concat(arr1, arr2);
}

console.log(mergeSort([5, 3, 4, 1, 2])); // [1, 2, 3, 4, 5]