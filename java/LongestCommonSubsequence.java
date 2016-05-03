/*LongestCommonSubsequence.java
Longest Common Subsequence  
Given two strings, find the longest common subsequence (LCS).
Your code should return the length of LCS.
 
Example 
	For "ABCD" and "EDCA", the LCS is "A" (or "D", "C"), return 1.
	For "ABCD" and "EACB", the LCS is "AC", return 2.

Clarification 
	What's the definition of Longest Common Subsequence?
	•https://en.wikipedia.org/wiki/Longest_common_subsequence_problem
	•http://baike.baidu.com/view/2020307.htm
Tags LintCode Copyright Longest Common Subsequence Dynamic Programming 
*/
public class LongestCommonSubsequence {
    /**
     * @param A, B: Two strings.
     * @return: The length of longest common subsequence of A and B.
     */
    public int longestCommonSubsequence(String A, String B) {
        // write your code here
        if (A == null || A.length() == 0 || B == null || B.length() == 0) {
            return 0;
        }
        
        int[][] lengthofLCS = new int[A.length() + 1][B.length() + 1];

        for (int i = 1; i <= A.length(); i++) {
        	for (int j = 1; j <= B.length(); j++) {
        		lengthofLCS[i][j] = Math.max(lengthofLCS[i - 1][j], lengthofLCS[i][j - 1]);
        		if (A.charAt(i - 1) == B.charAt(j - 1)) {
        			lengthofLCS[i][j] = lengthofLCS[i - 1][j - 1] + 1;
        		}
        	}
        }

        return lengthofLCS[A.length()][B.length()];
    }
    public static void main(String[] args) {
        LongestCommonSubsequence test = new LongestCommonSubsequence();
        int result = test.longestCommonSubsequence("abbaisgreast", "test");
        System.out.println("Expected: est");
        System.out.println(result);
    }

}