/*24. Swap Nodes in Pairs  QuestionEditorial Solution  My Submissions
Total Accepted: 107142
Total Submissions: 298966
Difficulty: Easy
Given a linked list, swap every two adjacent nodes and return its head.

For example,
Given 1->2->3->4, you should return the list as 2->1->4->3.

Your algorithm should use only constant space. You may not modify the values in the list, only nodes itself can be changed.
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
var swapPairs = function(head) {
    //corner case
    if (head === null || head.next === null) {
    	return head;
    }

    var dummy = new ListNode(-1);
    dummy.next = head;

    var runner = dummy;
    while (runner !== null && runner.next !== null) {
    	var tmp =runner.next.next;
    	runner.next.next = runner;
    	runner.next = tmp;
    	runner = tmp;
    }
};