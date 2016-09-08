/*350. Intersection of Two Arrays II  QuestionEditorial Solution  My Submissions
Total Accepted: 24240
Total Submissions: 57915
Difficulty: Easy
Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].

Note:
Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.
Follow up:
What if the given array is already sorted? How would you optimize your algorithm?
What if nums1's size is small compared to nums2's size? Which algorithm is better?
What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
 	//corner case
	if (nums1 === null || nums1 === undefined || nums1.length === 0 || nums2 === null || nums2 === undefined || nums2.length === 0) {
		return [];
	}
	
	nums1.sort(function(a,b){return a-b});
	nums2.sort(function(a,b){return a-b});

	var len1 = nums1.length;
	var len2 = nums2.length;
	var result = [];
		
	var longer = len1 >= len2? nums1 : nums2;
	var shorter = len1 < len2? nums1 : nums2;
	len1 = longer.length;
	len2 = shorter.length;

	for (var i = 0; i < len1; i++) {
		for (var j = 0; j < len2; j++) {
			console.log('i is ' + i + ' j is ' + j);
			if (longer[i] !== shorter[j]) {
				continue;
			}
			result.push(longer[i]);
		}
	}
	return result;   
};

//failed on case [2,1] [1,2]  
//made little change, failed on case [1,2] [1,1]

//var test = intersect([4,7,9,7,6,7],[5,0,0,6,1,6,2,2,4]);
var test = intersect([1,2],[1,1,1]);
console.log(test);

//这题其实就是寻找nums1和nums2的公共元素，而且题目说了顺序不重要，所以其实是找两个集合的公共元素

var intersect = function(nums1, nums2) {
 	//corner case
	if (nums1 === null || nums1 === undefined || nums1.length === 0 || nums2 === null || nums2 === undefined || nums2.length === 0) {
		return [];
	}

	//find longer and shorter
	var len1 = nums1.length;
	var len2 = nums2.length;
	var result = [];
		
	var longer = len1 >= len2? nums1 : nums2;
	var shorter = len1 < len2? nums1 : nums2;

	//set hash for shorter
	var hash = new Map();
	var i = 0;
	var count = 0;

	for (i = 0; i < shorter.length; i++) {
		if (!hash.has(shorter[i])){
			hash.set(shorter[i], 1);
		} else {
			count = hash.get(shorter[i]);
			hash.set(shorter[i], count+1);
		}
	}

	//traverse longer to match hash
	for (i = 0; i < longer.length; i++) {
		if (hash.has(longer[i])) {
			result.push(longer[i]);
			count = hash.get(longer[i]);
			if (count - 1 > 0) {
				hash.set(longer[i], count-1);
			}else {
				hash.delete(longer[i]);
			}
		}
	}

	return result;
 
};
