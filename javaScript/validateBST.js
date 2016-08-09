/*98. Validate Binary Search Tree  QuestionEditorial Solution  My Submissions
Total Accepted: 104785
Total Submissions: 489519
Difficulty: Medium
Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
Example 1:
    2
   / \
  1   3
Binary tree [2,1,3], return true.
Example 2:
    1
   / \
  2   3
Binary tree [1,2,3], return false.
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
var isValidBST = function(root) {
    if (root === null) {
        return true;
    }

    var Result = function() {
        this.min = Number.MAX_VALUE;
        this.max = -Number.MAX_VALUE;
    }

    var getMinMax = function (node, result) {
        if( node === null ) {
            return result;
        }

        if (node.val <= result.min) {
            result.min = node.val;
        }
        if (node.val >= result.max) {
            result.max = node.val;
        }

        getMinMax(node.left, result);
        getMinMax(node.right, result);
        return result;
    }

    var l = new Result();
    var r = new Result();

    var leftR = getMinMax(root.left, l);
    var rightR = getMinMax(root.right, r);
    

    return (isValidBST(root.left) && isValidBST(root.right) && leftR.max < root.val && root.val < rightR.min);
};

    
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var roo = new TreeNode(2);
var l = new TreeNode(1);
var r = new TreeNode(3);

roo.left = l;
roo.right = r;

isValidBST(roo);

/* Unit Test
    var Result = function() {
        this.min = Number.MAX_VALUE;
        this.max = Number.MIN_VALUE;
    }
    resultl = new Result();
    resultr = new Result();
    var getMinMax = function (node, result) {
        if( node === null ) {
            return;
        }

        if (node.val <= result.min) {
            result.min = node.val;
        }
        if (node.val >= result.max) {
            result.max = node.val;
        }

        getMinMax(node.left, result);
        getMinMax(node.right, result);
        return result;
    }

var testL = getMinMax(roo.left, resultl);
console.log(testL);
var testR = getMinMax(roo.right, resultr);
console.log(testR);


*/

// 这个题目的收获是，原来js里面，Number.MIN_VALUE是个无限接近于0的数，而如果最小值要小到负数，应该用 -Number.MAX_VALUE
// 另一个收获是，原来觉得还应该比较是不是左子树的min小于它自己的max，但因为如果是一个初始化状态的result便没有办法比较，所以放弃了。但是其实getMinMax里面的逻辑已经决定了，min和max如果重新赋值了，min一定是小于max的。
// 哦！还有一点，root === null的时候，要return true
// 以上这个很丑的代码AC是AC了，不过感觉还是有点丑，之前看到JAVA里面，用带入range来写的方法，觉得优雅和清晰一些，下面再试一试。

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    if (root === null) {
        return true;
    }
    
    var inRange = function(val, min, max) {
        return min < val && val < max;
    }

    var validBST = function(node, min, max) {
        if (node === null) {
            return true;
        }
        if (!inRange(node.val, min, max)) {
            return false;
        }
        var left = validBST(node.left, min, node.val);
        var right = validBST(node.right, node.val, max);

        return left && right;
    }

    return validBST(root, -Number.MAX_VALUE, Number.MAX_VALUE);
};
