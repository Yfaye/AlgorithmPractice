/*MergekSortedLists.java  
Merge k Sorted Lists  

Merge k sorted linked lists and return it as one sorted list.

Analyze and describe its complexity.

 
Example 

Given lists:
[
  2->4->null,
  null,
  -1->null
],


return -1->2->4->null.
Tags Divide and Conquer Linked List Priority Queue Heap  Uber  Google  Twitter  LinkedIn  Airbnb  Facebook 
*/
import java.util.PriorityQueue;
import java.util.ArrayList;
import java.util.Comparator;
class ListNode {
       int val;
       ListNode next;
       ListNode(int val) {
           this.val = val;
           this.next = null;
    }
}

public class MergekSortedLists {
    /**
     * @param lists: a list of ListNode
     * @return: The head of one sorted list.
     */
        private Comparator<ListNode> NodeComparator = new Comparator<ListNode>(){
            public int compare (ListNode prev, ListNode cur) {
                return prev.val - cur.val;
            }
        };

    public ListNode mergeKLists(List<ListNode> lists) {  
        // write your code here
        if (lists == null || lists.size() == 0){
            return null;
        }

        Queue<ListNode> heap = new PriorityQueue<ListNode>(lists.size(), NodeComparator);

        for (int i = 0; i < lists.size(); i++) {
            if (lists.get(i) != null) {
                heap.add(lists.get(i));
            }          
        }

        ListNode dummy = new ListNode(0);
        ListNode head = dummy;

        while (!heap.isEmpty()) {
            ListNode tmp = heap.poll();
            head.next = tmp;
            head = head.next;
            if (tmp.next != null) {
                heap.add(tmp.next);
            }            
        }
        return dummy.next;
  }
  
    public static void main(String[] args) {
        MergekSortedLists test = new MergekSortedLists();
        //List One
        ListNode test1 = new ListNode(0);
        ListNode test2 = new ListNode(3);                                  
        ListNode test3 = new ListNode(6);
        ListNode test4 = new ListNode(9);
        ListNode test5 = new ListNode(12);
        ListNode test6 = new ListNode(15);
        ListNode test7 = new ListNode(18);
        ListNode test8 = new ListNode(21);
        ListNode test9 = new ListNode(24);

        test1.next = test2;
        test2.next = test3;
        test3.next = test4;
        test4.next = test5;
        test5.next = test6;
        test6.next = test7;
        test7.next = test8;
        test8.next = test9;
        test9.next = null;


        //List Two
        ListNode test11 = new ListNode(1);
        ListNode test12 = new ListNode(4);
        ListNode test13 = new ListNode(7);                                  
        ListNode test14 = new ListNode(10);
        ListNode test15 = new ListNode(13);
        ListNode test16 = new ListNode(16);
        ListNode test17 = new ListNode(19);
        ListNode test18 = new ListNode(22);
        ListNode test19 = new ListNode(25);


        test11.next = test12;
        test12.next = test13;
        test13.next = test14;
        test14.next = test15;
        test15.next = test16;
        test16.next = test17;
        test17.next = test18;
        test18.next = test19;
        test19.next = null;

        //List Three
        ListNode test21 = new ListNode(2);
        ListNode test22 = new ListNode(5);                                  
        ListNode test23 = new ListNode(8);
        ListNode test24 = new ListNode(11);
        ListNode test25 = new ListNode(14);
        ListNode test26 = new ListNode(17);
        ListNode test27 = new ListNode(20);
        ListNode test28 = new ListNode(23);
        ListNode test29 = new ListNode(26);

        test21.next = test22;
        test22.next = test23;
        test23.next = test24;
        test24.next = test25;
        test25.next = test26;
        test26.next = test27;
        test27.next = test28;
        test28.next = test29;
        test29.next = null;
        
        //List<ListNode>
        List<ListNode> lists = new ArrayList<ListNode>();
        lists.add(test1);
        lists.add(test2);
        lists.add(test3);
        ListNode result = test.mergeKLists(lists);
        System.out.println("Expected: 1 2 3 ... 26");
        while (result.next != null) {
            System.out.println(result.val);
        }
    }
}
