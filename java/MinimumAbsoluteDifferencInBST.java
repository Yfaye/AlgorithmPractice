/**
 * LeetCode 530 https://leetcode.com/problems/minimum-absolute-difference-in-bst/
 * This question is the same as 783: https://leetcode.com/problems/minimum-distance-between-bst-nodes/
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
    
    // BFS is wrong on this test case: [236,104,701,null,227,null,911]  Output 123 / Expected 9
    // Reason the min diff will not probably be between root - root.left.right, not nessarily always the same level   
        public int getMinimumDifference(TreeNode root) {
            if (root == null || (root.left == null && root.right == null)) {
                return 0;
            }
            
            Queue<TreeNode> q = new LinkedList<>();
            q.offer(root);
            int minDiff = Integer.MAX_VALUE;
            
            while (!q.isEmpty()) {
                int sz = q.size(); 
                for (int i = 0; i < sz; i++) {
                    TreeNode cur = q.poll();
                    int leftDiff = cur.left == null ? Integer.MAX_VALUE : cur.val - cur.left.val;
                    int rightDiff = cur.right == null ? Integer.MAX_VALUE: cur.right.val - cur.val;
                    minDiff = Math.min(minDiff, Math.min(leftDiff, rightDiff));
                                       
                    if (cur.left != null) {
                        q.offer(cur.left);
                    }
                    if (cur.right != null) {
                        q.offer(cur.right);
                    }
                }
            }
            
            return minDiff;                        
        }
        
        
    // For BST, always thinking about InOrder traverse
        
        public int getMinimumDifference(TreeNode root) {
            traverse(root);
            return res;
        }
        
        TreeNode prev = null;
        int res = Integer.MAX_VALUE;
        
        void traverse(TreeNode root) {
            if (root == null) {
                return;
            }
            
            
            traverse(root.left);
            
            // in-order
            if (prev != null) {
                res = Math.min(res, root.val - prev.val);
            }
            prev = root;
            
            traverse(root.right);
        }
    }
