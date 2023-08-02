// https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree/submissions/
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
 */
var FindElements = function (root) {
    let queue = [root]

    root.val = 0;

    while (queue.length) {
        let node = queue.shift()
        let x = node.val

        if (node.left) {
            node.left.val = (2 * node.val) + 1
            queue.push(node.left)
        }
        if (node.right) {
            node.right.val = (2 * node.val) + 2
            queue.push(node.right)
        }
    }

    this.root = root
};

/**
* @param {number} target
* @return {boolean}
*/
FindElements.prototype.find = function (target) {
    let queue = [this.root]

    while (queue.length) {
        let node = queue.shift()

        if (node.val === target) return true

        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
    }

    return false
};

/**
* Your FindElements object will be instantiated and called as such:
* var obj = new FindElements(root)
* var param_1 = obj.find(target)
*/