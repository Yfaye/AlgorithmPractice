/*Closest Number in Sorted Array  
Given a target number and an integer array A sorted in ascending order, 
find the index i in A such that A[i] is closest to the given target.
Return -1 if there is no element in the array.

 
	Example 
	Given [1, 2, 3] and target = 2, return 1.
	Given [1, 4, 6] and target = 3, return 1.
	Given [1, 4, 6] and target = 5, return 1 or 2.
	Given [1, 3, 3, 4] and target = 2, return 0 or 1 or 2.

Note There can be duplicate elements in the array, and we can return any of the indices with same value.

Challenge O(logn) time complexity.
Tags Binary Search 
*/

public class ClosestNumberinSortedArray {
    /**
     * @param A an integer array sorted in ascending order
     * @param target an integer
     * @return an integer
     */
    public static int closestNumber(int[] A, int target) {
        // Write your code here
        if (A == null || A.length == 0) {
        	return -1;
        }

        int start = 0;
        int end = A.length - 1;
        int minDiff = java.lang.Integer.MAX_VALUE;
        int minDiffIndex = -1;

        while (start + 1 < end) {
        	int mid = start + (end - start) / 2;

        	if (A[mid] == target) {
        		return mid;
        	} else if (A[mid] < target) {
        		if (minDiff >= java.lang.Math.abs(target - A[mid + 1])) {
        			minDiff = java.lang.Math.abs(target - A[mid + 1]);
        			minDiffIndex = mid + 1;
        		}     		
        		start = mid;
        	} else if (A[mid] > target) {
        		if (minDiff >= java.lang.Math.abs(A[mid - 1] - target)) {
        			minDiff = java.lang.Math.abs(A[mid - 1] - target);
        			minDiffIndex = mid - 1;
        		}
        		end = mid;
        	}
      	 }
      	//System.out.println("minDiff before end is: " + minDiff);
      	//System.out.println("minDiffIndex before end is: " + minDiffIndex);
	    if (minDiff >= java.lang.Math.abs(A[start] - target)) {
	        minDiff = java.lang.Math.abs(target - A[start]);
	        minDiffIndex = start;
	    }
	    if (minDiff > java.lang.Math.abs(A[end] - target)) {
	        minDiffIndex =  end;
	    }
	    //System.out.println("Start points to: " + start);
	    //System.out.println("End points to: " + end);
	    //System.out.println("minDiff is: " + minDiff);
      //System.out.println("minDiffIndex is: " + minDiffIndex);
	    return minDiffIndex;

    }
   	public static void main (String[] args) {
   		int[] test = {1,4,6,8};
   		int target = 3;
   		int result = closestNumber(test, target);
   		System.out.println("Test result is supposed to be: 1");
   		System.out.println(result);
   	}
}
