/*82. Remove Duplicates from Sorted List II  QuestionEditorial Solution  My Submissions
Total Accepted: 77576
Total Submissions: 283010
Difficulty: Medium
Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.

For example,
Given 1->2->3->3->4->4->5, return 1->2->5.
Given 1->1->1->2->3, return 2->3.
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
    head = dummy; // 这步其实很关键，作用就是保存head的pre信息，这样才删得了head
    
    while(head.next !== null && head.next.next !== null) {
        if (head.next.val === head.next.next.val) {
            var dupVal = head.next.val;
            while(head.next !== null && head.next.val === dupVal) {
                head.next = head.next.next;
            }
        } else {
            head = head.next;
        }
    }
    
    return dummy.next;



    
};
//不同于1，这里是凡是有重复的都删掉，所以有可能会删掉头节点，所以需要设置dummy node
//查找到这个节点与下个节点重复后，需要把这个节点的pre.next接到所有重复数字之后的新节点。