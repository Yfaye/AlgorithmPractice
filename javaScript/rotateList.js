/*61. Rotate List  QuestionEditorial Solution  My Submissions
Total Accepted: 74581
Total Submissions: 320946
Difficulty: Medium
Given a list, rotate the list to the right by k places, where k is non-negative.

For example:
Given 1->2->3->4->5->NULL and k = 2,
return 4->5->1->2->3->NULL.
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    //corner case
    if (head === null || head.next === null || k <= 0) {
    	return head;
    }

    var dummy = new ListNode(-1);

    var slow = head;
    var quick = head;

    // move quick k nodes ahead of slow
    for (var i = 0; i < k; i++) {
    	if (quick === null) { // k > length of linked list
    		quick = head; // for OA requirement [1,2,3,4,5],12 should return the same result as [4,5,1,2,3]
    	}
    	quick = quick.next;
    }

    if (quick === null) { // special case for [1,2],2
        return head;
    }

    while (quick.next !== null) { // so quick stop at the last node and slow stop right before k nodes to the end
    	slow = slow.next;
    	quick = quick.next;
    }

    dummy.next = slow.next;
    slow.next = null;
    quick.next = head;

    return dummy.next;
};

// TLE for case [1,2,3],2000000 so add a runner to for k = k % length
// below is the optimized solution

var rotateRight = function(head, k) {
    //corner case
    if (head === null || head.next === null || k <= 0) {
    	return head;
    }

    var listLength = 0;
    var runner = head;
    while(runner !== null) {
    	runner = runner.next;
    	listLength++;
    }
    
    k = k % listLength;
    
    if (k === 0) {
        return head;
    }

    var dummy = new ListNode(-1);

    var slow = head;
    var quick = head;

    // move quick k nodes ahead of slow
    for (var i = 0; i < k; i++) {
    	quick = quick.next;
    }

    while (quick.next !== null) { // so quick stop at the last node and slow stop right before k nodes to the end
    	slow = slow.next;
    	quick = quick.next;
    }

    dummy.next = slow.next;
    slow.next = null;
    quick.next = head;

    return dummy.next;
};