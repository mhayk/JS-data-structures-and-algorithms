https://leetcode.com/problems/two-sum-iv-input-is-a-bst
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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
    let queue = [root]
    let nodes = new Set()
    let numbers = []

    while (queue.length) {
        let currentNode = queue.shift()

        if (nodes.has(currentNode.val))
            return true

        nodes.add(k - currentNode.val)
        numbers.push(currentNode.val)

        console.log(currentNode.val)
        if (currentNode.left) queue.push(currentNode.left)
        if (currentNode.right) queue.push(currentNode.right)
    }

    return false;
};