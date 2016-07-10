/*141. Linked List Cycle  QuestionEditorial Solution  My Submissions
Total Accepted: 115814
Total Submissions: 317502
Difficulty: Easy
Given a linked list, determine if it has a cycle in it.

Follow up:
Can you solve it without using extra space?
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
 * @return {boolean}
 */
var hasCycle = function(head) {
	//corner case
	if(head === null) {
		return false;
	}
	if (head.next === null) {
		return false;
	}
	if(head.next === head) {
		return true;
	}

	// fast run 2 steps while slow run 1 step, if they meet, there is a circle
	var fast = head;
	var slow = head;

	while (fast !== null && fast.next !== null) { // fast !== null is necessary when fast reaches the end and we would do null.next !==null in while condition
		fast = fast.next.next;
		slow = slow.next;
		if (fast === slow) {
			return true;
		}
	}
	return false;   
};