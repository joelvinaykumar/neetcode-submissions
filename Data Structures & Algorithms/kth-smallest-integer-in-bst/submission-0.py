# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        self.res = -1
        self.count = 0

        def dfs(node: Optional[TreeNode]):
            if not node:
                return
            if node.left:
                dfs(node.left)
            self.count += 1
            if self.count == k:
                self.res = node.val
                return
            if node.right:
                dfs(node.right)

        dfs(root)
        
        return self.res

