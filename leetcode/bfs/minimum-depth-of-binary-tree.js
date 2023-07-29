// https://leetcode.com/problems/minimum-depth-of-binary-tree
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
var minDepth = function (root) {
    if (!root) return 0

    let queue = [[root, 1]]
    let depth = 1

    while (queue.length) {
        let [node, depth] = queue.shift()

        if ((node.left === null && node.right === null)) {
            return depth;
        }

        if (node.left) queue.push([node.left, depth + 1])
        if (node.right) queue.push([node.right, depth + 1])

    }
};