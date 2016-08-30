// 228. Summary Ranges  QuestionEditorial Solution  My Submissions

// Total Accepted: 54676
// Total Submissions: 210063

// Difficulty: Medium
// Given a sorted integer array without duplicates, return the summary of its ranges.

// For example, given [0,1,2,4,5,7], return ["0->2","4->5","7"].

// Hide Tags Array
// Hide Similar Problems (M) Missing Ranges (H) Data Stream as Disjoint Intervals


/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    //corner case
    if (nums === null || nums.length === 0) {
    	return [];
    }

    var result = []
    var tmp = [nums[0]];
    for (var i = 1; i < nums.length; i++){
    	if (nums[i] !== nums[i - 1] + 1) {
    		tmp.push(nums[i-1])
    		result.push(tmp.join("->"))
    	}
    }
    result.push(tmp.join("->"));
    return result;
};

// 拿到题目一眼看过去，觉得是个简单题目，时间复杂度O(N)，并没有发现什么明显的陷阱，先做做试试看吧
// 在这个case上出了问题： [0,1,2,4,5,7,9,10,11,12] 输出了 ["0->2","4->5","7->7","9"]

// 后来各种提交各种出问题，用各种if语句把程序改成了下面恐怖的样子，然后还是有问题 [0,1,2]的case输出["2"]，而且太丑了，不想看T_T
var summaryRanges = function(nums) {
    //corner case
    if (nums === null || nums.length === 0) {
    	return [];
    }
    if (nums.length === 1) {
        return [nums.join("")];
    }
    if (nums.length === 2) {
        if (nums[0] + 1 == nums[1]){
            return [nums.join("->")];
        } else {
            return [nums[0] + "", nums[1] + ""];
        }
    }
 
    var result = [];
    var tmp = [];
    for (var i = 0; i < nums.length - 1; i++){
        while (nums[i] + 1 === nums[i+1]) {
            i++;
            continue;
        }
        if (tmp[0] !== nums[i]) {
          tmp.push(nums[i]);          
        }
        result.push(tmp.join("->"));
        tmp = [nums[i+1]]
    }
    
    if (nums[nums.length-1] !== nums[nums.length-2] + 1){
        result.push(tmp.join(""));           
    }
    return result;    
};

// 后来各种debug，改成了下面的样子，终于AC了
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    //corner case
    if (nums === null || nums.length === 0) {
    	return [];
    }

    var result = []
    var tmp = [nums[0]];
    
    for (var i = 1; i < nums.length; i++){
    	if (nums[i] !== nums[i - 1] + 1) {
    	    if (tmp[0] !== nums[i-1]){ // single number inside the array
    		    tmp.push(nums[i-1])    	        
    	    }
    		result.push(tmp.join("->"))
    		tmp = [nums[i]];
    	}
    }
    
    // now i === nums.length
    if (nums[nums.length-1] !== nums[nums.length-2] + 1){
        result.push(tmp.join(""));           
    } else {
        tmp.push(nums[i-1])
        result.push(tmp.join("->"));
    }
    
    return result;
};


//但是这题还没有完，还值得好好再揣摩一下