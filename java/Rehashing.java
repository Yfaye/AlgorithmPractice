/*Rehashing.java
Rehashing  

The size of the hash table is not determinate at the very beginning. If the total size of keys is too large (e.g. size >= capacity / 10), we should double the size of the hash table and rehash every keys. Say you have a hash table looks like below:

size=3, capacity=4
[null, 21, 14, null]
       ↓    ↓
       9   null
       ↓
      null


The hash function is:
int hashcode(int key, int capacity) {
    return key % capacity;
}


here we have three numbers, 9, 14 and 21, where 21 and 9 share the same position as they all have the same hashcode 1 (21 % 4 = 9 % 4 = 1). We store them in the hash table by linked list.

rehashing this hash table, double the capacity, you will get:

size=3, capacity=8
index:   0    1    2    3     4    5    6   7
hash : [null, 9, null, null, null, 21, 14, null]


Given the original hash table, return the new hash table after rehashing .
 
Example 

Given [null, 21->9->null, 14->null, null],

return [null, 9->null, null, null, null, 21->null, 14->null, null]

Note 

For negative integer in hash table, the position can be calculated as follow:
•C++/Java: if you directly calculate -4 % 3 you will get -1. You can use function: a % b = (a % b + b) % b to make it is a non negative integer.
•Python: you can directly use -1 % 3, you will get 2 automatically.
Tags LintCode Copyright Hash Table 
*/
/**
 * Definition for ListNode
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    /**
     * @param hashTable: A list of The first node of linked list
     * @return: A list of The first node of linked list which have twice size
     */    
    public ListNode[] rehashing(ListNode[] hashTable) {
        // write your code here
        if (hashTable == null || hashTable.length == 0) {
        	return hashTable;
        }

        int initialSize = hashTable.length;
        int size = initialSize * 2;

        ListNode[] rehashed = new ListNode[size];

        for (int i = 0; i < initialSize; i++) {
    		ListNode temp = hashTable[i];
    		while (temp != null) {
        		int newPos = (temp.val % size + size) % size;
	        	ListNode rehash = rehashed[newPos];
        		if ( rehash == null) {
        			rehashed[newPos] = new ListNode(temp.val);
        		} else { 
    				while (rehash.next != null) {
    					rehash = rehash.next;        					
    				}
    				rehash.next = new ListNode(temp.val);			
        		}
        		temp = temp.next;
			}
        }

        return rehashed;

    }
}

/* Solved Wrong Case One: 93 got lost

Input 


[80->null,null,null,null,null,null,null,187->null,null,49->109->null,10->50->-10->null,null,12->null,53->133->153->93->null,null,15->null,36->null,-3->null,118->null,159->139->null]

Output 
[80->null,null,null,null,null,null,null,null,null,49->null,10->50->null,null,12->null,53->133->null,null,15->null,null,null,null,139->null,null,null,null,null,null,null,null,187->null,null,109->null,-10->null,null,null,153->null,null,null,36->null,-3->null,118->null,159->null]

Expected 
[80->null,null,null,null,null,null,null,null,null,49->null,10->50->null,null,12->null,53->133->93->null,null,15->null,null,null,null,139->null,null,null,null,null,null,null,null,187->null,null,109->null,-10->null,null,null,153->null,null,null,36->null,-3->null,118->null,159->null]

*/