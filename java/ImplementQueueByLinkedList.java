/*Implement Queue by Linked List  
Implement a Queue by linked list. Support the following basic methods:
	1.enqueue(item). Put a new item in the queue.
	2.dequeue(). Move the first item out of the queue, return it.

 
Example 
enqueue(1)
enqueue(2)
enqueue(3)
dequeue() // return 1
enqueue(4)
dequeue() // return 2

Tags  Expand    
Linked List Queue 

*/

class ListNode {
    int val;
    ListNode next;
    ListNode(int val) {
        this.val = val;
        this.next = null;
    }
}

public class Queue {
    private ListNode head = null;
    private ListNode tail = null;
    
    public Queue() {
        tail = head;
    }

    public void enqueue(int item) {
        ListNode i = new ListNode(item);
        if (head == null) {
            head = tail = i;
        } else {
            tail = tail.next = i;
        }
    }
        
    public int dequeue() {
        if (head == null) {
            throw new java.util.NoSuchElementException();
        }
        if (head != null && head == tail) {
            ListNode tmp = head;
            head = head.next;
            tail = head;
            tmp.next = null;
            return tmp.val;
        } else {
            ListNode tmp = head;
            head = head.next;
            tmp.next = null;
            return tmp.val;
        }
    }
}