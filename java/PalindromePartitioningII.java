/*PalindromePartitioningII.java
Palindrome Partitioning II  
Given a string s, cut s into some substrings such that every substring is a palindrome. 
Return the minimum cuts needed for a palindrome partitioning of s.

	Example 
	Given s = "aab",
	Return 1 since the palindrome partitioning ["aa", "b"] could be produced using 1 cut.
Tags  Dynamic Programming 
*/
public class PalindromePartitioningII {
    /**
     * @param s a string
     * @return an integer
     */
     private boolean isPalindrome(String s, int start, int end) {
        for (int i = start, j = end; i < j; i++, j--) {
            if (s.charAt(i) != s.charAt(j)) {
                return false;
            }
        }
        return true;
    }

    private boolean[][] getIsPalindrome(String s) {
        boolean[][] isPalindrome = new boolean[s.length()][s.length()];

        for (int i = 0; i < s.length(); i++) {
            isPalindrome[i][i] = true;
        }

        for (int i = 0; i < s.length() - 1; i++) {
            isPalindrome[i][i + 1] = (s.charAt(i) == s.charAt(i + 1));
        }

        for (int length = 2; length < s.length(); length++) {
            for (int start = 0; start + length < s.length(); start++) {
                isPalindrome[start][start + length]
                    = isPalindrome[start + 1][start + length - 1] && s.charAt(start) == s.charAt(start + length);
            }
        }

        return isPalindrome;
    }

    public int minCut(String s) {
        if (s == null || s.length() == 0) {
            return 0;
        }

        // preparation
        boolean[][] isPalindrome = getIsPalindrome(s);

                //print the matrix dictionary
        for (int i = 0; i < isPalindrome.length; i++) {
            for (int j = 0; j < isPalindrome[i].length; j++) {
                    System.out.print(isPalindrome[i][j] + " ");
            }
            System.out.print("\n");
        }
        
        // initialize
        int[] f = new int[s.length() + 1];
        for (int i = 0; i <= s.length(); i++) {
            f[i] = i - 1;
        }
         
        // main
        for (int i = 1; i <= s.length(); i++) {
            for (int j = 0; j < i; j++) {
                if (isPalindrome[j][i - 1]) {
                    f[i] = Math.min(f[i], f[j] + 1);
                    System.out.print(f[i] + " ");
                }
            }
        }

        return f[s.length()];
    }

    public static void main(String[] args) {
        PalindromePartitioningII test = new PalindromePartitioningII();
        int result = test.minCut("abba");
        System.out.println("Expected: 0");
        System.out.println(result);
    }
};