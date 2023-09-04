// https://leetcode.com/problems/maximum-average-subarray-i/editorial/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    let curr = 0

    for (let i = 0; i < k; i++) {
        curr += nums[i];
    }

    let maxSum = curr;
    for (let i = k; i < nums.length; i++) {
        curr += nums[i] - nums[i - k]
        maxSum = Math.max(maxSum, curr)
    }

    return maxSum / k;
};