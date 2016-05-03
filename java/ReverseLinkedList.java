/*ReverseLinkedList.java  
Reverse Linked List  

Reverse a linked list.

Example 

For linked list 1->2->3, the reversed linked list is 3->2->1

Challenge Reverse it in-place and in one-pass
Tags Linked List  Facebook  Uber 
*/
public class ReverseLinkedList {
    /**
     * @param head: The head of linked list.
     * @return: The new head of reversed linked list.
     */
    public static class ListNode {
       int val;
       ListNode next;
       ListNode(int val) {
           this.val = val;
           this.next = null;
       }
   	}
    public static ListNode reverse(ListNode head) {
        // write your code here
        ListNode pre = null;

        while (head != null) {
        	ListNode tmp = head.next;
        	head.next = pre;
        	pre = head;
        	head = tmp;
        }
        return pre;
    }
    public static void main(String[] args) {
        ReverseLinkedList test = new ReverseLinkedList();
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
        ListNode result = test.reverse(test1);
        System.out.println("Expected: 9 8 7 6 5 4 3 2 1");
        while (result != null) {
            System.out.print(result.val + " ");
            result = result.next;            
        }

    }
}
