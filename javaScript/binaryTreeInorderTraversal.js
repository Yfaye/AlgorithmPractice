/*94. Binary Tree Inorder Traversal  QuestionEditorial Solution  My Submissions
Total Accepted: 140078
Total Submissions: 339449
Difficulty: Medium
Given a binary tree, return the inorder traversal of its nodes' values.

For example:
Given binary tree [1,null,2,3],
   1
    \
     2
    /
   3
return [1,3,2].

Note: Recursive solution is trivial, could you do it iteratively?
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

//尽管题目说Recursive Solution is Trivial, 还是要从recursive开始做, 一下代码已AC
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
	var result = [];
	if (root === null) {
		return result;
	}
	
	var inorder = function t(node, result) {
		if (node === null) {
			return;
		}
		t(node.left, result);
		result.push(node.val);
		t(node.right, result);
	}
	
	inorder(root, result);
	return result;   
};

//接下来，从简洁度出发，考虑用Divide and Conquer做

var inorderTraversal = function(root) {
	if (root === null) {
		return []; // 第一次是没有AC的，错误显示的是，没有push方法，因为第一次提交的代码，这里是直接return。这样到了第一个左子树的左叶子节点，是没有空[]给它加进来的，所以显示错误，这里要return []就对了。
	}
	
	var left = arguments.callee(root.left);
	var right = arguments.callee(root.right);

	left.push(root.val);
	return left.concat(right);  
};

//当当当，接下来当然是重头戏，非递归的中序遍历咯~~让我来不看答案先试试。
//反正肯定是用栈，简单画图想到的顺序是，root先进栈，只要栈不空，先看栈顶元素的左孩子有没有，有就进栈。然后依次弹出栈顶元素的时候检查右孩子，

var inorderTraversal = function(root) {
	var result =[];
	if (root === null) {
		return result;
	}

	var stack = [];
	stack.push(root);

	while(stack.length !== 0) {


		// 这么写会陷入死循环，问题就出在下面这四行代码上
		//var peek = stack[stack.length-1];
		//while (peek.left !== null) {
		//	stack.push(peek.left);
		//}  
		// 上面的代码，造成了Memory Limit Exceeded, 跑测试的时候发现，stack的状态一直在不停的push第一个有左子树的node,于是以为是peak取过一次值之后，就不变了，于是改成下面的代码，还是不行

		//==============！！！！！！！！！！！！！！！！！！================
		//检查来检查去，最后发现问题是这样的，比方一个节点，它有左孩子，然后这个左孩子就是叶子节点，就没有了，然后刚添加进去的左孩子就被弹了出去，然后栈顶又是这个节点，然后就无限循环了。
		//==============！！！！！！！！！！！！！！！！！！================
		while (stack[stack.length-1].left !== null) {
			stack.push(stack[stack.length-1].left);
		}

		//改成下面的代码，又会造成右孩子的左孩子没有被访问进去
		//while(root.left !== null) {
		//	stack.push(root.left);
		//	root = root.left;
		//}

		var pop = stack.pop();
		result.push(pop);
		if (pop.right !== null) {
			stack.push(pop.right);
		}
	}

	return result;

};


//中序遍历再尝试:先把数的左节点推入栈，然后取出，再推右节点。
var inorderTraversal = function(root) {


};


function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
}

var ro = new TreeNode(1);
var ror = new TreeNode(2);
var rorl = new TreeNode(3);

ro.right = ror;
ror.left = rorl;

inorderTraversal(ro);