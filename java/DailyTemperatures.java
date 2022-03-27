/**
 * LeetCode 739 https://leetcode.com/problems/daily-temperatures/
 * 
 */

class Solution {
    public int[] dailyTemperatures(int[] temperatures) {
        int[] answer = new int[temperatures.length];        
        Stack<Integer> stack = new Stack<>();
        
        for (var i = 0; i < temperatures.length; i++) {
            while ( !stack.isEmpty() && temperatures[stack.peek()] < temperatures[i]) {
                // I made mistake hare, I used answer[i] = i - stack.pop
                int index = stack.pop();
                answer[index] = i - index;
            }
            stack.push(i);
        }
        
        return answer;
    }
}