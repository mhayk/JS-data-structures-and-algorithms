// https://leetcode.com/problems/counting-elements/
/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function (arr) {
    let nums = new Set()
    let count = 0

    for (const i of arr) {
        if (!nums.has(i)) {
            nums.add(i)
        }
    }

    for (let i = 0; i <= arr.length; i++) {
        if (nums.has(arr[i] + 1)) {
            count++
        }
    }

    return count
};