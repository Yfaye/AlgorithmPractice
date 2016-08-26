#Kth Largest in N Arrays
#Find K-th largest element in N arrays.

#Notice: You can swap elements in the array
#Example
#In n=2 arrays [[9,3,2,4,7],[1,2,3,4,8]], the 3rd largest element is 7.
#In n=2 arrays [[9,3,2,4,8],[1,2,3,4,2]], the 1st largest element is 9, 2nd largest element is 8, 3rd largest element is 7 and etc.
#Tags Heap
class Node:
    def __init__(self, _v, _id, _i):
        self.value = _v
        self.from_id = _id
        self.index = _i
    def __cmp__(self, obj):
        return cmp(obj.value, self.value)
    def __lt__(self,obj):
        return obj.value <= self.value
            

import heapq

#class Solution:
    # @param {int[][]} arrays a list of array
    # @param {int} k an integer
    # @return {int} an integer, K-th largest element in N arrays
def KthInArrays(arrays, k):
    queue = []
    heapq.heapify(queue)

    for i, array in enumerate(arrays):
    	from_id = i
    	index = len(array)-1
    	array.sort()
    	if index >= 0:
    		value = arrays[i][index]
    		heapq.heappush(queue, Node(value, from_id, index))

    #if len(heapq) == 0:
    #	return None

    for i in range(k):
    	node = heapq.heappop(queue)
    	value = node.value
    	from_id = node.from_id
    	index = node.index

    	if i == k-1:
    		return value

    	if index:
    		index -= 1
    		value = arrays[from_id][index]
    		heapq.heappush(queue, Node(value, from_id, index))

print(KthInArrays([[9,3,2,4,7],[1,2,3,4,8]], 3))

# 这个程序虽然思路有，但是写不出来，知道用priorityQueue，但是JS里面没有！没有！用js刷题的各位达人都是怎么解决这个问题的呢……
# python还是没有写熟，还要多写，还要继续写

