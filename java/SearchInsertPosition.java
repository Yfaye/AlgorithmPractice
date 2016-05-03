
/*Search Insert Position  
	Given a sorted array and a target value, return the index if the target is found. 
	If not, return the index where it would be if it were inserted in order.
	You may assume NO duplicates in the array.
 
	Example 
	[1,3,5,6], 5 -> 2
	[1,3,5,6], 2 -> 1
	[1,3,5,6], 7 -> 4
	[1,3,5,6], 0 -> 0

	Challenge O(log(n)) time
	Tags Binary Search Sorted Array Array
*/
/*Binary Search for: First item >= target*/
public class SearchInsertPosition {
    /** 
     * param A : an integer sorted array
     * param target :  an integer to be inserted
     * return : an integer
     */
    public static int searchInsert(int[] A, int target) {
		if (A == null || A.length == 0) {
			return 0;
		}

		int start = 0;
		int end = A.length - 1;

		while (start + 1 < end) {
			int mid = start + (end - start) / 2;
			if (A[mid] < target) {
				start = mid;
			} else {
				end = mid;
			}
		}

		if (A[start] >= target) {
			return start;
		} else if (A[end] >= target) {
			return end;
		}
		return A.length; //Get Error when return 0 while the target is supposed to put at the end
    }

    public static void main (String[] args) {
    	int[] test = {0,4,5,8,9,12,13};
    	int target = 14;
    	int result = searchInsert(test, target);
    	System.out.println("Test result should be: 7");
    	System.out.println(result);
    }
}
