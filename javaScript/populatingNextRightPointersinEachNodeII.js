/*117. Populating Next Right Pointers in Each Node II  QuestionEditorial Solution  My Submissions
Total Accepted: 67757
Total Submissions: 204959
Difficulty: Hard
Follow up for problem "Populating Next Right Pointers in Each Node".

What if the given tree could be any binary tree? Would your previous solution still work?

Note:

You may only use constant extra space.
For example,
Given the following binary tree,
         1
       /  \
      2    3
     / \    \
    4   5    7
After calling your function, the tree should look like:
         1 -> NULL
       /  \
      2 -> 3 -> NULL
     / \    \
    4-> 5 -> 7 -> NULL
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
    for (var j = 0; j < n; j++) {
        var tmp = queue.shift();
        //console.log(tmp);
        if (tmp.left !== null) {
          queue.push(tmp.left);
        }
        if (tmp.right !== null) {
          queue.push(tmp.right);
        }
        if (j < n-1){
            tmp.next = queue[0];
        }
        if (j === n-1) {
            tmp.next = null;
        }
    }
  }
  return;     
};

//以上，已AC。但是还不确定这是否满足constant space的要求，这个space应该就是O(N)，N是每层节点个数。
//看网上的分析，似乎constant space就是要求不要用递归
//貌似在leetcode上，树的题目如果不用递归做，就是medium 或者 hard级别了