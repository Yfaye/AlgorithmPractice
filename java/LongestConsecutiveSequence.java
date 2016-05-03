/*LongestConsecutiveSequence.java  
Longest Consecutive Sequence  

Given an unsorted array of integers, find the length of the longest consecutive elements sequence. 

Example 

Given [100, 4, 200, 1, 3, 2],
The longest consecutive elements sequence is [1, 2, 3, 4]. Return its length: 4. 

Clarification Your algorithm should run in O(n) complexity. 
Tags Array 
*/
public class Solution {
    /**
     * @param nums: A list of integers
     * @return an integer
     */
    public int longestConsecutive(int[] num) {
        // write you code here
        if (num == null || num.length == 0) {
        	return 0;
        }

        HashMap<Integer, Integer> hs = new HashMap<Integer, Integer>();

        for (int i = 0; i < num.length; i++) {
        	hs.put(num[i],0);
        }

        int lcs_length = 1;

        for (int i : num) {
            if (hs.get(i) == 1) {
                continue;
            }

            int tmp = i;
            int current_lcs_length = 1;

            while (hs.containsKey(tmp + 1)) {
                current_lcs_length ++;
                tmp++;
                hs.put(tmp,1);
            }

            tmp = i;
            while (hs.containsKey(tmp - 1)) {
                current_lcs_length++;
                tmp--;
                hs.put(tmp,1);
            }

            lcs_length = Math.max(lcs_length, current_lcs_length);
        }

        return lcs_length;

    }
}