/*19. Remove Nth Node From End of List  QuestionEditorial Solution  My Submissions
Total Accepted: 117768
Total Submissions: 389160
Difficulty: Easy
Given a linked list, remove the nth node from the end of list and return its head.

For example,

   Given linked list: 1->2->3->4->5, and n = 2.

   After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:
Given n will always be valid.
Try to do this in one pass.
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    //corner case
    if (n <= 0) {
        return head;
    }
    if (head.next === null && n === 1) {
        head = head.next;
        return head;
    }

    var current = head;
    var runner = head;
    for (var i = 0; i < n ; i++) {
    	if (runner === null && i < n) { // so n is > list length
    		return head;
    	}  
    	runner = runner.next;       
    }
    if (runner === null) { // so head is the one to be deleted;
        head = head.next;
        return head;
    }
    
    while (runner.next !== null) { // so slow could stay just before the deleting node
        current = current.next;
        runner = runner.next;
    }
    
    current.next = current.next.next;
    return head;   
};

//本题逻辑不难，尤其是之前又知道快慢指针这个方法，所以很快就能写出来。但是一不小心就会弄出一个type error 访问到了 null.next 
//几个corner case要照顾到
//1. n为负数
//2. n比链表长度大
//3. runner跑到n的时候，已经跑到null了。也就是说，要删除的是头结点。
//4. 本题要在纸上先画一画，确定让runner停在什么位置的时候，current能刚好停在要删除的节点前面。