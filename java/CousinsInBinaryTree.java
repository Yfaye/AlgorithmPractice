/**
 * LeetCode 993 Cousins in Binary Tree
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
    public boolean isCousins(TreeNode root, int x, int y) {
        if (root == null) {
            return false;
        }
        
        Queue<TreeNode> q = new LinkedList<>();
        q.offer(root);
        
        while(!q.isEmpty()) {
            int sz = q.size();
            boolean foundX = false;
            boolean foundY = false;
            for (int i = 0; i < sz; i++) {
                TreeNode cur = q.poll();
                Set<Integer> set = new HashSet<>(); 

            
                if (cur.left != null) {
                    set.add(cur.left.val);
                    q.offer(cur.left);
                }
                if (cur.right != null) {
                    set.add(cur.right.val);
                    q.offer(cur.right);
                }
                
                // check each parent node
                if (set.contains(x) && set.contains(y)) {
                    return false;
                } else if (set.contains(x)) {
                    foundX = true;
                } else if (set.contains(y)) {
                    foundY = true;
                }
            }
            if (foundX && foundY) {
                return true;
            }
        }
        return false;
    }
}