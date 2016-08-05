/*101. Symmetric Tree  QuestionEditorial Solution  My Submissions
Total Accepted: 120508
Total Submissions: 344206
Difficulty: Easy
Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
But the following [1,2,2,null,3,null,3] is not:
    1
   / \
  2   2
   \   \
   3    3
Note:
Bonus points if you could solve it both recursively and iteratively.
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
	if (root === null) {
		return true;
	}

	var mirror = function(node1, node2) {
		if (node1 === null &&　node2 === null) {
			return true;
		}
		if ((node1 === null && node2 !== null) || (node1 !== null && node2 === null)) {
		    return false;
		}
		return (node1.val === node2.val) && mirror(node1.left, node2.right) && mirror(node1.right, node2.left);
	}

	return mirror(root.left, root.right); 
};

// 本题一开始分析有偏差，以为symmetricTree必须，左子树和右子树都是symmertricTree, 并且 左右子数互为镜像才可以。
//后来发现，只要左右子树互为镜像就可以了。所以就写了一个方法，检查两个node是不是互为镜像。就AC了。
//有个小插曲是，一开始没有 		
//		if ((node1 === null && node2 !== null) || (node1 !== null && node2 === null)) {
//		    return false;
//		}
// 结果在return 的 node1.val === node2.val这里报错了，因为之前的code没有排除node1或node2中有一个为null的情景

//上面是简单粗暴的递归算法，还想到一个算法，如果是SymmetricTree的话，中序遍历按左根右，和右根左，所得到的array应该完全一样。

