/*222. Count Complete Tree Nodes  QuestionEditorial Solution  My Submissions
Total Accepted: 39332
Total Submissions: 150897
Difficulty: Medium
Given a complete binary tree, count the number of nodes.

Definition of a complete binary tree from Wikipedia:
In a complete binary tree every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.
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
var countNodes = function(root) {
	// base case
	if (root === null) {
		return 0;
	}
	var getHeight = function(node) {
		if (node === null) {
			return 0;
		}
		return 1 + getHeight(node.left);
	}

	var lHeight = getHeight(root.left);
	var rHeight = getHeight(root.right);

	if (lHeight === rHeight) {
		return (1 << lHeight) + arguments.callee(root.right);
	} else {
		return (1 << rHeight) + arguments.callee(root.left);
	}

}