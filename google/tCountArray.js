

For an array A[0:n-1] containing unsorted numbers 1 to n, its count array is defined as C[0:n-1] where C[i] is the count of numbers smaller than A[i] within subarray A[i+1:n-1]. 
Given array A, return the biggest value of its count array elements. 
For example, if A = [4, 1, 5, 3, 2], then C = [3, 0, 2, 1, 0], and the result is 3. 
For the purpose of the phone interview, the high level solution is given: 
start from the end of the input array, iterate backwards to the start of the array. 
In each step, insert the current value into a binary search tree, and during insertion, calculate the count value of the current inserted value.