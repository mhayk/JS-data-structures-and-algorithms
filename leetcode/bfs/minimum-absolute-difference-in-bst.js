// https://leetcode.com/problems/minimum-absolute-difference-in-bst/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
    let queue = [root]
    let values = []

    while (queue.length) {
        let currentNode = queue.shift()

        values.push(currentNode.val)

        if (currentNode.left) queue.push(currentNode.left)
        if (currentNode.right) queue.push(currentNode.right)
    }

    values.sort((a, b) => a - b)

    let minDiff = 0

    for (let i = 1; i < values.length; i++) {
        if (minDiff === 0)
            minDiff = values[i] - values[i - 1]
        else if (values[i] - values[i - 1] < minDiff)
            minDiff = values[i] - values[i - 1]
    }

    return minDiff
};