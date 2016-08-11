/*129. Sum Root to Leaf Numbers  QuestionEditorial Solution  My Submissions
Total Accepted: 84496
Total Submissions: 250487
Difficulty: Medium
Given a binary tree containing digits from 0-9 only, each root-to-leaf path could represent a number.

An example is the root-to-leaf path 1->2->3 which represents the number 123.

Find the total sum of all root-to-leaf numbers.

For example,

    1
   / \
  2   3
The root-to-leaf path 1->2 represents the number 12.
The root-to-leaf path 1->3 represents the number 13.

Return the sum = 12 + 13 = 25.*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 // 用了pathsumII的代码，已AC
var sumNumbers = function(root) {
	if (root === null) {
		return 0;
	}
    
    var sumPath = function s(node) {
    	if (node === null) {
    		return [];
    	}

    	if (node.left === null && node.right === null) {
    		return [[node.val]];
    	}

    	var left = s(node.left);
    	var right = s(node.right);

    	var result = left.concat(right);

    	var l = result.length;
    	for (var i = 0; i < l; i++) {
    		result[i].unshift(node.val);
    	}
    	return result;
    }

    var sumArr = sumPath(root);

    var sum = 0;
    for (var j = 0; j < sumArr.length; j++) {
    	sum += parseInt(sumArr[j].join(""));
    }

    return sum;   
};

// 这一题其实就是pathSumII变一变，但是如果没有做过pathSumII，直接做这一题，还是有点麻烦的。因为分治法不是那么直接就能用。

// 以下，树高大于2，子树的根，会被相加两次，需要debug

var sumNumbers = function(root) {
 	if (root === null) {
		return 0;
	}
    
    var sumPath = function s(node) {
    	if (node === null) {
    		return "";
    	}

    	if (node.left === null && node.right === null) {
    		return node.val+"";
    	}

    	var left = s(node.left);
    	var right = s(node.right);

    	var pathLeft = node.val+""+left;
    	var pathRight = node.val+""+right;
    	var result = parseInt(pathLeft) + parseInt(pathRight);
    	
    	console.log(pathLeft);
    	console.log(pathRight);

    	return result; 
    }

    return sumPath(root);   
};