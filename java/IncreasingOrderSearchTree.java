/**
 * LeetCode 897 https://leetcode.com/problems/increasing-order-search-tree/
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
    public TreeNode increasingBST(TreeNode root) {
        if (root == null) {
            return null;
        }
        
        TreeNode left = increasingBST(root.left);
        TreeNode right = increasingBST(root.right);
        
        root.left = null;
        root.right = right;
        
        if (left == null) {
            return root;
        }

        TreeNode pointer = left;
        while (pointer != null && pointer.right != null) {
            pointer = pointer.right;
        }
        
        pointer.right = root;
        
        return left;
    }
}