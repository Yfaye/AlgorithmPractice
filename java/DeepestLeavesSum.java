/**
 * LeetCode 1302 https://leetcode.com/problems/deepest-leaves-sum/
 */
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public int deepestLeavesSum(TreeNode root) {
        if (root == null) {
            return 0;
        }
        
        Queue<TreeNode> q = new LinkedList<>();
        q.offer(root);
        int res = 0;
        
        while (!q.isEmpty()) {
            int sz = q.size();
            int levelSum = 0;
            for (int i = 0 ; i < sz; i++) {
                TreeNode cur = q.poll();
                levelSum += cur.val;
                if (cur.left != null) {
                    q. offer(cur.left);
                }
                if (cur.right != null) {
                    q.offer(cur.right);
                }
            }    
            res = levelSum;
        }
        
        return res;
    }
}