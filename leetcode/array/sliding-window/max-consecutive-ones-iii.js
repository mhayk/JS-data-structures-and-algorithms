// https://leetcode.com/problems/max-consecutive-ones-iii/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    let left = 0, right = 0, curr = 0, ans = 0;
    let maxOnes = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] == 0) {
            k--;
        }

        while (curr > k) {
            if (nums[left] == 0) {
                curr -= 1;
            }
            left++;
        }

        ans = Math.max(ans, right - left + 1);
    }
    return ans
};