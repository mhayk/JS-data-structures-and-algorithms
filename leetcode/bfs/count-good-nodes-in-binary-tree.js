// https://leetcode.com/problems/count-good-nodes-in-binary-tree/submissions/
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
var goodNodes = function (root) {
    let queue = [[root, root.val]]
    let count = 0

    while (queue.length) {
        let [node, val] = queue.shift()

        if (node.val >= val) {
            count++
            if (node.left) queue.push([node.left, node.val])
            if (node.right) queue.push([node.right, node.val])
        }
        else {
            if (node.left) queue.push([node.left, val])
            if (node.right) queue.push([node.right, val])
        }


    }

    return count;
};