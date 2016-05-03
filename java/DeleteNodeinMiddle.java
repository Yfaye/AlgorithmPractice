/*DeleteNodeinMiddle.java  
Delete Node in the Middle of Singly Linked List  

Implement an algorithm to delete a node in the middle of a singly linked list, given only access to that node.

Example 

Given 1->2->3->4, and node 3. return 1->2->4
Tags Cracking The Coding Interview Linked List 
*/

public class DeleteNodeinMiddle {
    /**
     * @param node: the node in the list should be deleted
     * @return: nothing
     */
    public static class ListNode {
       int val;
       ListNode next;
       ListNode(int val) {
           this.val = val;
           this.next = null;
       }
   	}
    public static void deleteNode(ListNode node) {
        // write your code here
        ListNode temp = node.next;
        node.val = node.next.val;
        node.next = temp.next;
    }
    public static void main(String[] args) {
        DeleteNodeinMiddle test = new DeleteNodeinMiddle();
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
        test.deleteNode(test7);
        System.out.println("Expected: 1 2 3 4 5 6 8 9");
        ListNode result = test1;
        while (result != null) {
            System.out.print(result.val + " ");
            result = result.next;            
        }

    }
}