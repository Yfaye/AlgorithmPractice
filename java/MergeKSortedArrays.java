/*
Merge k Sorted Arrays  

Given k sorted integer arrays, merge them into one sorted array.

Example 

	Given 3 sorted arrays:
	[
	  [1, 3, 5, 7],
	  [2, 4, 6],
	  [0, 8, 9, 10, 11]
	]
return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].

Challenge 
	Do it in O(N log k).
	•N is the total number of integers.
	•k is the number of arrays.
Tags Heap Priority Queue 
*/
import java.util.PriorityQueue;
class Element {
	public int row, val, col;
	Element(int row, int col, int val){
		this.row = row;
		this.col = col;
		this.val = val;
	}
}


public class Solution {

	private Comparator<Element> TestComparator = new Comparator<Element>(){
		public int compare(Element left, Element right){
			return left.val - right.val;
		}
	};

    /**
     * @param arrays k sorted integer arrays
     * @return a sorted array
     */

    public int[] mergekSortedArrays(int[][] arrays) {
    	if (arrays == null) {
    		return new int[0];
    	}

    	Queue<Element> heap = new PriorityQueue<Element>(arrays.length, TestComparator);
    	int total_size = 0;

    	for (int i = 0; i < arrays.length; i++) {
    		if (arrays[i].length != 0) {
    			Element tmp = new Element(i,0,arrays[i][0]);
    			heap.add(tmp);
    			total_size += arrays[i].length;
    		}
    	}

    	int[] result = new int[total_size];
    	int index = 0;

    	while (!heap.isEmpty()) {
    		Elment tmp = heap.poll();
    		result[index++] = tmp.val;
    		if (tmp.col + 1 < arrays[tmp.row].length) {
    			tmp.col++;
    			tmp.val = arrays[tmp.row][tmp.col];
    			heap.add(tmp);
    		}
    	}

    	return result;
 
    }
}