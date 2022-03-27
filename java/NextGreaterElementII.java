/**
 * LeetCode 503 https://leetcode.com/problems/next-greater-element-ii/
 * 
 */


class Solution {
    public int[] nextGreaterElements(int[] nums) {
        int numsLength = nums.length;
        int[] res = new int[numsLength];
        Arrays.fill(res, -1); // I made mistake here to filling -1, just leave it as 0
        
        Stack<Integer> stack = new Stack<Integer>();
        
        for (int i = 0; i < 2*numsLength; i++) {
            while( !stack.isEmpty() && nums[stack.peek()] < nums[i % numsLength] ) {
                // I made mistake here again, I was using res[i % numsLength] = nums[i % numsLength]
                int index = stack.pop();
                res[index] = nums[i % numsLength];
            }
            stack.push(i % numsLength);
        }
        
        return res;
        
    }
}