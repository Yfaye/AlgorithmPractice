/**
 * LeetCode 496 https://leetcode.com/problems/next-greater-element-i/
 * 
 */

class Solution {
    public int[] nextGreaterElement(int[] nums1, int[] nums2) {
/**
* Time Complexity O(n2) Double For loop
*/        
        
//         int[] res = new int[nums1.length];
//         int notExist = -1;
        
//         for (var i = 0; i < nums1.length; i++) {
//             int indexInNums2 = -1;
        
//             for (var j = 0; j < nums2.length; j++) {
//                 if (nums1[i] == nums2[j]) {
//                     indexInNums2 = j;
//                     break;
//                 }
//             }
            
//             for (var k = indexInNums2; k < nums2.length; k++) {
//                 if (nums2[k] > nums2[indexInNums2]) {
//                     res[i] = nums2[k];
//                     break;
//                 } else {
//                     res[i] = notExist;
//                 }
//             }
//         }
        
//         return res;
        
        
/** 
* Time Complexity O(n) Stack + HashMap since there is no duplicate num in the nums2 and nums1
*/        
    int[] res = new int[nums1.length];
    Stack<Integer> stack = new Stack<>();
    HashMap<Integer, Integer> num2ToNextGreater = new HashMap<>();

    for (int n : nums2) {
        while ( !stack.isEmpty() && stack.peek() < n ) {
            num2ToNextGreater.put(stack.pop(), n);
        }
        stack.push(n);
    }

    for (var i = 0; i < nums1.length; i++) {
        res[i] = num2ToNextGreater.getOrDefault(nums1[i], -1);
    }

    return res;   
    }
}
