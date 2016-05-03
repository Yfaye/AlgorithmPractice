/*RemoveNthFromEnd.java

Remove Nth Node From End of List  

Given a linked list, remove the nth node from the end of list and return its head.

Example 
	Given linked list: 1->2->3->4->5->null, and n = 2.

	After removing the second node from the end, the linked list becomes 1->2->3->5->null.
Note 
	The minimum number of nodes in list is n.


Challenge O(n) time
Tags Two Pointers Linked List 
*/

/**
 * Definition for ListNode.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int val) {
 *         this.val = val;
 *         this.next = null;
 *     }
 * }
 */ 
public class RemoveNthFromEnd {
    /**
     * @param head: The first node of linked list.
     * @param n: An integer.
     * @return: The head of linked list.
     */
    public static class ListNode {
       int val;
       ListNode next;
       ListNode(int val) {
           this.val = val;
           this.next = null;
       }
   	}
    public static ListNode removeNthFromEnd(ListNode head, int n) {
        // write your code here
        if (head == null || head.next == null || n <= 0) {
            return head;
        }

        ListNode dummy = new ListNode(0);
        dummy.next = head;
        ListNode preDelete = dummy;
        for (int i = 0; i < n - 1; i++){
            if (head.next != null) {
                head = head.next;
            } else {
                return head;
            }
        }

        while (head.next != null) {
            head = head.next;
            preDelete = preDelete.next;
        }

        preDelete.next = preDelete.next.next;

        return dummy.next;
    }
    public static void main(String[] args) {
        RemoveNthFromEnd test = new RemoveNthFromEnd();
        ListNode test1 = new ListNode(1);
        ListNode test2 = new ListNode(2);
        ListNode test3 = new ListNode(3);
        ListNode test4 = new ListNode(4);
        ListNode test5 = new ListNode(5);
        ListNode test6 = new ListNode(6);
        ListNode test7 = new ListNode(7);
        ListNode test8 = new ListNode(8);
        ListNode test9 = new ListNode(9);

        test1.next = test2;
        test2.next = test3;
        test3.next = test4;
        test4.next = test5;
        test5.next = test6;
        test6.next = test7;
        test7.next = test8;
        test8.next = test9;
        test9.next = null;
        ListNode result = test.removeNthFromEnd(test1, 2);
        System.out.println("Expected: 1 2 3 4 5 6 7 9");
        while (result != null) {
            System.out.print(result.val + " ");
            result = result.next;            
        }

    }
}

