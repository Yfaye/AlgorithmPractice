/*SortList.java
Sort List  

Sort a linked list in O(n log n) time using constant space complexity.

Example 

Given 1-3->2->null, sort it to 1->2->3->null.

Tags Linked List 
*/
public class SortList {
    /**
     * @param head: The head of linked list.
     * @return: You should return the head of the sorted linked list,
     *               using constant space complexity.
     */
    public static class ListNode {
       int val;
       ListNode next;
       ListNode(int val) {
           this.val = val;
           this.next = null;
       }
   	}
    public static ListNode sortList(ListNode head) {  
        // write your code here
        if (head == null || head.next == null) {
            return head;
        }
        ListNode mid = findMid(head);
        //System.out.print(mid.val);
        ListNode right = sortList(mid.next);
        mid.next = null;
        ListNode left = sortList(head);
        ListNode result = merge(left,right);
        return result;
    }

    public static ListNode findMid(ListNode head) {
    	if (head == null || head.next == null) {
    		return head;
    	}
    	ListNode slow = head;
    	ListNode fast = head.next;
    	while (fast != null && fast.next != null) {
    		slow = slow.next;
    		fast = fast.next.next;
    	}
    	return slow;
    }

    public static ListNode merge(ListNode l1, ListNode l2) {
    	if (l1 == null) {
    		return l2;
    	}
    	if (l2 == null) {
    		return l1;
    	}

    	ListNode dummy = new ListNode(0);
    	ListNode cur = dummy;

    	while (l1 != null && l2 != null) {
    		if (l1.val < l2.val) {
    			cur.next = l1;
    			l1 = l1.next;
    		} else {
    			cur.next = l2;
    			l2 = l2.next;
    		}
    		cur = cur.next;
    	}

    	if (l1 != null) {
    		cur.next = l1;
    	} else {
    		cur.next = l2;
    	}

    	return dummy.next;
    }
    public static void main(String[] args) {
        SortList test = new SortList();
        ListNode test1 = new ListNode(1);
        ListNode test2 = new ListNode(3);                                  
        ListNode test3 = new ListNode(2);
        ListNode test4 = new ListNode(4);
        ListNode test5 = new ListNode(6);
        ListNode test6 = new ListNode(8);
        ListNode test7 = new ListNode(7);
        ListNode test8 = new ListNode(9);
        ListNode test9 = new ListNode(5);

        test1.next = test2;
        test2.next = test3;
        test3.next = test4;
        test4.next = test5;
        test5.next = test6;
        test6.next = test7;
        test7.next = test8;
        test8.next = test9;
        test9.next = null;
        ListNode result = test.sortList(test1);
        System.out.println("Expected: 1 2 3 4 5 6 7 8 9");
        while (result != null) {
            System.out.print(result.val + " ");
            result = result.next;            
        }
    }
}