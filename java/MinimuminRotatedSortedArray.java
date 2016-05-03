/*MinimuminRotatedSortedArray.java 
Find Minimum in Rotated Sorted Array 
Suppose a sorted array is rotated at some pivot unknown to you beforehand.
(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

Find the minimum element.

Example 

Given [4, 5, 6, 7, 0, 1, 2] return 0

Note You may assume no duplicate exists in the array.
Tags Binary Search 
*/
import java.lang.Integer;
public class MinimuminRotatedSortedArray {
	 public int findMin(int[] A) {
	 	if (A == null || A.length == 0) {
	 		return -1;
	 	}

	 	int start = 0;
	 	int end = A.length - 1;
	 	int mini = Integer.MAX_VALUE;
	 	int miniIndex = -1;

	 	while (start + 1 < end) {
	 		int mid = start + (end - start) / 2;

	 		if (A[start] < A[mid]) { //Left of mid is sorted
	 			if (mini > A[start]) {
		 			mini = A[start];
		 			miniIndex = start; //If minium exits, it should be A[start]
	 			}
	 			start = mid;
	 		} else { // The left part of mid is unsorted, so it should contain the minimum
	 			end = mid;
	 		}
	 	}

	 	if (A[start] > A[end] && mini > A[end]) {
	 		mini = A[end];
	 		miniIndex = end;
	 	}
	 	if (A[end] > A[start] && mini > A[start]) {
	 		mini = A[start];
	 		miniIndex = start;
	 	}
	 	return mini;
	 }

	 public static void main (String[] args) {
	 	int[] test = {7,8,9,1,2,3,4,5,6};
	 	MinimuminRotatedSortedArray testOB = new MinimuminRotatedSortedArray();
	 	int result = testOB.findMin(test);
	 	System.out.println("Expected: 1");
	 	System.out.println(result);
	 }

}