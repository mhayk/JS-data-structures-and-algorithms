// https://leetcode.com/problems/create-binary-tree-from-descriptions/submissions/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function (descriptions) {
    if (descriptions.length === 0) return null;

    const nodes = new Map()
    for (const [parent, child, _] of descriptions) {
        if (!nodes.has(parent)) nodes.set(parent, new TreeNode(parent))
        if (!nodes.has(child)) nodes.set(child, new TreeNode(child))
    }

    for (const [parent, child, isLeft] of descriptions) {
        if (isLeft) nodes.get(parent).left = nodes.get(child)
        else nodes.get(parent).right = nodes.get(child)
    }

    let root = null;
    for (const node of nodes.values()) {
        //console.log([...nodes.values()].some(n => console.log(node,n.left,n.right)))
        if (![...nodes.values()].some(n => n.left === node || n.right === node)) {
            root = node;
            break;
        }
    }

    return root;
};