/*DistinctSubsequences.java
Distinct Subsequences  
Given a string S and a string T, count the number of distinct subsequences of T in S.
A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ACE" is a subsequence of "ABCDE" while "AEC" is not).
 
Example 
Given S = "rabbbit", T = "rabbit", return 3.

Challenge Do it in O(n2) time and O(n) memory. O(n2) memory is also acceptable if you do not know how to optimize memory.

Tags String Dynamic Programming 
*/
public class DistinctSubsequences {
    /**
     * @param S, T: Two string.
     * @return: Count the number of distinct subsequences
     */
    public int numDistinct(String S, String T) {
        // write your code here
        if (S == null || S.length() == 0 || T == null || T.length() == 0) {
        	return 0;
        }

        int[][] numDistinct = new int[S.length() + 1][T.length() + 1];

        for (int i = 0; i <= S.length(); i++) {
        	numDistinct[i][0] = 1;
        }

        for (int i = 1; i <= S.length(); i++) {
        	for (int j = 1; j <= T.length(); j++) {
        		numDistinct[i][j] = numDistinct[i - 1][j];
        		if (S.charAt(i - 1) == T.charAt(j - 1)) {
        			numDistinct[i][j] += numDistinct[i - 1][j - 1];
        		}
        	}
        }
        return numDistinct[S.length()][T.length()];
    }
    public static void main(String[] args) {
        DistinctSubsequences test = new  DistinctSubsequences();
        int result = test.numDistinct("abballl","abbal");
        System.out.println("Expected: 3");
        System.out.println(result);
    }
}