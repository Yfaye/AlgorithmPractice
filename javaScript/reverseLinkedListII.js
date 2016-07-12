/*92. Reverse Linked List II  QuestionEditorial Solution  My Submissions
Total Accepted: 76818
Total Submissions: 269221
Difficulty: Medium
Reverse a linked list from position m to n. Do it in-place and in one-pass.

For example:
Given 1->2->3->4->5->NULL, m = 2 and n = 4,

return 1->4->3->2->5->NULL.

Note:
Given m, n satisfy the following condition:
1 ≤ m ≤ n ≤ length of list.
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    //corner case
    if (head === null || head.next === null || n <= m) {
    	return head;
    }

    var dummy = new ListNode(-1);
    dummy.next = head;
    head = dummy;
    var counter = 0; // head set to dummy so counter starts at 0;

    while (head !== null && counter < m-1 ) { // set head to PreM
    	head = head.next;
    	counter++;
    }
	var PreM = head; // record preM;

    //reverse M-N
    while(head.next.next !== null && counter < n) {
    	var tmp = head.next.next;
    	head.next.next = head;
    	head = tmp;
    	counter++;
    }

    PreM.next.next = head.next;
    PreM.next = head;

    return dummy.next;

};

//本题牵扯到的节点其实是preM，M - N， 以及postN