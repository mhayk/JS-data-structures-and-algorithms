// https://leetcode.com/problems/squares-of-a-sorted-array/description/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    let index = nums.length - 1;
    let size = nums.length
    let ans = Array(size)



    while (left <= right) {
        let leftSquare = Math.pow(nums[left], 2)
        let rightSquare = Math.pow(nums[right], 2)

        if (leftSquare > rightSquare) {
            ans[index] = leftSquare
            left++
        } else {
            ans[index] = rightSquare
            right--
        }
        index--;

    }
    console.log(ans)
    return ans
}