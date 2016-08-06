/*112. Path Sum  QuestionEditorial Solution  My Submissions
Total Accepted: 114934
Total Submissions: 359951
Difficulty: Easy
Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

For example:
Given the below binary tree and sum = 22,
              5
             / \
            4   8
           /   / \
          11  13  4
         /  \      \
        7    2      1
return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.
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
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
	if (root === null) {
		return false;
	}


	if (root.val === sum && root.left === null && root.right === null) {
		return true;
	}

	return (arguments.callee(root.left,sum - root.val) || arguments.callee(root.right, sum - root.val));
    
};

//failed in case [1,2] 1 // 因为忽略了这条路必须要是从leaf到root的, 然后就在if (root.val === sum) 这个条件里面附加上了 && root.left === null && root.right === null， 然后就AC了