/*AddTwoNumbersII.java  
Add Two Numbers II  

You have two numbers represented by a linked list, where each node contains a single digit. The digits are stored in forward order, such that the 1's digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list.

Example 

Given 6->1->7 + 2->9->5. That is, 617 + 295.

Return 9->1->2. That is, 912.
Tags Linked List High Precision
*/

public class AddTwoNumbersII {
    /**
     * @param l1: the first list
     * @param l2: the second list
     * @return: the sum list of l1 and l2 
     */
    public ListNode addLists2(ListNode l1, ListNode l2) {
        // write your code here

    }

    public ListNode reverse(ListNode head) {

    	ListNode dummy = new ListNode(0);
    	ListNode node = dummy;
    	while (head != null) {
     	    ListNode tmp = head.next;
     	    dummy.next = head;
     	    head = tmp;
    	}
    	node.next = null;
    }  
}