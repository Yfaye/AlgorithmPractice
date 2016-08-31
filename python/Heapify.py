# Heapify

# Description
# Given an integer array, heapify it into a min-heap array.

# For a heap array A, A[0] is the root of heap, and for each A[i], A[i * 2 + 1] is the left child of A[i] and A[i * 2 + 2] is the right child of A[i].

# Clarification
# What is heap?

# Heap is a data structure, which usually have three methods: push, pop and top. where "push" add a new element the heap, "pop" delete the minimum/maximum element in the heap, "top" return the minimum/maximum element.

# What is heapify?
# Convert an unordered integer array into a heap array. If it is min-heap, for each element A[i], we will get A[i * 2 + 1] >= A[i] and A[i * 2 + 2] >= A[i].

# What if there is a lot of solutions?
# Return any of them.
# Example
# Given [3,2,1,4,5], return [1,2,3,4,5] or any legal heap array.

# Challenge 
# O(n) time complexity

# Tags 
# LintCode Copyright Heap

class Solution:
    # @param A: Given an integer array
    # @return: void
    def heapify(self, A):
        # write your code here
        n = len(A)
        i = 0

        def swap(a, b):
        	tmp = a
        	a = b
        	b = tmp

        while i < n:
        	# if it is leaf node, the flowing would all be leaf node
        	if (2 * i + 1) >= n :
        		break
        	# if only have left child
        	elif ((2 * i + 1) < n and (2 * i + 2) >= n):
        		if A[i] > A[2 * i + 1]:
        			swap(A[i], A[2 * i + 1])

        	# if have both left child and right child:
        	else:
        		# if left child smaller
        		if (A[2*i + 1] < A[2 * i + 2]) and A[i] > A[2 * i + 1]:
        			swap(A[i], A[2 * i + 1])
        		# if right child smaller	
        		if (A[2*i + 2] < A[2 * i + 1]) and A[i] > A[2 * i + 2]:
        			swap(A[i], A[2 * i + 2])

        return A
# 上面的程序有两个大问题：
# 1. swap程序那样写，是交换不了数组里面的元素的，它只是复制了数组元素里面的值传进去，要写成swap(arr, i, j), 传数组下标进去才能实现swap交换的目的
# 2. 一次简单的交换，是不能够实现heap的，比方[45,39,32,11],在一次交换后，成了[32,39,45,11],然后顺次检查，成了[32,11,45,39], 但这种情况下，11还应该往上浮。所以下沉应该是一直沉到位置，而不是仅仅只交换一次

# 按上面的认识，重新写heapify的函数

class Solution:
    # @param A: Given an integer array
    # @return: void
    def heapify(self, A):
        # write your code here

        def siftDown(A, k):
        	while k < len(A):  # 下面这段三个数中找最小并交换的写法真是太棒了，简直不能更棒！！！！
        		smallest = k
        		if (2 * k + 1 < len(A) and A[2 * k + 1] < A[smallest]):
        			smallest = 2 * k + 1
        		if (2 * k + 2 < len(A) and A[2 * k + 2] < A[smallest]):
        			smallest = 2 * k + 2
        		if smallest == k:
        			break
        		tmp = A[smallest]
        		A[smallest] = A[k]
        		A[k] = tmp

        		k = smallest

        i = len(A) / 2 ##！！！注意这里i的取值

        while (i >= 0):  # 注意这里要从后面往前遍历，因为要先把位置上的大的沉下去，小的浮上来之后，才能确保小的都能浮上去，不然从根开始，大的可以沉下来，但是下面更小的就浮不上去了，可以参照考虑最差情况，从大到小排序的数组
        	siftDown(A, i)
        	i -= 1

        return A


#等着还要再试一下shiftUp的办法


