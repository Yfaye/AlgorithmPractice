/*111. Minimum Depth of Binary Tree

    Total Accepted: 114201
    Total Submissions: 367619
    Difficulty: Easy

Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
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
var minDepth = function(root) {
	//base case
    if (root === null) {
        return 0;
    }
    
    //recursive case
    //console.log('enter root left: ' + root.left);
    var left = arguments.callee(root.left);
    //console.log('left depth is:' + left);
    //console.log('enter root right: ' + root.right);
    var right = arguments.callee(root.right);
    console.log('right depth is:' + right);
    
    return Math.min(left,right) + 1;
    
};

function TreeNode(val) {
    this.val = val;
	this.left = this.right = null;
}

var TestTree = {
    createNew: function(val) {
        var tree = {};
        tree.val = val;
        tree.left = tree.right = null;
        return tree;
    }
};

var t_root = TestTree.createNew(1);
var t_left_1 = TestTree.createNew(2);
var t_right_1 = TestTree.createNew(3);
var t_right_2 = TestTree.createNew(6);
var t_left_2 = TestTree.createNew(4);
var t_left_3 = TestTree.createNew(5);
t_root.left = t_left_1;
t_root.right = t_right_1;
t_left_1.left = t_left_2;
t_left_2.left = t_left_3;
t_right_1.right = t_right_2;
minDepth(t_root);
/*
2
*/
//原题链接：http://oj.leetcode.com/problems/minimum-depth-of-binary-tree/ 

//这道题是树的题目，其实跟Maximum Depth of Binary Tree非常类似，
//只是这道题因为是判断最小深度，所以必须增加一个叶子的判断
//（因为如果一个节点如果只有左子树或者右子树，我们不能取它左右子树中小的作为深度，因为那样会是0，我们只有在叶子节点才能判断深度，而在求最大深度的时候，因为一定会取大的那个，所以不会有这个问题）。
//这道题同样是递归和非递归的解法，递归解法比较常规的思路，比Maximum Depth of Binary Tree多加一个左右子树的判断，代码如下：
var minDepth = function(root) {
    //base case
    if (root === null) {
        return 0;
    }
    if (root.left === null) {
        return arguments.callee(root.right) + 1;
    }
    if (root.right === null) {
        return arguments.callee(root.left) + 1;
    }
    
    //recursive case
    var left = arguments.callee(root.left);
    var right = arguments.callee(root.right);
    
    return Math.min(left,right) + 1;  
};

//总结：这道题犯了概念错误，还绕进去好几天出不来： 一颗二叉树，如果只有右子树，没有左子树，它的深度，不是1，而是右子树的深度。

//递归解法急速判断左右两边子树哪个depth最小，要注意如果有个节点只有一边孩子时，不能返回0，要返回另外一半边的depth。 
//网上还有一种解法，就是层序遍历树，