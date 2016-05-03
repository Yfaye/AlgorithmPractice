/*WordBreak.java
Word Break  
Given a string s and a dictionary of words dict, determine if s can be break into a space-separated sequence of one or more dictionary words.

	Example 
	Given s = "lintcode", dict = ["lint", "code"].
	Return true because "lintcode" can be break as "lint code".

Tags String Dynamic Programming 
*/
import java.util.Set;
import java.util.HashSet;


public class WordBreak {
    /**
     * @param s: A string s
     * @param dict: A dictionary of words dict
     */
    public boolean wordBreak(String s, Set<String> dict) {
        // write your code here 
 
    }
    public static void main(String[] args) {
        WordBreak test = new WordBreak();
            HashSet testSet = new HashSet();
            testSet.add("hey");
            testSet.add("abba");
            testSet.add("is");
            testSet.add("great");
        boolean result = test.wordBreak("abbaisgreat", testSet);
        System.out.println("Expected: true");
        System.out.println(result);
    }

}