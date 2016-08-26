# Number of Islands
# Description
# Given a boolean 2D matrix, find the number of islands.

# Notice
# 0 is represented as the sea, 1 is represented as the island. If two 1 is adjacent, we consider them in the same island. We only consider up/down/left/right adjacent.

# Example
# Given graph:

# [
#   [1, 1, 0, 0, 0],
#   [0, 1, 0, 0, 1],
#   [0, 0, 0, 1, 1],
#   [0, 0, 0, 0, 0],
#   [0, 0, 0, 0, 1]
# ]
# return 3.

# Tags 
# Facebook Zenefits Google

# Related Problems 
# Medium Surrounded Regions 20 %
# Hard Number of Islands II 15 %
class Solution:
    # @param {boolean[][]} grid a boolean 2D matrix
    # @return {int} an integer
    def numIslands(self, grid):
        # Write your code here