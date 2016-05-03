/*Last Position of Target  
Find the last position of a target number in a sorted array. Return -1 if target does not exist.

Example 
Given [1, 2, 2, 4, 5, 5].
For target = 2, return 2.
For target = 5, return 5.
For target = 6, return -1.
Tags Binary Search 
*/

public class LastPositionofTarget {
    /**
     * @param A an integer array sorted in ascending order
     * @param target an integer
     * @return an integer
     */
    public static int lastPosition(int[] A, int target) {
        // Write your code here
        if (A == null || A.length == 0) {
        	return -1;
        }

        int start = 0;
        int end = A.length - 1;

        while (start + 1 < end) {
        	int mid = start + (end - start) / 2;
        	if (A[mid] <= target) {
        		start = mid;
        	} else if (A[mid] > target) {
        		end = mid;
        	}
        }

        if (A[end] == target ) {
        	return end;
        } else if (A[start] == target) {
        	return start;
        }

        return -1;
    }

    public static void main (String[] args) {
    	int[] test = {0,1,4,6,6,6,6,6,16,18,19,20,20,20};
    	int target = 20;
    	int result = lastPosition(test, target);
    	System.out.println("Test result should be 13");
    	System.out.println(result);
    }


}