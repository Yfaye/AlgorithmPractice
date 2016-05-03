/*ReverseLinkedListII.java
Reverse Linked List II  

Reverse a linked list from position m to n.
 
Example 

Given 1->2->3->4->5->NULL, m = 2 and n = 4, return 1->4->3->2->5->NULL.

Note 

Given m, n satisfy the following condition: 1 <= m <= n <= length of list.

Challenge Reverse it in-place and in one-pass
Tags Linked List 
*/

public class ReverseLinkedListII {
    /**
     * @param ListNode head is the head of the linked list 
     * @oaram m and n
     * @return: The head of the reversed ListNode
     */
    public static class ListNode {
       int val;
       ListNode next;
       ListNode(int val) {
           this.val = val;
           this.next = null;
       }
   	}
    public ListNode reverseBetween(ListNode head, int m , int n) {
        // write your code
        if ( m >= n || head == null) {
        	return head;
        }

        ListNode dummy = new ListNode(0);
        dummy.next = head;
        head = dummy;

        for (int i = 1; i < m; i++) {
        	head = head.next;
        }

        ListNode preM = head;
        ListNode mNode = head.next;
        ListNode nNode = mNode;
        ListNode postN = mNode.next;

        for (int i = m; i < n; i++ ) {
        	ListNode tmp = postN.next;
        	postN.next = nNode;
        	nNode = postN;
        	postN = tmp;
        }
        mNode.next = postN;
        preM.next = nNode;

        return dummy.next;
    }
    public static void main(String[] args) {
        ReverseLinkedListII test = new ReverseLinkedListII();
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
        ListNode result = test.reverseBetween(test1, 4, 9);
        System.out.println("Expected: 1 2 3 9 8 7 6 5 4 ");
        while (result != null) {
            System.out.print(result.val + " ");
            result = result.next;            
        }

    }
}
