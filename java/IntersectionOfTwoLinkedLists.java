/**
 * LeetCode 160
 * https://leetcode.com/problems/intersection-of-two-linked-lists
 */

 /**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        // finding the tail of list A
        ListNode p = headA;
        while (p != null && p.next != null) {
            p = p.next;
        }
        
        // connecting tail of list A to head of list B
        p.next = headB;
        
        ListNode slow = headA;
        ListNode fast = headA;
        
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            
            if (slow == fast) {
                break;
            }
        }
        
        // no cycle
        if (fast == null || fast.next == null) {
            // unlink List A and List B
            p.next = null;
            return null;
        }
        
        // slow and fast meet at beginning of cycle
        slow = headA;
        while (slow != fast) {
            slow = slow.next;
            fast = fast.next;
        }
        
        // unlink List A and List B
        p.next = null;        
        
        return slow;
    }
}