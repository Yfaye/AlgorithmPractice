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
			fast = fast.next.next;
			slow = slow.next;
		}

		return slow;
	}

	var mid = getMidNode(head);
	var rStart = mid.next;
	mid.next = null;  // debug时，这里是错误点。并不需要把mid的next指向null，而是应该把mid的前面的一个节点的指针指向null

	var root = new TreeNode(head.val);
	root.left = arguments.callee(head);
	root.right = arguments.callee(rStart);

	return root;

    
};

// 虽然前面的建树模板很好用，但那是对array，用来避免重复生成大量arr的，linked list找到中点之后的策略应该不同，应该把中点之前的节点的next设为null，然后left和right分别传入head 以及 找到的中间节点.next;

// 想得很简单，但是没有AC，还要继续debug。错误点如上，下面为重新写的代码，因为不能return两个节点，所以把getMidNode这个function取消


var sortedListToBST = function(head) {
	if (head === null) {
		return null;
	}
	if (head.next === null) {
		return new TreeNode(head.val);
	}

	var pre = head;
	var mid = head;
	var tail = head; // 这里不能像快慢指针那样，用tail = head.next; 因为这样在链表长度为2的时候，pre和mid会指向同样的第一个节点。

	while (tail !== null && tail.next !== null) {
		pre = mid;
		mid = mid.next;
		tail = tail.next.next;

	}

	pre.next = null;

	var root = new TreeNode(mid.val);
	root.left = arguments.callee(head);
	root.right = arguments.callee(mid.next);

	return root;
};

//这个解法AC了，但这个解法有一个在讨论区讨论到的致命的问题，就是会改写原来的链表，这可能是并不想发生的事情。所以考虑用DFS的方法再来做一下。