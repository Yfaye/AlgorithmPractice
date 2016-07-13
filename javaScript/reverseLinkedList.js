/*
206. Reverse Linked List

Reverse a singly linked list.
click to show more hints.

Hint:
A linked list can be reversed either iteratively or recursively. Could you implement both?

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
var reverseList = function(head) {
    if (head === null || head.next === null) {
        return head;
    }
    
    var prev = null;
    var current = head;
    var temp = current.next;
    
    while (current!== null) {
        temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
    }
    
    return prev;
    
};

var reverseList = function(head) {
    //corner case
    if (head === null || head.next === null) {
        return head;
    }
    
    var reversedHead = null;
    
    while (head !== null) {
        var tmp = head.next;
        head.next = reversedHead;
        reversedHead = head;
        head = tmp;
    }
    
    return reversedHead;
};

// 这题还想着用尾插法，如果用尾插法，就是复制本linked list，而不是reverse了。
// 要reverse，要考虑用头插法，这样每读来的一个node，就头插在前面，都读完，然后自然就是最后读的插在了新链的最前头，reverse了