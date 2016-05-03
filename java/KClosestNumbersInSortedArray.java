/*K Closest Numbers In Sorted Array  
Given a target number, a non-negative integer k and an integer array A sorted in ascending order, find the k closest numbers to target in A, sorted in ascending order by the difference between the number and target. Otherwise, sorted in ascending order by number if the difference is same.

Example 
Given A = [1, 2, 3], target = 2 and k = 3, return [2, 1, 3].
Given A = [1, 4, 6, 8], target = 3 and k = 3, return [4, 1, 6].

Challenge O(logn + k) time complexity.
Tags Binary Search Two Pointers
*/
import java.lang.Math;
import java.lang.Integer;

public class KClosestNumbersInSortedArray {
    /**
     * @param A an integer array
     * @param target an integer
     * @param k a non-negative integer
     * @return an integer array
     */
    public static int[] kClosestNumbers(int[] A, int target, int k) {
        // Write your code here
        int[] result = new int[k];
        if (A == null || A.length == 0 || k == 0) {
        	return result;
        }
        if (k > A.length) {
            return A;
        }

        int closestIndex = closestNumber(A, target);
//System.out.println(closestIndex);
        if (closestIndex == -1) {
        	return result;
        }
        result[0] = A[closestIndex];

        int leftIndex = closestIndex - 1;
        int rightIndex = closestIndex + 1;
        int count = 1;

        while(leftIndex >= 0 && rightIndex <= (A.length - 1) && count < k) {
            if (Math.abs(A[leftIndex]-target) < Math.abs(A[rightIndex] - target)) {
                result[count] = A[leftIndex];
                count++;
                leftIndex--;
            } else if (Math.abs(A[leftIndex]-target) > Math.abs(A[rightIndex] - target)) {
                result[count] = A[rightIndex];
                count++;
                rightIndex++;
            } else if (Math.abs(A[leftIndex]-target) == Math.abs(A[rightIndex] - target)) {
                result[count] = A[leftIndex];
                count++;
                leftIndex--;
                if (count < k) {
                    result[count] = A[rightIndex];
                    count++;
                    rightIndex++;
                }
            }      	
        }
//System.out.println(count);
        while (count < k && leftIndex >= 0) {
            result[count] = A[leftIndex];
            count++;
            leftIndex--;
        }

        while (count < k && rightIndex <= (A.length - 1)) {
            result[count] = A[rightIndex];
            count++;
            rightIndex++;
        }

        return result;

    }

    public static int closestNumber(int[] A, int target) {
    	if (A == null || A.length == 0) {
    		return -1;
    	} 

    	int start = 0;
    	int end = A.length - 1;
    	int minDiff = Integer.MAX_VALUE; 
    	int minDiffIndex = -1;

    	while (start + 1 < end) {
    		int mid = start + (end - start) / 2;
    		if (A[mid] == target) {
    			return mid;
    		} else if (A[mid] < target) {
    			if (minDiff > Math.abs(target - A[mid - 1])) {
    				minDiff = Math.abs(target - A[mid - 1]);
    				minDiffIndex = mid - 1;
    			}
    			start = mid;
    		} else if (A[mid] > target) {
    			if (minDiff > Math.abs(A[mid + 1] - target)) {
    				minDiff = Math.abs(A[mid + 1] - target);
    				minDiffIndex = mid + 1;
    			}
    			end = mid;
    		}
    	}
    	if (minDiff >= Math.abs(A[start] - target)) {
    		minDiff = Math.abs(A[start] - target);
    		minDiffIndex = start;
    	}
    	if (minDiff > Math.abs(A[end] - target)) {
    		minDiff = Math.abs(A[end] - target);
    		minDiffIndex = end;
    	}
    	return minDiffIndex;
    }

    public static void main(String[] args) {
        int[] test = {1,10,15,25,35,45,50,59};
        int target = 30;
        int k = 7;
        int testResult = closestNumber(test,target);
//System.out.println(testResult);
        int[] result = kClosestNumbers(test,target,k);

        for (int i = 0 ; i < result.length; i++) {
            System.out.print(result[i] + " ");
        }
        System.out.print("\n");
    }
}
