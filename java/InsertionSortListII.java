/*InsertionSortList.java  
Insertion Sort List  

Sort a linked list using insertion sort.
 
Example 

Given 1->3->2->0->null, return 0->1->2->3->null.
Tags  Sort Linked List 
*/

public class InsertionSortListII {
    /**
     * @param head: The first node of linked list.
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
    public static ListNode insertionSortList(ListNode head) {
        // write your code here
        ListNode dummy = new ListNode(0);

        while (head != null) {
            ListNode node = dummy;
            while (node.next != null && node.next.val < head.val) {
                node = node.next;
            }
            ListNode temp = head.next;
            head.next = node.next;
            node.next = head;
            head = temp;
            System.out.print("dummyNext after swap: " + dummy.next.val  + " ");
        }

        return dummy.next;

    }
    public static void main(String[] args) {
        InsertionSortListII test = new InsertionSortListII();
        ListNode test1 = new ListNode(9);
        ListNode test2 = new ListNode(8);                                  
        ListNode test3 = new ListNode(7);
        ListNode test4 = new ListNode(6);
        ListNode test5 = new ListNode(5);
        ListNode test6 = new ListNode(4);
        ListNode test7 = new ListNode(3);
        ListNode test8 = new ListNode(2);
        ListNode test9 = new ListNode(1);

        test1.next = test2;
        test2.next = test3;
        test3.next = test4;
        test4.next = test5;
        test5.next = test6;
        test6.next = test7;
        test7.next = test8;
        test8.next = test9;
        test9.next = null;
        ListNode result = test.insertionSortList(test1);
        System.out.println("Expected: 1 2 3 4 5 6 7 8 9");
        while (result != null) {
            System.out.print(result.val + " ");
            result = result.next;            
        }

    }
}
