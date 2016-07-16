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
    head = dummy; // debug 1, 设dummy node少了这一步。

    while (head !== null && head.next !== null && head.next.next !== null) { //debug 2 之前没有加最后一个判断，导致奇数个node的时候判断失误
        var pairStart =head.next;
        var nextPairStart = head.next.next.next;
        head.next = head.next.next;
        head.next.next = pairStart;
        pairStart.next = nextPairStart;
        head = head.next.next;
    }

    return dummy.next;
};

// 这里由于设立了dummy node，而且每步swap，也需要记录这对pair的前面节点的信息，所以实际循环是从原始head前面开始run的，而每步需要保证是一个pair的话，必须要head.next !== null && head.next.next !== null