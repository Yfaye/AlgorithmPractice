/*144. Binary Tree Preorder Traversal  QuestionEditorial Solution  My Submissions
Total Accepted: 134731
Total Submissions: 326846
Difficulty: Medium
Given a binary tree, return the preorder traversal of its nodes' values.

For example:
Given binary tree {1,#,2,3},
   1
    \
     2
    /
   3
return [1,2,3].
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
 // 递归-DFS， 已AC
var preorderTraversal = function(root) {
	var result = [];
    if (root === null) {
    	return result;
    }

    var preorder = function f(node, result) {
    	if (node === null) {
    		return;
    	}
    	result.push(node.val);
    	f(node.left, result);
    	f(node.right, result);
    	return result;
    }

    preorder(root, result);
    return result;
};
//Divide and Conquer, 已AC
var preorderTraversal = function(root) {
	if (root === null) {
		return [];
	}

	var left = arguments.callee(root.left);
	var right = arguments.callee(root.right);

	var result = [root.val];
	return result.concat(left,right);
};
//non-recursion 先序遍历非递归, 已AC
/*  
二叉树的非递归前序遍历，前序遍历思想：先让根进栈，只要栈不为空，就可以做弹出操作，  
每次弹出一个结点，记得把它的左右结点都进栈，记得右子树先进栈，这样可以保证右子树在栈中总处于左子树的下面。  
*/
var preorderTraversal = function(root) {
	var result =[];
	if (root === null) {
		return result;
	}

	var stack = [];
	stack.push(root);

	while(stack.length !== 0) {
		var tmp = stack.pop();
		result.push(tmp.val);
		if (tmp.right !== null) {
			stack.push(tmp.right);
		}
		if (tmp.left !== null) {
			stack.push(tmp.left);
		}
	}

	return result;

};

// 从前序遍历这一题来看，树的问题用DFS费时长，return的时候带不带value总要考虑。分治简洁明快，但有递归开销。迭代要考虑如何维护栈。

