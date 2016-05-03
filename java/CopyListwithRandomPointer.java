/*CopyListwithRandomPointer.java
Copy List with Random Pointer  

A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

Return a deep copy of the list.


Challenge Could you solve it with O(1) space?
Tags Hash Table Linked List  Uber
*/

public class CopyListwithRandomPointer {
    /**
     * @param head: The head of linked list with a random pointer.
     * @return: A new head of a deep copy of the list.
     */
 	private static class RandomListNode {
 	    int label;
 	    RandomListNode next, random;
 	    RandomListNode(int x) { this.label = x; }
 	};
    public RandomListNode copyRandomList(RandomListNode head) {
        // write your code here
        if (head == null) {
        	return head;
        }
        copyNext(head);
        copyRandom(head);
        return split(head);
    }
    private void copyNext(RandomListNode head) {
    	RandomListNode newHead = head;
    	while (head != null && head.next != null) {
    		newHead.next = head.next;
    		head.next = newHead;
    		head = newHead.next;
    		newHead = head;
    	}
    	if (head != null) {
		newHead.next = head.next;
		head.next = newHead;
		}
    }

    private void copyRandom(RandomListNode head) {
    	while (head != null && head.next != null) {
    		head.next.random = head.random;
    		head = head.next.next;
    	}
    }

    private RandomListNode split(RandomListNode head) {
    	RandomListNode originList = head;
    	RandomListNode copiedList = head.next;
    	RandomListNode dummyOrigin = new RandomListNode(0);
    	RandomListNode dummyCopied = new RandomListNode(0);
    	dummyOrigin.next = originList;
    	dummyCopied.next = copiedList;
    	while (head != null && head.next != null) {
    		RandomListNode tmp = copiedList.next;
    		originList.next = tmp;
    		copiedList.next = tmp.next;
    		originList = originList.next;
    		copiedList = copiedList.next;
    	}
    	return dummyCopied.next;

    }
}

/*Wrong Answer 
 



Total Runtime: 137 ms 

0% test cases passed. 

Input 


-1->null, [null]


Output 
Node with label -1 was not copied but a reference to the original one.

Expected 


-1->null, [null]

+-+
*/