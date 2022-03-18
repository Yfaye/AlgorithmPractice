//LeetCode 671

//https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/submissions/


class Solution {
    public int findSecondMinimumValue(TreeNode root) {
        if (root == null || root.left == null) {
            return -1;
        }
        
        int leftSecondMinimum = findSecondMinimumValue(root.left);
        int rightSecondMinimum = findSecondMinimumValue(root.right);
        
        // left node equals right node
        if (root.left.val == root.right.val) {
            if (leftSecondMinimum == -1) {
                return rightSecondMinimum;
            }
            if (rightSecondMinimum == -1) {
                return leftSecondMinimum;
            }
            return Math.min(leftSecondMinimum, rightSecondMinimum);
        }
        
        // left node is larger
        if (root.val == root.right.val) {
            return rightSecondMinimum == -1 ? root.left.val : Math.min(root.left.val, rightSecondMinimum);
        }
        
        // right node is larger
        if (root.val == root.left.val) {
            return leftSecondMinimum == -1 ? root.right.val : Math.min(root.right.val, leftSecondMinimum);
        }
        
        return -1;
    }
}