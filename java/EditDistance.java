/*EditDistance.java 
Edit Distance  

Given two words word1 and word2, find the minimum number of steps required to convert word1 to word2. (each operation is counted as 1 step.)

You have the following 3 operations permitted on a word:
•Insert a character
•Delete a character
•Replace a character

Example 
	Given word1 = "mart" and word2 = "karma", return 3.

Tags String Dynamic Programming 
*/
public class EditDistance {
    /**
     * @param word1 & word2: Two string.
     * @return: The minimum number of steps.
     */
    public int minDistance(String word1, String word2) {
        // write your code here
        if ((word1 == null || word1.length() == 0) && word2 != null) {
        	return word2.length();
        }

        if ((word2 == null || word2.length() == 0) && word1 != null) {
        	return word1.length();
        }

        if ((word1 == null || word1.length() == 0) && (word2 == null || word2.length() == 0)) {
        	return 0;
        }


        int[][] minEdit = new int[word1.length() + 1][word2.length() + 1];
        for (int i = 0; i <= word1.length(); i++) {
        	minEdit[i][0] = i;
        }
        for (int j = 0; j <= word2.length(); j++) {
        	minEdit[0][j] = j;
        }

        for (int i = 1; i <= word1.length(); i++) {
        	for (int j = 1; j <= word2.length(); j++) {
        		if (word1.charAt(i - 1) == word2.charAt(j - 1)) {
        			minEdit[i][j] = minEdit[i - 1][j - 1];
        		} else {
        			minEdit[i][j] = 1 + Math.min(minEdit[i - 1][j - 1], Math.min(minEdit[i - 1][j],minEdit[i][j - 1]));
        		}
        	}
        }
        return minEdit[word1.length()][word2.length()];
    }
    public static void main(String[] args) {
        EditDistance test = new EditDistance();
        int result = test.minDistance("abba","abbalala");
        System.out.println("Expected: 4");
        System.out.println(result);
    }

}