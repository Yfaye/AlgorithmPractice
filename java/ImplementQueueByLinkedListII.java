/*Implement Queue by Linked List II  

Implement a Queue by linked list. Provide the following basic methods:
1.push_front(item). Add a new item to the front of queue.
2.push_back(item). Add a new item to the back of the queue.
3.pop_front(). Move the first item out of the queue, return it.
4.pop_back(). Move the last item out of the queue, return it.

Example 
push_front(1)
push_back(2)
pop_back() // return 2
pop_back() // return 1
push_back(3)
push_back(4)
pop_front() // return 3
pop_front() // return 4

Tags Linked List Queue 
*/


class ListNode {
    int val;
    ListNode next;
    ListNode prev;
    ListNode(int val) {
        this.val = val;
        next = null;
        prev = null;
    }
}
    

public class Dequeue {
    private ListNode head = null;
    private ListNode tail = null;
    
    public Dequeue() {
        // do initialize if necessary
        head = tail = null;
    }

    public void push_front(int item) {
        ListNode node = new ListNode(item);
        // Write your code here
        if (head == null) {
            head = tail = node;
        } else {
        	head.prev = node;
        	node.next = head;
        	head = node;
        }
    }

    public void push_back(int item) {
        // Write your code here
        ListNode node = new ListNode(item);
        if (tail == null) {
            head = tail = node;
        } else {
            tail.next = node;
        	node.prev = tail;
            tail = node;
        }
    }

    public int pop_front() {
        ListNode tmp = head;
        if (head == null) {
            throw new java.util.NoSuchElementException();
        } else if (head == tail) {
            tail = head = head.next;
            return tmp.val;
        } else {
            head = head.next;
            head.prev = tmp.prev;
            return tmp.val;
        }
    }

    public int pop_back() {
        ListNode tmp = tail;
        if (tail == null) {
            throw new java.util.NoSuchElementException();
        } else if (head == tail) {
            head = tail = tail.next;
            return tmp.val;
        } else {
            tail.prev.next = tail.next;
            tail = tail.prev;
            return tmp.val;
        }
    }
}