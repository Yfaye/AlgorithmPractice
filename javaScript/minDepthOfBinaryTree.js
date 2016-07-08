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