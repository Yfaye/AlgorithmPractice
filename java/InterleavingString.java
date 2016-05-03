/*InterleavingString.java  
Interleaving String  

Given three strings: s1, s2, s3, determine whether s3 is formed by the interleaving of s1 and s2.

Example 

	For s1 = "aabcc", s2 = "dbbca"
	•When s3 = "aadbbcbcac", return true.
	•When s3 = "aadbbbaccc", return false.

Challenge O(n2) time or better
Tags Longest Common Subsequence Dynamic Programming 
*/
public class InterleavingString {
    /**
     * Determine whether s3 is formed by interleaving of s1 and s2.
     * @param s1, s2, s3: As description.
     * @return: true or false.
     */
    public boolean isInterleave(String s1, String s2, String s3) {
        // write your code here
        if (s1 == null || s1.length() == 0 || s2 == null || s2.length() == null || s3 == null || s3.length() == 0) {
        	return false;
        }

        boolean[][] interleaved = new boolean[s1.length + 1][s2.length + 1];
        for 

    }
}