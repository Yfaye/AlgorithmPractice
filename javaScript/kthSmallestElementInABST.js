/*230. Kth Smallest Element in a BST  QuestionEditorial Solution  My Submissions
Total Accepted: 58548
Total Submissions: 147866
Difficulty: Medium
Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

Note: 
You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

Follow up:
What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
	if (root === null) {
		return null;
	}
	if (root.left === null && root.right === null && k === 1) {
		return root.val;
	}

	var countNodes = function(node) {
		if (node === null) {
			return 0;
		}
		if (node.left === null && node.right === null) {
			return 1;
		}
		var leftNodes = arguments.callee(node.left);
		var rightNodes = arguments.callee(node.right);

		return leftNodes + 1 + rightNodes;
	}

	var left = countNodes(root.left);
	var right = countNodes(root.right);

	if (k <= left) { // 这里debug之前是 < left, 改成<= 才能覆盖所有K
		return arguments.callee(root.left, k);
	}
	if (k  === left + 1) {
		return root.val;
	}
	if (k > left + 1 && k <= left + 1 + right) { // 这里debug之前是 < left + 1 + right, 改成<= 这样才能覆盖所有K
		return arguments.callee(root.right, k-left-1); // 这里debug之前是 left + right - k, 想得不对
	}
    
};