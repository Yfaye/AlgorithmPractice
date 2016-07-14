/*86. Partition List  QuestionEditorial Solution  My Submissions
Total Accepted: 71001
Total Submissions: 235492
Difficulty: Medium
Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

You should preserve the original relative order of the nodes in each of the two partitions.

For example,
Given 1->4->3->2->5->2 and x = 3,
return 1->2->2->4->3->5.
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
	//corner case
	if(head === null || head.next === null) {
		return head;
	}
    
    var dummy = new ListNode(-1);
    dummy.next = head;
    head = dummy;

    var greater = new ListNode(-1);

    while (head.next !== null) {
    	if (head.next.val >= x) {
    		greater.next = head.next;
    		greater = greater.next;
    		head.next = head.next.next;
    	}
    	head = head.next;
    }
    greater.next = null;
    head.next = greater.next;

    return dummy.next;
}; 

//此题第一想法，头结点会改变，要设dummy节点
//第二注意的地方是，runner不能跑到null才停止，要停止在最后一个节点上