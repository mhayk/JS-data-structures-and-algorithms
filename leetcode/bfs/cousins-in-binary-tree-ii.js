// https://leetcode.com/problems/cousins-in-binary-tree-ii/submissions/
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
 * @return {TreeNode}
 */
var replaceValueInTree = function (root) {
    const q = [root];
    root.val = 0;
    while (q.length) {
        let n = q.length;
        let level = 0;
        let children = [];
        while (n) {
            const node = q.pop();

            if (node.left) {
                level += node.left.val;
                q.unshift(node.left);
                children.push([node.left, node.right?.val ?? 0]);
            }
            if (node.right) {
                level += node.right.val;
                q.unshift(node.right);
                children.push([node.right, node.left?.val ?? 0]);
            }
            n--;
        }
        for (const [current, siblingValue] of children) {
            current.val = level - current.val - siblingValue;
        }
    }
    return root;
};