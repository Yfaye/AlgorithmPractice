# Minimum Window Substring

# Description
# Given a string source and a string target, find the minimum window in source which will contain all the characters in target.

# Notice
# If there is no such window in source that covers all characters in target, return the emtpy string "".
# If there are multiple such windows, you are guaranteed that there will always be only one unique minimum window in source.

# Clarification
# Should the characters in minimum window has the same order in target?Not necessary.

# Example
# For source = "ADOBECODEBANC", target = "ABC", the minimum window is "BANC"

# Challenge 
# Can you do it in time complexity O(n) ?

# Tags 
# LinkedIn Hash Table Facebook

class Solution:
    """
    @param source: A string
    @param target: A string
    @return: A string denote the minimum window
             Return "" if there is no such a string
    """
    def minWindow(self, source, target):
        # write your code here
        head = 0
        tail = 0