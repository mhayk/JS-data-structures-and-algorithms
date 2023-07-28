https://leetcode.com/problems/sum-of-left-leaves
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
var sumOfLeftLeaves = function (root) {
    let queue = [root]
    let values = []


    while (queue.length) {
        let currentNode = queue.shift()

        if (currentNode.left) {
            queue.push(currentNode.left)
            if (currentNode.left.left === null && currentNode.left.right == null)
                values.push(currentNode.left.val)
        }
        if (currentNode.right) queue.push(currentNode.right)
    }
    console.log(values)
    if (values.length === 0)
        return 0
    let sum = 0
    for (let i = 0; i < values.length; i++) {
        sum += values[i]
    }

    return sum;
};