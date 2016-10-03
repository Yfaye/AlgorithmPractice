// 404. Sum of Left Leaves  QuestionEditorial Solution  My Submissions
// Total Accepted: 5958
// Total Submissions: 12983
// Difficulty: Easy
// Find the sum of all left leaves in a given binary tree.

// Example:

//     3
//    / \
//   9  20
//     /  \
//    15   7

// There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.

// Tags Tree

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
var sumOfLeftLeaves = function(root) {
    
    var leftLeavesSum = function(node,from) {
        if (node.left === null && node.right === null && from === 0) {
            return node.val;
        }
        if (node.left === null && node.right === null && from === 1) {
            return 0;
        }
        var right = 0;
        var left = 0;
        if (node.left !== null) {
           left = arguments.callee(node.left, 0); 
        }
        if (node.right !== null) {
            right = arguments.callee(node.right, 1);
        }
        
        return left + right;
    };
    
    
    if (root === null) {
        return 0;
    }
    
    if (root.left === null && root.right === null){
        return 0;
    }
    
    var left = 0;
    var right = 0;
    if (root.left !== null) {
        left = leftLeavesSum(root.left, 0);
    }
    if (root.right !== null) {
        right = leftLeavesSum(root.right, 1);
    }
    
    return left + right;
    
};


//经过艰难的反复debug终于AC了……但是思路还是不那么清晰
