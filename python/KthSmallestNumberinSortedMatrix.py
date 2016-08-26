#Kth Smallest Number in Sorted Matrix

# Description
# Find the kth smallest number in at row and column sorted matrix.

# Example
# Given k = 4 and a matrix:

# [
#   [1 ,5 ,7],
#   [3 ,7 ,8],
#   [4 ,8 ,9],
# ]
# return 5

# Challenge 
# O(k log n), n is the maximal number in width and height.

# Tags 
# Heap Priority Queue Matrix

# Related Problems 
# Hard Kth Smallest Sum In Two Sorted Arrays
# Medium Kth Largest Element
class Node:
	def __init__(self, _x, _y, _val):
		self.x = _x
		self.y = _y
		self.value = _val
	def __cmp__(self, obj):
		return cmp(obj.value, self.value)

import heapq

class Solution:
    # @param matrix: a matrix of integers
    # @param k: an integer
    # @return: the kth smallest number in the matrix
    def kthSmallest(self, matrix, k):
        # write your code here