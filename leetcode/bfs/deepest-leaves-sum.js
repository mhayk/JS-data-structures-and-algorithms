//https://leetcode.com/problems/deepest-leaves-sum
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
function deepestLeavesSum(root) {
    if (root === null) return 0; // base case: the tree is empty

    let queue = [root]; // initialize the queue with the root node
    let levelSum = 0; // variable to keep track of the sum of node values at the current level

    while (queue.length > 0) {
        let levelSize = queue.length; // get the size of the current level (number of nodes at the current level)
        levelSum = 0; // reset the level sum

        for (let i = 0; i < levelSize; i++) { // for each node at the current level
            let node = queue.shift(); // remove the first node from the queue
            levelSum += node.val; // add the node's value to the level sum

            // add the node's children (if they exist) to the queue
            if (node.left !== null) queue.push(node.left);
            if (node.right !== null) queue.push(node.right);
        }
    }

    // when we exit the while loop, levelSum will be the sum of nodes at the deepest level
    return levelSum;
}
