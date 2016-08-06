/*257. Binary Tree Paths  QuestionEditorial Solution  My Submissions
Total Accepted: 58935
Total Submissions: 191298
Difficulty: Easy
Given a binary tree, return all root-to-leaf paths.

For example, given the following binary tree:

   1
 /   \
2     3
 \
  5
All root-to-leaf paths are:

["1->2->5", "1->3"]
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if (root === null) {
    	return [];
    }

    var dfsHelper = function(node, path, results) {
    	if (node === null) {
    		path.join("->");
    		results.push(path);
    		return;
    	}

    	path.push(node.val);
    	arguments.callee(node.left, path);
    	arguments.callee(node.right, path);
    }
    var path = [];
    var results =[];
    dfsHelper(root, path, results);

    return results;


};