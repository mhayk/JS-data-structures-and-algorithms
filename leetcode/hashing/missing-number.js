// https://leetcode.com/problems/missing-number/
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let numsSet = new Set()

    for (const c of nums) {
        numsSet.add(c)
    }

    for (let i = 0; i <= nums.length; i++) {
        if (!numsSet.has(i))
            return i
    }

    return nums.length + 1;

};