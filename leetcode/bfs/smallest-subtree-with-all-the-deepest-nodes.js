/**
 * - Do a BFS level order traversal to get nodes at deepest level
 * - As it traverses, keep track of parents
 * - then do a reverse bfs, starting from nodes at deepest level
 * - at each dequeue, get parent. If it hasn't been seen, enqueue it
 * - keep going until queue size is 1, which would mean we have reached parent of
 *   all deepest
 */

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
var subtreeWithAllDeepest = function (root) {
    if (!root) return [];

    const parents = new Map();
    let deepest = new Array();
    const queue = new Array();

    queue.unshift(root);
    parents.set(root, null);

    // get parents and nodes at deepest level
    while (queue.length) {
        const qLength = queue.length;
        deepest = new Array();

        for (let i = 0; i < qLength; i++) {
            const curr = queue.pop();
            deepest.push(curr);

            if (curr.left) {
                parents.set(curr.left, curr);
                queue.unshift(curr.left);
            }
            if (curr.right) {
                parents.set(curr.right, curr);
                queue.unshift(curr.right);
            }
        }
    }

    // edge cases
    if (parents.size === 1) return root;
    if (deepest.length === 1) return deepest[0];

    deepest.forEach(node => queue.unshift(node));

    const seen = new Set();

    // get parent of deepest nodes, going up parent chain until we only have 1
    while (queue.length > 1) {
        const curr = queue.pop();
        if (parents.has(curr) && parents.get(curr)) {
            const parent = parents.get(curr);
            if (!seen.has(parent)) {
                seen.add(parent);
                queue.unshift(parent);
            }
        }
    }

    return queue[0];
};