/*Search in Rotated Sorted Array  
Suppose a sorted array is rotated at some pivot unknown to you beforehand.
(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).
You are given a target value to search. If found in the array return its index, otherwise return -1.
You may assume no duplicate exists in the array.

	Example 
	For [4, 5, 1, 2, 3] and target=1, return 2.
	For [4, 5, 1, 2, 3] and target=0, return -1.

Challenge O(logN) time
Tags Binary Search Sorted Array  LinkedIn Array  Facebook  Uber 
*/

public class SearchinRotatedSortedArray {
    public int search(int[] A, int target) {
    	if (A == null || A.length == 0) {
    		return -1;
    	}

    	int start = 0;
    	int end = A.length - 1;

    	while (start + 1 < end) {
    		int mid = start + (end - start) / 2;
    		if (A[mid] == target) {
    			return mid;
    		}     		
    		if (A[start] < A[mid]) { // Case 1: mid is on the left higher line
    			if (A[start] <= target && target <= A[mid]) {
    				end = mid;
    			} else {
    				start = mid;
    			}
    		} else { //Case 2: mid is on the right lower line
    			if (A[end] >= target && target >= A[mid]) {
    				start = mid;
    			} else {
    				end = mid;
    			}
    		}
    	}

    	if (A[start] == target) {
    		return start;
    	} else if (A[end] == target) {
    		return end;
    	} else {
    		return -1;
    	}
    }

    public static void main (String[] args) {
    	int[] test = {1,2,3,4,5,9};
    	int target = 9;
    	SearchinRotatedSortedArray testOB = new SearchinRotatedSortedArray();
    	int result = testOB.search(test, target);
    	System.out.println(result);
    }
}