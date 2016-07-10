/*142. Linked List Cycle II  QuestionEditorial Solution  My Submissions
Total Accepted: 80541
Total Submissions: 257672
Difficulty: Medium
Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

Note: Do not modify the linked list.

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
 * @return {ListNode}
 */
var detectCycle = function(head) {
	//corner case
	if (head === null || head.next === null) {
		return null;
	}
	if (head.next === head) {
		return head;
	}

	var fast = head;
	var slow = head;

	while(fast !== null && fast.next !== null) {
		fast = fast.next.next;
		slow = slow.next;
		if (fast === slow) { // there is a circle
			slow = head;
			while (fast !== slow) {
				slow = slow.next;
				fast = fast.next;
			}
			return fast;
		}
	}

	return null;
    
};