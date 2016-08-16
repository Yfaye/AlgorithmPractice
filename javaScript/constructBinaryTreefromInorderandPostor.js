/*106. Construct Binary Tree from Inorder and Postorder Traversal  QuestionEditorial Solution  My Submissions
Total Accepted: 62509
Total Submissions: 208856
Difficulty: Medium
Given inorder and postorder traversal of a tree, construct the binary tree.

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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    return build(0, inorder.length-1);
    
    function build(l,r) {
        if (l > r) {
            return null;
        }
        
        var v = postorder.pop();
        var i = inorder.indexOf(v);
        var root = new TreeNode(v);
        
        root.right = build(i+1, r);
        root.left = build(l, i-1);
        
        return root;
    }    
};

// 只是把前面preorder inorder建树的代码略做了一下分析改动，就AC了，这段代码真是太棒了，空下来的时候要好好消化回顾一下