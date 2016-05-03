/*
MiddleofLinkedList.java
Middle of Linked List
Find the middle node of a linked list.
Example 
	Given 1->2->3, return the node with value 2.
	Given 1->2, return the node with value 1.
Tags Linked List 
*/

public class MiddleofLinkedList {
	//Definition for ListNode
	 public static class ListNode {
	      int val;
	      ListNode next;
	      ListNode(int x) {
	        val = x;
	        next = null;
	      }
	  }
 
    /**
     * @param head: the head of linked list.
     * @return: a middle node of the linked list
     */
    public static ListNode middleNode(ListNode head) { 
        // Write your code here
        if (head == null || head.next == null) {
            return head;
        }
        
        ListNode slow = head;
        ListNode fast = head.next;
        
        while (fast != null && fast.next != null) {
            fast = fast.next.next;
            slow = slow.next;
        }
        
        return slow;
    }

    public static void main(String[] args) {
    	MiddleofLinkedList test = new MiddleofLinkedList();
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
    	ListNode result = test.middleNode(test1);
    	System.out.println("Expected: 5");
    	System.out.println(result.val);
    }
}