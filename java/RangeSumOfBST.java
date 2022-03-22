/**
 * LeetCode 938 https://leetcode.com/problems/range-sum-of-bst/
 * 
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
    public int rangeSumBST(TreeNode root, int low, int high) {
        int result = 0;
        if (root == null) {
            return result;
        } else if (root.val < low) {
            result = rangeSumBST(root.right, low, high);
        } else if (root.val == low) {
            result = root.val + rangeSumBST(root.right, low, high);
        } else if (root.val > low && root. val < high) {
            result = rangeSumBST(root.left, low, high) + root.val + rangeSumBST(root.right, low, high);
        } else if (root.val == high) {
            result = rangeSumBST(root.left, low, high) + root.val;
        } else if (root.val > high) {
            result = rangeSumBST(root.left, low, high);
        }
        return result;        
    }
}