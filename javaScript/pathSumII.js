/*113. Path Sum II  QuestionEditorial Solution  My Submissions
Total Accepted: 90359
Total Submissions: 307448
Difficulty: Medium
Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

For example:
Given the below binary tree and sum = 22,
              5
             / \
            4   8
           /   / \
          11  13  4
         /  \    / \
        7    2  5   1
return
[
   [5,4,11,2],
   [5,8,4,5]
]
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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    if (root === null) {
      return [];
    }

    var getPath = function(node, path, result, sum) {
        //console.log(sum);
      if (node === null) {
        return;
      }
      path.push(node.val);
      if (node.val === sum && node.left === null && node.right === null) {
        result.push(path);
        return;
      }
      if (node.left !== null) {
        arguments.callee(node.left, path.slice(0), result, sum - node.val); // 这道题Debug了一个小时，发现这里应该是node.val而之前写成了root.val
      }
      if(node.right !== null) {
        arguments.callee(node.right, path.slice(0), result, sum - node.val);// 这道题Debug了一个小时，发现这里应该是node.val而之前写成了root.val
      }

    }

    var path = [];
    var result = [];
    getPath(root, path, result, sum); 
    
    return result;   
    
};

// 上面是直接用DFS做的，下面考虑用Divide & Conquer怎么做
var pathSum = function(root, sum) {
    if (root === null) {
      return [];
    }

    //下面这个if是debug的时候发现的问题，如果没有这个，答案总是[]
    if (root.val === sum && root.left === null && root.right === null) {
      return [[root.val]];
    }

    var left = arguments.callee(root.left, sum - root.val);
    var right = arguments.callee(root.right, sum - root.val);

    var result = left.concat(right);

    //这段循环必不可少，是形成答案的关键
    var l = result.length;
    for (var i = 0; i < l ; i++) {
      result[i].unshift(root.val);  // 之前写成result[i] = result[i].unshift(root.val),结果报错，说没有unshift这个方法
    } 
    
    return result;   
};
// debug了一会儿之后，上面这段代码AC了，而且速度比DFS那个方法快，看来树的题首先考虑D&C, 此言不虚