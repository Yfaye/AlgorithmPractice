/*Search in Rotated Sorted Array II  
Follow up for "Search in Rotated Sorted Array":
	What if duplicates are allowed?
	Would this affect the run-time complexity? How and why?
	Write a function to determine if a given target is in the array.

Tags Binary Search Sorted Array Array 
*/
public class SearchinRotatedSortedArrayII {
    /** 
     * param A : an integer ratated sorted array and duplicates are allowed
     * param target :  an integer to be search
     * return : a boolean 
     */
    public int search(int[] A, int target) {
        // write your code here
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
	        if (A[start] < A[mid]) { //Case 1: mid is on the left higher line
	        	while(A[mid] == A[mid + 1] && mid < A.length - 2) {
	        		mid++;
	        	}
	        	if (A[start] <= target && target <= A[mid]) {
	        		end = mid;
	        	} else {
	        		start = mid;
	        	}
	        } else { //Case 2: mid is on the right lower line
	        	while(A[mid] == A[mid + 1] && mid < A.length - 2) {
	        		mid++;
	        	}
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
    	int[] test = {12955,12960,12960,12960,12960,
    					12965,12965,12965,12965,12965,
    					12965,12970,12975,12975,12980,
    					12980,12984,12984,12984,12984,
    					12984,12984,12984,12984,12984,
    					12988,12988,12988,12988,12993,
    					12993,12993,12993,12993,12997,
    					13001,13006,13006,13006,13006,
    					13006,13006,13006,13006,13006,
    					13006,13006,13006,13006,13006,
    					13006,13006,13011,13011,13011,
    					13011,13011,13016,13016,13016,
    					13016,13020,13024,13024,13024,
    					13024,13024,13024,13028,13033,
    					13033,13033,13033,13038,13042,
    					13042,13042,13046,13046,13046,
    					13050,13050,13054,13054,13054,
    					13058,13062,13066,13070,13070,
    					13070,13070,13070,13070,13074,
    					13078,13078,13078,13078,13083,
    					13087,13087,13087,13087,13091,
    					13095,13095,13095,13095,13095,
    					13095,13099,13104,13109,13113,
    					13113,13113,13113,13117,13122,
    					13122,13122,13122,13126,13126,
    					13126,13126,13130,13130,13130,
    					13134,13134,13134,13134,13138,
    					13138,13138,13143,13143,13143,
    					13143,13143,13148,13148,13148,
    					13153,13153,13153,13153,13153,
    					13158,13158,13158,13158,13158,
    					13158,13158,13158,13158,13158,
    					13158,13163,13163,13168,13168,
    					13168,13168,13168,13168,13168,
    					13168,13168,13168,13173,13173,
    					13173,13178,13178,13178,13178,
    					13178,13178,13183,13188,13188,
    					13188,13193,13193,13193,13193,
    					13198,13203,13203,13203,13208,
    					13213,13217,13217,13217,13217,
    					13217,13217,13217,13222,13222,
    					13227,13227,13227,13227,13231,
    					13231,13231,13231,13231,13236,
    					13240,13240,13240,13240,13240,
    					13240,13240,13240,13240,13240,
    					13245,13245,13249,13249,13253,
    					13253,13257,13257,13257,13261};
    	int target = 25630;
    	SearchinRotatedSortedArrayII testOB = new SearchinRotatedSortedArrayII();
    	int result = testOB.search(test,target);
    	System.out.println("Expected: -1");
    	System.out.println(result);
    }

}