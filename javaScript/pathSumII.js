/*113. Path Sum II  QuestionEditorial Solution  My Submissions
Total Accepted: 90359
Total Submissions: 307448
Difficulty: Medium
Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

For example:
Given the below binary tree and sum = 22,
              5
             / \
            4   8
           /   / \
          11  13  4
         /  \    / \
        7    2  5   1
return
[
   [5,4,11,2],
   [5,8,4,5]
]
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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    if (root === null) {
    	return [];
    }

    var getPath = function(node, path, result, sum) {
    	if (node === null) {
    		return;
    	}
    	path.push(node.val);
    	if (node.val === sum && node.left === null && node.right === null) {
    		result.push(path);
    		return;
    	}
    	if (node.left !== null) {
    		arguments.callee(node.left, path.slice(0), result, sum - root.val); // 这里不是直接传path，而应该传path的副本，path.slice(0);
    	}
    	if(node.right !== null) {
    		arguments.callee(node.right, path.slice(0), result, sum - root.val);// 这里不是直接传path，而应该传path的副本，path.slice(0);
    	}

    }

    var path = [];
    var result = [];
    getPath(root, path, result, sum); 
    
    return result;    
    
};