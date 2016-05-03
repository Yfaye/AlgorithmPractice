/*NthToLast.java
Nth to Last Node in List  
Find the nth to last element of a singly linked list. 
The minimum number of nodes in list is n.

Example 
Given a List  3->2->1->5->null and n = 2, return node  whose value is 1.
Tags Cracking The Coding Interview Linked List 
*/
public class NthToLast {
    /**
     * @param head: The first node of linked list.
     * @param n: An integer.
     * @return: Nth to last node of a singly linked list. 
     */
    ListNode nthToLast(ListNode head, int n) {
        // write your code here
        if (head == null || head.next == null || n <= 0) {
            return head;
        }
        
        ListNode slow = head;
        ListNode fast = head.next;
        
        for (int i = 0; i < n - 1; i++) {
            fast = fast.next;
        }
        
        while (fast != null) {
            slow = slow.next;
            fast = fast.next;
        }
        
        return slow;        
    }
}