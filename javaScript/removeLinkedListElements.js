/*203. Remove Linked List Elements  QuestionEditorial Solution  My Submissions
Total Accepted: 70779
Total Submissions: 240341
Difficulty: Easy
Remove all elements from a linked list of integers that have value val.

Example
Given: 1 --> 2 --> 6 --> 3 --> 4 --> 5 --> 6, val = 6
Return: 1 --> 2 --> 3 --> 4 --> 5

Credits:
Special thanks to @mithmatt for adding this problem and creating all test cases.

*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
	//corner case
	/*if (head === null || (head.next === null && head.val !== head.val)) {
		return head;
	}

	if (head.next === null && val === head.val) {
		return [];
	}*/
	//在head只有一个node时的corner case可以不用判断，在后面while里能算出正确答案

	//corner case
	if (head === null) {
		return head;
	}

	var dummy = new ListNode(-1);
	dummy.next = head;
	head = dummy;

	while (head.next !== null) {
		if (head.next.val === val) {
			head.next = head.next.next;
		} else {
			head = head.next;
		}
	}
	return dummy.next;
};