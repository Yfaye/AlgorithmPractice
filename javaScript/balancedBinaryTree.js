/*110. Balanced Binary Tree  QuestionEditorial Solution  My Submissions
Total Accepted: 123964
Total Submissions: 355448
Difficulty: Easy
Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

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
var isBalanced = function(root) {
    if (root === null) {
        return true;
    }
    var getHeight = function(node) {
        if (node === null) {
            return 0;
        }
        var lHeight = getHeight(node.left);
        var rHeight = getHeight(node.right);
        
        return (lHeight >= rHeight? lHeight + 1 : rHeight + 1);

    }
    return isBalanced(root.left) && isBalanced(root.right) && Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1;
    
};

//本题因为不是完全二叉树，所以树高度的计算是用递归来实现的。
//最后是否是平衡树的判断，也是用递归来实现的。
//这么多递归，结果居然一次就AC了，过了226个testcase，还beat大概90%的js code ...
