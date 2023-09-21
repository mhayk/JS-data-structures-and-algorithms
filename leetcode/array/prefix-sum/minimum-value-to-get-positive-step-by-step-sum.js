// https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/
/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function (nums) {
    var minVal = 0;
    var total = 0;

    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
        minVal = Math.min(minVal, total)
    }

    return -minVal + 1;
};