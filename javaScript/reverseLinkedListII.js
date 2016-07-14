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
    head = head.next; // set head start from M;
    var mNode = head;// recored M;
    var nNode = head;
    counter++;
 
    //reverse M-N
    while(head !== null && counter <= n) {  //这里debug之前，是写的<n, 这样会丢掉翻转区间的最后一个值
        var tmp = head.next;
        head.next = nNode;
        nNode = head;
        head = tmp;
        counter++;
    }

    // set preM and mNode 的next指针
    PreM.next = nNode;
    mNode.next = head; //这里debug之前，是写的mNode.next = head.next; 但当循环那里也修改了之后，在循环完成之后，head已经停在了postN的位置，所以可以让mNode.next直接指向它。

    return dummy.next;

};

//本题牵扯到的节点其实是preM，M - N， 以及postN
//在完成M到N的翻转之后，preM.next = nNode; mNode.next = postN;
//所以本题要记下preM 和 mNode的位置。
//在翻转M到N的时候，第一步就是mNode从原顺序中脱离后，指向哪里。
//因为翻转产生的新链表，是采用头插法，也就是到最后新链表的第一个，必须是nNode.
//所以对于翻转产生的这段新链表来说，nNode是这个新链表的头，所以第一个mNode要指向nNode