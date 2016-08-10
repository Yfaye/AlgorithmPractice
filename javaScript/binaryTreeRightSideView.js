/*199. Binary Tree Right Side View  QuestionEditorial Solution  My Submissions
Total Accepted: 50289
Total Submissions: 138116
Difficulty: Medium
Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

For example:
Given the following binary tree,
   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
You should return [1, 3, 4].
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
 * @return {number[]}
 */
var rightSideView = function(root) {
	var result = [];
    if (root === null) {
    	return result;
    }

    var queue = [];
    queue.push(root);
    while (queue.length !== 0) {
	    var n = queue.length;
	    for (var i = 0; i < n; i++) {
	    	var tmp = queue.shift();
	    	if (tmp.left !== null) {
	    		queue.push(tmp.left);
	    	}
	    	if (tmp.right !== null) {
	    		queue.push(tmp.right);
	    	}
	    	if (i === n-1) {
	    		result.push(tmp.val);
	    	}
	    }    	
    }

    return result;
};

// 直接AC了，这道题考的其实层序遍历，每一层只要把最后一个元素加到结果数组就好了
