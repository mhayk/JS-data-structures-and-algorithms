// https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent
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
var sumEvenGrandparent = function (root) {
    if (!root) return 0

    let queue = [root]
    let sumEven = 0;

    while (queue.length > 0) {
        let node = queue.shift()

        if (node.val % 2 === 0 && node.left && node.left.left)
            sumEven += node.left.left.val

        if (node.val % 2 === 0 && node.left && node.left.right)
            sumEven += node.left.right.val

        if (node.val % 2 === 0 && node.right && node.right.right)
            sumEven += node.right.right.val

        if (node.val % 2 === 0 && node.right && node.right.left)
            sumEven += node.right.left.val

        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
    }

    return sumEven;
};