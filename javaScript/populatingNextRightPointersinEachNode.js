/*116. Populating Next Right Pointers in Each Node  QuestionEditorial Solution  My Submissions
Total Accepted: 97213
Total Submissions: 265026
Difficulty: Medium
Given a binary tree

    struct TreeLinkNode {
      TreeLinkNode *left;
      TreeLinkNode *right;
      TreeLinkNode *next;
    }
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.

Note:

You may only use constant extra space.
You may assume that it is a perfect binary tree (ie, all leaves are at the same level, and every parent has two children).
For example,
Given the following perfect binary tree,
         1
       /  \
      2    3
     / \  / \
    4  5  6  7
After calling your function, the tree should look like:
         1 -> NULL
       /  \
      2 -> 3 -> NULL
     / \  / \
    4->5->6->7 -> NULL
*/

/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
  if (root === null || (root.left === null && root.right === null)) {
    return;
  }

  var queue = [];
  queue.push(root);

  while(queue.length !== 0) {
    var n = queue.length;
    for (var i = 0; i < n; i++) {
        if (i < n-1) {
          queue[i].next = queue[i+1];
        } else {
          queue[i].next = null;
        }
    }
    for (var j = 0; j < n; j++) {
        var tmp = queue.shift();
        console.log(tmp);
        if (tmp.left !== null) {
          queue.push(tmp.left);
        }
        if (tmp.right !== null) {
          queue.push(tmp.right);
        }      
    }
  }
  return;    
    
};

//本题其实考察的是二叉树的层序遍历，在层序遍历的时候，把每一层的node指到下一个，如果是每一层的最后一个，就指向null
//!!!!! 但是以上解法TLE了…………


