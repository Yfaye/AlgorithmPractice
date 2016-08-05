/*102. Binary Tree Level Order Traversal  QuestionEditorial Solution  My Submissions
Total Accepted: 115817
Total Submissions: 338716
Difficulty: Easy
Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
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
var levelOrder = function(root) {
	var result = [];
	if (root === null) {
		return result;
	}

	var queue = [];
	queue.push(root);
	
	while (queue.length !== 0) {
		var n = queue.length;
		var level = [];
		for (var i = 0; i < n; i++) {
			var tmp = queue.shift();
			if (tmp !== null) {
    			level.push(tmp.val);
    			if (tmp.left !== null) {
    				queue.push(tmp.left);
    			}
    			if (tmp.right !== null) {
    				queue.push(tmp.right)
    			}			    
			}
		}
		result.push(level);
		//result.unshift(level); // levelOrderII
	}		
	return result;   
};

// 终于把这个按层序输出搞明白了，原来总结的是一层完结是发生在queue的length在dequeue之后变成0，后来过不了完全二叉树[1,2,3,4,5]这个例子，因为2dequeue之后，紧接着把自己的孩子加进来，queue就一直不为0。
// 后来翻讨论区，发现其实是进入循环后，先把当前queue的长度存一下，然后在这个长度内循环，确保只在queue里面dequeue当前长度的元素，最后每层push到result里面一次。
// levelOrderII 是从下往上输出，只用把最后入result的顺序由现在的push改为unshift即可。