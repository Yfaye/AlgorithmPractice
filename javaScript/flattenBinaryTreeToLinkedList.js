/*114. Flatten Binary Tree to Linked List  QuestionEditorial Solution  My Submissions
Total Accepted: 91237
Total Submissions: 285077
Difficulty: Medium
Given a binary tree, flatten it to a linked list in-place.

For example,
Given

         1
        / \
       2   5
      / \   \
     3   4   6
The flattened tree should look like:
   1
    \
     2
      \
       3
        \
         4
          \
           5
            \
             6
click to show hints.

Hints:
If you notice carefully in the flattened tree, each node's right child points to the next node of a pre-order traversal.
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  //corner case
  if (root === null) {
    return;
  }

  var stack = [];
  stack.push(root);

  while(stack.length !== 0) {
    var tmp = stack.pop();
    if (tmp.right !== null) {
      stack.push(tmp.right);
    }
    if(tmp.left !== null) {
      stack.push(tmp.left);
    }
    tmp.left = null;
    tmp.right = stack[stack.length - 1];
  }

  return;



    
};
// 看到题目第一眼就想，这难道不就是先序遍历吗？就是输出的不是array而是linked List了
// 再看一遍要求，哦，要求inplace, 这还值得想一想
// 昨天晚上回家的路上，和在家里的时候想了一下，其实就是先序遍历的时候，每个node的左右再重新设一下，于是今天生产上面的代码，AC。

// 初步考虑了一下Divide And Conquer解法，本题D&C的局限在于，需要把左子树的最后一个node的.right, 指向右子树，这个位置需要在D&C的时候额外记录
