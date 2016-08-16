/*
109. Convert Sorted List to Binary Search Tree  QuestionEditorial Solution  My Submissions
Total Accepted: 78537
Total Submissions: 249225
Difficulty: Medium
Given a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
	if (head === null) {
		return null;
	}

	var getMidNode = function(head){
		if (head === null || head.next === null) {
			return head;
		}

		var slow = head;
		var fast = head.next;

		while (fast !== null && fast.next !== null) {
			slow = slow.next;
			fast = fast.next.next;
		}

		return slow;
	}

	var mid = getMidNode(head);
	var rStart = mid.next;
	mid.next = null;

	var root = new TreeNode(head.val);
	root.left = arguments.callee(head);
	root.right = arguments.callee(rStart);

	return root;

    
};

// 虽然前面的建树模板很好用，但那是对array，用来避免重复生成大量arr的，linked list找到中点之后的策略应该不同，应该把中点之前的节点的next设为null，然后left和right分别传入head 以及 找到的中间节点.next;

// 想得很简单，但是没有AC，还要继续debug