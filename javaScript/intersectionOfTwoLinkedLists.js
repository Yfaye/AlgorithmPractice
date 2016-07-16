/*160. Intersection of Two Linked Lists  QuestionEditorial Solution  My Submissions
Total Accepted: 81729
Total Submissions: 268036
Difficulty: Easy
Write a program to find the node at which the intersection of two singly linked lists begins.


For example, the following two linked lists:

A:          a1 → a2
                   ↘
                     c1 → c2 → c3
                   ↗            
B:     b1 → b2 → b3
begin to intersect at node c1.


Notes:

If the two linked lists have no intersection at all, return null.
The linked lists must retain their original structure after the function returns.
You may assume there are no cycles anywhere in the entire linked structure.
Your code should preferably run in O(n) time and use only O(1) memory.
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 /* 一下造环解环的解法，比双指针的复杂
var getIntersectionNode = function(headA, headB) {
	//corner case
	if (headA === null || headB === null) {
		return false;
	}
	if (headA === headB) {
		return headA;
	}

	// get the tail of list A
	var runnerA = headA;

	while (runnerA.next != null) {
		runnerA = runnerA.next;
	}

	// connect list A to list B
	runnerA.next = headB;

	// search the enterance of cycle
	var result = detectCycle(headB);
	runnerA.next = null;

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

	return result;
    

};
*/ 

var getIntersectionNode = function(headA, headB) {
	
};