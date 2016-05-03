/*PalindromePartitioningIIPractice.java
Palindrome Partitioning II  
Given a string s, cut s into some substrings such that every substring is a palindrome. 
Return the minimum cuts needed for a palindrome partitioning of s.

	Example 
	Given s = "aab",
	Return 1 since the palindrome partitioning ["aa", "b"] could be produced using 1 cut.
Tags  Dynamic Programming 
*/
public class PalindromePartitioningIIPractice {
    /**
     * @param s a string
     * @return an integer
     */
    private boolean[][] getIsPalindrome(String s) {
        boolean[][] isPalindrome = new boolean[s.length()][s.length()];

        for (int i = 0; i < s.length(); i++) {
            isPalindrome[i][i] = true;
        }

        for (int i = 0; i < s.length() - 1; i++) {
            isPalindrome[i][i + 1] = (s.charAt(i) == s.charAt(i + 1));
        }

        for (int length = 2; length < s.length(); length++ ) {
            for (int start = 0; start + length < s.length(); start++) {
                isPalindrome[start][start + length] = (s.charAt(start) == s.charAt(start + length) && isPalindrome[start + 1][start + length - 1]);
            }
        }

        return isPalindrome;

    }
    private int minCut(String s) {
        //initialize
        boolean[][] isPalindrome = getIsPalindrome(s);

        int[] f = new int[s.length() + 1];

        for (int i = 0; i <= s.length(); i++) {
            f[i] = i - 1;
        }

        //main
        for (int i = 1; i <= s.length(); i++) {
            for (int j = 0; j < i; j++) {
                if (isPalindrome[j][i - 1]) {
                    f[i] = Math.min(f[i], f[j] + 1);
                }
            }
        }

        return f[s.length()];

    }
    public static void main(String[] args) {
        PalindromePartitioningIIPractice test = new PalindromePartitioningIIPractice();
        int result = test.minCut("abba");
        System.out.println("Expected: 0");
        System.out.println(result);
    }

}