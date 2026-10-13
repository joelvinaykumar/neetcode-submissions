# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root:
            return []
        q = [root]
        res = []

        while len(q):
            n = len(q)
            level = []
            for _ in range(n):
                elem = q[0]
                if elem and elem.left:
                    q.append(elem.left)
                if elem and elem.right:
                    q.append(elem.right)
                q = q[1:]
                level.append(elem.val)
            res.append(level)
        return res
