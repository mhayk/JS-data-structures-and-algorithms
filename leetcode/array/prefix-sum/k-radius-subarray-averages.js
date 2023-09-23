// https://leetcode.com/problems/k-radius-subarray-averages/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function (nums, k) {
    const n = nums.length;
    const avgs = new Array(n).fill(-1);
    const prefixSum = new Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
        prefixSum[i + 1] = prefixSum[i] + nums[i];
    }

    for (let i = 0; i < n; i++) {
        if (i - k >= 0 && i + k < n) {
            const total = prefixSum[i + k + 1] - prefixSum[i - k]
            avgs[i] = Math.floor(total / (2 * k + 1));
        }
    }
    return avgs
};