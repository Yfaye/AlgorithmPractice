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
//!!!!! 但是以上解法TLE了…………于是考虑了一下，两遍循环并不必要，改成一遍循环，结果还是TLE T_T

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


// 只好写code，跑个单元测试试试问题出在哪里

var ro = new TreeLinkNode(1);
var rol = new TreeLinkNode(2);
var ror = new TreeLinkNode(3);
var roll = new TreeLinkNode(4);
var rolr = new TreeLinkNode(5);
var rorl = new TreeLinkNode(6);
var rorr = new TreeLinkNode(7);

ro.left = rol;
ro.right = ror;
rol.left = roll;
rol.right = rolr;
ror.left = rorl;
ror.right = rorr;

connect(ro);

console.log(ro);

// 跑了单元测试，发现解法逻辑是完全没有问题的，这个解法可以用来解决所有二叉树的情况，而不是单单的满二叉树的情况，所以之所以会TLE，肯定是满二叉树的特性没有好好利用

// 下面来考虑divide and conquer的解法

var connect = function(root) {
  if (root === null || (root.left === null && root.right === null)) {
    return;
  }

  root.left.next = root.right;

  // 借助root.next处理5连6的情况: 即左子树的右孩子的next要指向右子树的左孩子
  if(root.next!=null){  
    root.right.next = root.next.left;  
  }
  // 这个借助root.next处理左子树的右孩子连接右子树的左孩子的方法太巧妙了！！而且这里容易被考虑漏，赞一个！
  // 果然精妙的代码都不是自己写出来的T_T


  var left = connect(root.left);
  var right = connect(root.right);



  return;
};

// debug了两次，最后看人家的代码，才AC. 以下是一段Java的参考代码：

/*
 class Solution {
    public void connect(TreeLinkNode root) {
         if(root == null){  
            return;  
        }  
          
        if(root.left != null){  
            root.left.next = root.right;  
        }  
        if(root.right != null){  
            root.right.next = root.next==null ? null : root.next.left;  // 这一行可以看得很清楚，需要处理的情况是节点的右孩子的next指针有两种不同情况
        }  
          
        connect(root.left);  
        connect(root.right);  
    }         
}
*/


