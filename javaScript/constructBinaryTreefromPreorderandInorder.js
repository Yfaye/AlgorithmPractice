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
    if (preorder.length === 0 || inorder.length === 0) { //这个是递归终止条件，一开始只有上下两个if，结果一直递归停不下来
        return null;   
    }

    if (preorder.length === 1 && inorder.length === 1) {
        var node = new TreeNode(preorder[0]);
        return node;
    }


    var rootNode = preorder[0];
    var rootAtInorder = inorder.indexOf(rootNode);

    var left = null, right = null;
    var leftPreorder = [], rightPreorder = [], leftInorder = [], rightInorder = [];
    
    if (rootAtInorder === 0) { // 没有左子树
        left = null;
        rightInorder = inorder.slice(rootAtInorder+1);
        rightPreorder = preorder.slice(1);
        right = arguments.callee(rightPreorder, rightInorder);
    } else if (rootAtInorder === inorder.length - 1) { // 没有右子树
        right = null;
        leftInorder = inorder.slice(0,rootAtInorder);
        leftPreorder = preorder.slice(1);
    } else {
        leftInorder = inorder.slice(0,rootAtInorder);
        rightInorder = inorder.slice(rootAtInorder+1);  
        var leftCount = leftInorder.length;
        leftPreorder = preorder.slice(1, leftCount+1);
        rightPreorder = preorder.slice(leftCount+1);
        left = arguments.callee(leftPreorder,leftInorder);
        right = arguments.callee(rightPreorder, rightInorder);      
    }

    var r = new TreeNode(rootNode);
    r.left = left;
    r.right = right;

    return r;
    
};

// 贴过去没有AC，肉眼又暂时没有发现问题，决定写个测试跑一下
// 因为对slice的用法不熟，所以debug了很久，slice的两个参数，生成的数组是不包含end那个所对应的值的

function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
}

var preOrder = [1,2];
var inOrder = [1,2];

var test = buildTree(preOrder, inOrder);
console.log(test);


// 以上逻辑也对，能做出题目来，但是TLE和MLE了T_T苍天啊！！！！
// 优化以后还是MLE


var buildTree = function(preorder, inorder) {
    if (preorder === null || inorder === null || preorder.length !== inorder.length) {
        return null;
    }
    if (preorder.length === 0 || inorder.length === 0) { //这个是递归终止条件，一开始只有上下两个if，结果一直递归停不下来
        return null;   
    }

    if (preorder.length === 1 && inorder.length === 1) {
        var node = new TreeNode(preorder[0]);
        return node;
    }


    var rootNode = preorder[0];
    var rootAtInorder = inorder.indexOf(rootNode);

    var left = null, right = null;
    var leftPreorder = [], rightPreorder = [], leftInorder = [], rightInorder = [];
    
    if (rootAtInorder === 0) { // 没有左子树
        left = null;
        rightInorder = inorder.slice(rootAtInorder+1);
        rightPreorder = preorder.slice(1);
        right = arguments.callee(rightPreorder, rightInorder);
    } else if (rootAtInorder === inorder.length - 1) { // 没有右子树
        right = null;
        leftInorder = inorder.slice(0,rootAtInorder);
        leftPreorder = preorder.slice(1);
        left = arguments.callee(leftPreorder,leftInorder);
    } else {
        leftInorder = inorder.slice(0,rootAtInorder);
        rightInorder = inorder.slice(rootAtInorder+1);  
        var leftCount = leftInorder.length;
        leftPreorder = preorder.slice(1, leftCount+1);
        rightPreorder = preorder.slice(leftCount+1);
        left = arguments.callee(leftPreorder,leftInorder);
        right = arguments.callee(rightPreorder, rightInorder);      
    }

    var r = new TreeNode(rootNode);
    r.left = left;
    r.right = right;

    return r;
};