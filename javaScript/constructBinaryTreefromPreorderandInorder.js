/*105. Construct Binary Tree from Preorder and Inorder Traversal  QuestionEditorial Solution  My Submissions
Total Accepted: 71827
Total Submissions: 242255
Difficulty: Medium
Given preorder and inorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (preorder === null || inorder === null || preorder.length !== inorder.length) {
        return null;
    }
    if (preorder.length === 0 || inorder.length === 0) {
        return;
    }

    if (preorder.length === 1 && inorder.length === 1) {
        var node = new TreeNode(preorder[0]);
        return node;
    }


    var rootNode = preorder[0];

    var rootAtInorder = inorder.indexOf(rootNode);
    var leftPreorder = [], rightPreorder = [], leftInorder = [], rightInorder = [];
    
    if (rootAtInorder === 0) {
        leftInorder = [];
        rightInorder = inorder.slice(1);
    } else if (rootAtInorder === 1) {
        leftInorder = inorder.slice(0,1);
        rightInorder = inorder.slice(2);
    } else {
        leftInorder = inorder.slice(0,rootAtInorder-1);
        rightInorder = inorder.slice(rootAtInorder+1);
    }
    
    var leftCount = leftInorder.length;
    if (leftCount === 0) {
        leftPreorder = [];
        rightPreorder= preorder.slice(1);
    } else if (leftCount === 1) {
        leftPreorder = preorder.slice(1,2);
        rightPreorder= preorder.slice(2);
    } else {
       leftPreorder = preorder.slice(1, leftCount);
       rightPreorder = preorder.slice(leftCount+1);        
    }
    console.log(leftPreorder);
    console.log(leftInorder);
    console.log(rightPreorder);
    console.log(rightInorder);


    
    var left = arguments.callee(leftPreorder,leftInorder);
    var right = arguments.callee(rightPreorder, rightInorder);

    var r = new TreeNode(rootNode);
    r.left = left;
    r.right = right;

    return r;
    
    
};

// 贴过去没有AC，肉眼又暂时没有发现问题，决定写个测试跑一下
function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
}

var preOrder = [1,2];
var inOrder = [1,2];

var test = buildTree(preOrder, inOrder);
console.log(test);




/*
undefined
*/
/*
undefined
*/