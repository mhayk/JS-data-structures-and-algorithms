// https://leetcode.com/problems/reverse-odd-levels-of-binary-tree/submissions/
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
var reverseOddLevels = function (root) {
    let queue = [root]
    let count = 0

    while (queue.length) {
        let size = queue.length

        if (count % 2 !== 0) {
            for (let i = 1; i <= size / 2; i++) {
                let aux = queue[i - 1].val
                queue[i - 1].val = queue[size - i].val
                queue[size - i].val = aux
            }
        }

        count++

        for (let i = 0; i < size; i++) {
            let node = queue.shift()

            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
    }
    return root
}