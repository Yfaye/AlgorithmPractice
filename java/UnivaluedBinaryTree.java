/**
 * LeetCode 965 https://leetcode.com/problems/univalued-binary-tree/
 */

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {};
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
    * recursion
    */
    public boolean isUnivalTree(TreeNode root) {
        if (root == null || (root.left == null && root.right == null)) {
            return true;
        }
        
        if (root.left == null) {
            return isUnivalTree(root.right) && (root.right.val == root.val);
        }
        
        if (root.right == null) {
            return isUnivalTree(root.left) && (root.left.val == root.val);
        }
        
        return isUnivalTree(root.left) && isUnivalTree(root.right) && root.left.val == root.right.val && root.left.val == root.val;
    }
    
    /**
    * traverse
    */
    boolean isUniVal = true;
    public boolean isUnivalTree(TreeNode root) {
        if( root == null ) {
            return true;
        }
        traverse(root);
        return isUniVal;
    }
    public void traverse(TreeNode root) {
        if (root == null || (root.left == null && root.right == null ) || !isUniVal) {
            return;
        }
        
        if (root.left == null) {
            isUniVal = (root.val == root.right.val);
        } else if (root.right == null) {
            isUniVal = (root.val == root.left.val);
        } else {
            isUniVal = (root.left.val == root.right.val && root.left.val == root.val);
        }
        
        traverse(root.left);
        traverse(root.right);
    }
    /**
    * BFS with queue
    */
    public boolean isUnivalTree(TreeNode root) {
        if ( root == null ) {
            return true;
        }
        
        Queue<TreeNode> q = new LinkedList<>();
        q.offer(root);
        
        boolean isUniVal = true;
        while(!q.isEmpty() && isUniVal) {
            int sz = q.size();
            for (int i = 0; i < sz; i++) {
                if (!isUniVal) {
                    break;
                }
                TreeNode cur = q.poll();
                
                if (cur == null ||(cur.left == null && cur.right == null)) {
                    isUniVal = true;
                } else if (cur.left == null) {
                    isUniVal = (cur.val == cur.right.val);
                } else if (cur.right == null) {
                    isUniVal = (cur.val == cur.left.val);
                } else {
                    isUniVal = (cur.left.val == cur.right.val && cur.val == cur.left.val);
                }
                
                if (cur.left != null) q.offer(cur.left);
                if (cur.right != null) q.offer(cur.right);     
            }
        }
        return isUniVal;
    }
}
