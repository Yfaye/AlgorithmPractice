/*83. Remove Duplicates from Sorted List  QuestionEditorial Solution  My Submissions
Total Accepted: 126110
Total Submissions: 337593
Difficulty: Easy
Given a sorted linked list, delete all duplicates such that each element appear only once.

For example,
Given 1->1->2, return 1->2.
Given 1->1->2->3->3, return 1->2->3.
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
var deleteDuplicates = function(head) {
    //corner case
    if (head === null || head.next === null) {
    	return head;
    }

    var dummy = new ListNode(-1);
    dummy.next = head;

    while(head !== null && head.next !== null) {
    	if (head.val === head.next.val) {
    		head.next = head.next.next;
    	} else {
     	    head = head.next; // 这里不加else，会出现[1,1,1] 得出 [1,1]的错误。错误的原因是思路的逻辑错误，应该是 如果当前值和下一个值相等，就删掉下一个值，这样下次循环再比较这个值和下一个值。如果不相等的话，就不删值，继续往下走一个    
    	}
    }

    return dummy.next;    
};
//删除需要知道前序节点pre： pre.next = cur.next;
//而且，因为本题总是会保留重复节点中的第一个，所以不存在头结点被删除的风险，不用设置头结点。
//不过本题加了dummy后，直接让head作为runner来跑，省了一个current指针，所以也无所谓。
