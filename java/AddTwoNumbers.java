/*AddTwoNumbers.java
Add Two Numbers  

You have two numbers represented by a linked list, where each node contains a single digit. The digits are stored in reverse order, such that the 1's digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list.

Example 

Given 7->1->6 + 5->9->2. That is, 617 + 295.

Return 2->1->9. That is 912.

Given 3->1->5 and 5->9->2, return 8->0->8.

Tags Cracking The Coding Interview Linked List High Precision 
*/
public class AddTwoNumbers {
    /**
     * @param l1: the first list
     * @param l2: the second list
     * @return: the sum list of l1 and l2 
     */
    public ListNode addLists(ListNode l1, ListNode l2) {
        // write your code here
        int digit = 0;
        ListNode dummy = new ListNode(0);
        ListNode head = dummy;

        while (l1 != null && l2 != null) {
        	int val = l1.val + l2.val + digit;
        	digit = val / 10;
        	ListNode node = new ListNode(val % 10);
        	node.next = head.next;
        	head.next = node;
        	l1 = l1.next;
        	l2 = l2.next;
        	head = head.next;
        }

        //Missing Condition before AC
        if (l1 == null & l2 == null && digit > 0) {
            ListNode digitNode = new ListNode(digit);
            head.next = digitNode;
        }

        if (l1 != null) {
        	head.next = l1;
        	while (digit > 0) {
        		l1.val = (l1.val + digit) % 10;
        		digit = (l1.val + digit) / 10;
        		l1 = l1.next;
        	}
        }

        if (l2 != null) {
        	head.next = l2;
        	while (digit > 0) {
        		l2.val = (l2.val + digit) % 10;
        		digit = (l2.val + digit) / 10;
        		l2 = l2.next;
        	}
        }
        
        

        return dummy.next;
    }
}
