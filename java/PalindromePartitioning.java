/**
 * LeetCode 131 https://leetcode.com/problems/palindrome-partitioning/
 */

class Solution {
    List<List<String>> res = new LinkedList<>();
    LinkedList<String> path = new LinkedList<>();
    
    public List<List<String>> partition(String s) {
        backtrack(s, 0);
        return res;
    }
    
    void backtrack (String s, int startIndex) {
        // base case
        if (startIndex == s.length()) {
            res.add(new LinkedList(path));
            return;
        }
        
        for (int i = startIndex; i < s.length(); i++) {
            if(isPalindrome(s, startIndex, i)) {
                String str = s.substring(startIndex, i + 1);
                path.add(str);
            } else {
                continue;
            }
            
            backtrack(s, i+1);
            path.removeLast();
        }
    }
    
    boolean isPalindrome(String s, int start, int end) {
        while (start <= end) {
            if (s.charAt(start) != s.charAt(end)) {
                return false;
            }
            start++;
            end--;
        }
        return true;
    }
}