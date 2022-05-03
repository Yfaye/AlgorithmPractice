/**
 * LeetCode 17 https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 */

class Solution {
    List<String> lists = new LinkedList<>();
    StringBuilder temp = new StringBuilder();
    
    public List<String> letterCombinations(String digits) {
        if (digits == null || digits.length() == 0) {
            return lists;
        }
        
        String[] numToLetter = {
                                "", // 0
                                "", // 1
                                "abc", // 2
                                "def", // 3
                                "ghi", // 4
                                "jkl", // 5
                                "mno", // 6
                                "pqrs", // 7
                                "tuv",// 8
                                "wxyz" // 9
                                };
        backtrack(digits, numToLetter, 0);
        return lists;
    }
    
    void backtrack(String digits, String[] numToLetter, int index) {
        // base case
        if (temp.length() == digits.length()) {
            lists.add(temp.toString());
            return;
        }
        
        String letters = numToLetter[digits.charAt(index) - '0'];
        for (int i = 0; i < letters.length(); i++ ) {
            temp.append(letters.charAt(i));
            backtrack(digits, numToLetter, index + 1);
            temp.deleteCharAt(temp.length() - 1);
        }
    }
}
