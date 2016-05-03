/*SwapNodesinPairs.java 
Swap Nodes in Pairs  

Given a linked list, swap every two adjacent nodes and return its head.

Example 

Given 1->2->3->4, you should return the list as 2->1->4->3.

Challenge 
Your algorithm should use only constant space. You may not modify the values in the list, only nodes itself can be changed.

Tags Linked List 
*/
public class SwapNodesinPairs {
    /**
     * @param head a ListNode
     * @return a ListNode
     */
    public static class ListNode {
       int val;
       ListNode next;
       ListNode(int val) {
           this.val = val;
           this.next = null;
       }
   	}
    public static ListNode swapPairs(ListNode head) {

    	ListNode dummy = new ListNode(0);
    	dummy.next = head;
    	head = dummy;

    	while(head.next != null && head.next.next != null) {
    		ListNode n1 = head.next;
    		ListNode n2 = head.next.next;
    		head.next = n2;
    		n1.next = n2.next;
    		n2.next = n1;
    		head = n1;
    	}

    	return dummy.next;


	}
    public static void main(String[] args) {
        SwapNodesinPairs test = new SwapNodesinPairs();
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
        ListNode result = test.swapPairs(test1);
        System.out.println("Expected: 2 1 4 3 6 5 8 7 9");
        while (result != null) {
            System.out.print(result.val + " ");
            result = result.next;            
        }

    }
}