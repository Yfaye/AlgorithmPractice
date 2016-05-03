/*Total Occurrence of Target  
Given a target number and an integer array sorted in ascending order.
Find the total number of occurrences of target in the array.
 
	Example 
	Given [1, 3, 3, 4, 5] and target = 3, return 2.
	Given [2, 2, 3, 4, 6] and target = 4, return 1.
	Given [1, 2, 3, 4, 5] and target = 6, return 0.
Challenge Time complexity in O(logn)
Tags Binary Search 
*/

public class TotalOccurrenceofTarget {
    /**
     * @param A an integer array sorted in ascending order
     * @param target an integer
     * @return an integer
     */
    public static int totalOccurrence(int[] A, int target) {
        // Write your code here
        if (A == null || A.length == 0) {
        	return 0;
        }

        int start = 0;
        int end = A.length - 1;
        int firstOccurenceIndex;
        int lastOccurenceIndex;
        //Binary Search for first occurence index
        while (start + 1 < end) {
        	int mid = start + (end - start) / 2;
        	if (A[mid] >= target) {
        		end = mid;
        	} else if (A[mid] < target) {
        		start = mid;
        	}
        }

        if (A[start] == target) {
        	firstOccurenceIndex = start;
        } else if (A[end] == target) {
        	firstOccurenceIndex = end;
        } else {
        	firstOccurenceIndex = 0;
        }

        //Binary Search for last occurence index
        int start2 = 0;
        int end2 = A.length - 1;
        while (start2 + 1 < end2) {
        	int mid2 = start2 + (end2 - start2) / 2;
        	if (A[mid2] <= target) {
        		start2 = mid2;
        	} else if (A[mid2] > target) {
        		end2 = mid2;
        	}
        }

        if (A[end2] == target) {
        	lastOccurenceIndex = end2;
        } else if (A[start2] == target) {
        	lastOccurenceIndex = start2;
        } else {
        	lastOccurenceIndex = 0;
        }
        
        if (firstOccurenceIndex == 0 && lastOccurenceIndex == 0) {
            return 0;
        } else {
            return (lastOccurenceIndex - firstOccurenceIndex + 1);
        }
    }

    public static void main (String[] args) {
        int[] test = {1,1,1,1,1,1,1,1,1};
        int target = 1;
        int result = totalOccurrence(test, 1);
        System.out.println("Test Result should be: 9");
        System.out.println(result);
    }
}
