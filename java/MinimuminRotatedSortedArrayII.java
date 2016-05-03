/*Find Minimum in Rotated Sorted Array II  

Suppose a sorted array is rotated at some pivot unknown to you beforehand.
(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

Find the minimum element. 
The array may contain duplicates.

 
Example 
Given [4,4,5,6,7,0,1,2] return 0

Tags Binary Search Divide and Conquer 
*/
import java.lang.Integer;
public class MinimuminRotatedSortedArrayII {
    /**
     * @param A: a rotated sorted array
     * @return: the minimum number in the array
     */
    public int findMin(int[] A) {
        // write your code here
        if (A == null || A.length == 0) {
        	return -1;
        }

        int start = 0;
        int end = A.length - 1;

        if (A[start] < A[end]) {
        	return A[start];
        }

        int mini = Integer.MAX_VALUE;
        int miniIndex = -1;

        while (start + 1 < end) {
        	int mid = start + (end - start) / 2;

        	if (A[start] < A[mid]) {   //Case 1: left part sorted       		
        		if (A[start] <= mini) {
        			mini = A[start];
        			miniIndex = start;
        		}
        		start = mid;
        	} else if (A[start] > A[mid]){ 	//Case 2: right part sorted	
        		end = mid;
        	} else if (A[start] == A[mid]) {
        		start++;
        	}
        }

        if (A[start] < mini) {
        	mini = A[start];
        	miniIndex = start;
        }
        if (A[end] < mini) {
        	mini = A[end];
        	miniIndex = end;
        }

        return mini;
    }
public static void main (String[] args) {
	int[] test = {1,1,-2,1};
	MinimuminRotatedSortedArrayII testOB = new MinimuminRotatedSortedArrayII();
	int result = testOB.findMin(test);
	System.out.println("Expected: -2");
	System.out.println(result);
}

}

