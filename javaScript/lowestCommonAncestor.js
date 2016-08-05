/*235. Lowest Common Ancestor of a Binary Search Tree  QuestionEditorial Solution  My Submissions
Total Accepted: 83443
Total Submissions: 222139
Difficulty: Easy
Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself).”

        _______6______
       /              \
    ___2__          ___8__
   /      \        /      \
   0      _4       7       9
         /  \
         3   5
For example, the lowest common ancestor (LCA) of nodes 2 and 8 is 6. Another example is LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.

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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
	//corner case
	if (root === null || p === null || q === null) {
		return null;
	}


	if (p.val < q.val) {
		if (p.val < root.val && q.val < root.val) {
			return arguments.callee(root.left, p, q);
		}
		else if (p.val > root.val && q.val > root.val) {
			return arguments.callee(root.right, p, q);
		}
		else {
			return root;
		}
	} else if (p.val > q.val) {
		if (q.val < root.val && p.val < root.val) {
			return arguments.callee(root.left, p, q);
		}
		else if (q.val > root.val && p.val > root.val) {
			return arguments.callee(root.right, p, q);
		}
		else {
			return root;
		}
	} else {
		return null;
	}
};