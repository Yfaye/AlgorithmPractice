/*104. Maximum Depth of Binary Tree
Total Accepted: 119435 Total Submissions: 253983 Difficulty: Easy

Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Subscribe to see which companies asked this question
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
*/

//divide and conqueue
var maxDepth = function(root) {
    if (root === null) {
    	return 0;
    }

    var maxLeft = maxDepth(root.left);
    var maxRight = maxDepth(root.right);

    return Math.max(maxLeft, maxRight) + 1;
};

