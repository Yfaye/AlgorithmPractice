/*108. Convert Sorted Array to Binary Search Tree  QuestionEditorial Solution  My Submissions
Total Accepted: 85144
Total Submissions: 220275
Difficulty: Medium
Given an array where elements are sorted in ascending order, convert it to a height balanced BST.
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    return build(0, nums.length - 1);

    function build(l, r) {
    	if (l > r) {
    		return null;
    	}

    	var mid = l + Math.floor((r-l)/2);
    	var root = new TreeNode(nums[mid]);
    	root.left = build(l, mid-1);
    	root.right = build(mid+1, r);

    	return root;
    }    
};

// OMG! 又AC了？！！！！这简直是建树的模板code！！！！太好用了！！！！太赞了！！！！