/**
 * LeetCode 496 https://leetcode.com/problems/next-greater-element-i/
 * 
 */

class Solution {
    public int[] nextGreaterElement(int[] nums1, int[] nums2) {
        int[] res = new int[nums1.length];
        int notExist = -1;
        
        for (var i = 0; i < nums1.length; i++) {
            int indexInNums2 = -1;
        
            for (var j = 0; j < nums2.length; j++) {
                if (nums1[i] == nums2[j]) {
                    indexInNums2 = j;
                    break;
                }
            }
            
            for (var k = indexInNums2; k < nums2.length; k++) {
                if (nums2[k] > nums2[indexInNums2]) {
                    res[i] = nums2[k];
                    break;
                } else {
                    res[i] = notExist;
                }
            }
        }
        
        return res;
        
    }
}
