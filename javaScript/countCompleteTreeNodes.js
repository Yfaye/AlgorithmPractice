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
	/*var getHeight = function(node) {
		if (node === null) {
			return 0;
		}
		return 1 + getHeight(node.left);
	}*/

	var getHeight = function(node) {
		var height = 0;
		while (node !== null) {
			height++;
			node = node.left;
		}
		return height;
	}

	var lHeight = getHeight(root.left);
	var rHeight = getHeight(root.right);

	if (lHeight === rHeight) {
		return (1 << lHeight) + arguments.callee(root.right);
	} else {
		return (1 << rHeight) + arguments.callee(root.left);
	}

}

// 这道题目终于AC了，这个题目被冠以二分法的标签，我没有想出二分法的解法。直接的想法，遍历一遍，node数就出来了。
// 后来看了discuss区的讨论，才发现，原来二分法的思想是，如果左右子树的高度相等，那就说明左子树是一颗完全满二叉树，其节点数为(1<<lheight) - 1, 再加root那个1， 然后再加上右子树的node数即可。
// 如果高度不等，只能是左边比右边高，说明右子树是一颗完全满二叉树，其节点数为(1<<rHeight) - 1, 再加上root那个1， 然后再加上左子树的node数即可。
// 这道题的关键处在于，用左右子树高度的判断，每次减少了一半的计算量，所以这就是二分法这个标签的来源。
// 这个算法的复杂度是多少呢？因为它其实每次算的是半棵树，所以如果总节点数是N，那么它访问到的节点数就是略小于N/2, 因为满二叉树每次都不用算，直接就知道节点数，但getHeight还有logHeight的时间开销，所以是个logHeight + 节点数/2的开销。
// 空间复杂度，就是主要是递归的开销了。之前的getHeight也用递归来做，导致在较大数据时出现 MLE, 后来把getHeight改成迭代来做，就AC了

//总结：
//树的问题，考虑divide and conquer的解法，考虑递归
//完全二叉树，满二叉树，注意它们的性质： 高度为N的满二叉树，节点数为Math.pow(2, N) - 1, 其叶子节点数为Math.pow(2, (N-1)).