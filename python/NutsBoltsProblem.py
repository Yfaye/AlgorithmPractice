# Nuts & Bolts Problem

# Description
# Given a set of n nuts of different sizes and n bolts of different sizes. There is a one-one mapping between nuts and bolts. Comparison of a nut to another nut or a bolt to another bolt is not allowed. It means nut can only be compared with bolt and bolt can only be compared with nut to see which one is bigger/smaller.

# We will give you a compare function to compare nut with bolt.

# Have you met this question in a real interview? Yes
# Example
# Given nuts = ['ab','bc','dd','gg'], bolts = ['AB','GG', 'DD', 'BC'].

# Your code should find the matching bolts and nuts.

# one of the possible return:

# nuts = ['ab','bc','dd','gg'], bolts = ['AB','BC','DD','GG'].

# we will tell you the match compare function. If we give you another compare function.

# the possible return is the following:

# nuts = ['ab','bc','dd','gg'], bolts = ['BC','AA','DD','GG'].

# So you must use the compare function that we give to do the sorting.

# The order of the nuts or bolts does not matter. You just need to find the matching bolt for each nut.

# Tags 
# Quick Sort Sort

# Related Problems 
# Medium First Bad Version 34 %

# class Comparator:
#     def cmp(self, a, b)
# You can use Compare.cmp(a, b) to compare nuts "a" and bolts "b",
# if "a" is bigger than "b", it will return 1, else if they are equal,
# it will return 0, else if "a" is smaller than "b", it will return -1.
# When "a" is not a nut or "b" is not a bolt, it will return 2, which is not valid.
class Solution:
    # @param nuts: a list of integers
    # @param bolts: a list of integers
    # @param compare: a instance of Comparator
    # @return: nothing
    def sortNutsAndBolts(self, nuts, bolts, compare):
        # write your code here


# 费好大劲把题意搞明白了，就是利用给的比较方法，把两个序列都排好序，而且要一一对应。我能吐槽下这个题目吗？题意还得看答案才明白是要干什么
