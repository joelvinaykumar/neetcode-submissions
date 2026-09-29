/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
        
        let queue = []
        let depth = 0

        if(root !== null) queue.push(root)

        while(queue.length > 0) {
            const size = queue.length
            for(let i=0; i<size;i++) {
                let node = queue[0]
                queue.shift()

                if(node.right) {
                    queue.push(node.right)
                }

                if(node.left) {
                    queue.push(node.left)
                }
            }

            depth++
        }

        return depth
    }
}
