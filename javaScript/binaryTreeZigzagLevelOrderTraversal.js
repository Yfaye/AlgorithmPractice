/*103. Binary Tree Zigzag Level Order Traversal  QuestionEditorial Solution  My Submissions
Total Accepted: 68608
Total Submissions: 228270
Difficulty: Medium
Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its zigzag level order traversal as:
[
  [3],
  [20,9],
  [15,7]
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    var result =[];
    if(root === null) {
    	return result;
    }

    var queue = [];
    queue.push(root);
    var count = 0;

    while(queue.length !== 0) {
    	var n = queue.length;
    	var level = [];
    	for (var i = 0; i < n; i++) {
    		var tmp = queue.shift();
    		if (tmp.left !== null) {
    			queue.push(tmp.left);
    		}
    		if (tmp.right !== null) {
    			queue.push(tmp.right);
    		}
    		if (count & 1 === 1) { // 想装精，结果判断奇偶的位操作搞错了，而且count & 1 === 0不能用来判断，它好像&什么都是0，具体原因待考证 
    			level.unshift(tmp.val);
    		} else {
    			level.push(tmp.val);
    		}
    	}
    	result.push(level);
    	count++;
    }
    return result;
};
// 看到题目的第一印象，层序遍历的变体，需要根据所在层数的奇偶，调整输入的顺序