/*LinkedListCycleII.java  

Linked List Cycle II  

Given a linked list, return the node where the cycle begins. 

If there is no cycle, return null.

 
Example 

Given -21->10->4->5, tail connects to node index 1，return 10

Challenge 

Follow up:

Can you solve it without using extra space?
Tags  Expand    
Two Pointers Linked List 
*/
public class LinkedListCycleII {
    /**
     * @param head: The first node of linked list.
     * @return: The node where the cycle begins. 
     *           if there is no cycle, return null
     */
    public static class ListNode {
       int val;
       ListNode next;
       ListNode(int val) {
           this.val = val;
           this.next = null;
       }
   	}
    public ListNode detectCycle(ListNode head) { 
        // write your code here
        if (head == null || head.next == null) {
        	return null;
        }

        ListNode slow = head;
        ListNode fast = head.next;

        while (slow != fast) {
        	if (fast == null || fast.next == null) {
        		return null;
        	}
        	fast = fast.next.next;
        	slow = slow.next;

        }
        slow = head;
        while (slow != fast.next) {
        	slow = slow.next;
        	fast = fast.next;
        }
        return slow;
    }
    public static void main(String[] args) {
        LinkedListCycleII test = new LinkedListCycleII();
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
        test9.next = test3;
        
        ListNode result = test.detectCycle(test1);
        System.out.println("Expected: 3");
        System.out.println(result.val);
    }
}