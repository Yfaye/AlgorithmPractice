// 299. Bulls and Cows  QuestionEditorial Solution  My Submissions
// Total Accepted: 40659
// Total Submissions: 128335
// Difficulty: Easy
// You are playing the following Bulls and Cows game with your friend: You write down a number and ask your friend to guess what the number is. Each time your friend makes a guess, you provide a hint that indicates how many digits in said guess match your secret number exactly in both digit and position (called "bulls") and how many digits match the secret number but locate in the wrong position (called "cows"). Your friend will use successive guesses and hints to eventually derive the secret number.

// For example:

// Secret number:  "1807"
// Friend's guess: "7810"
// Hint: 1 bull and 3 cows. (The bull is 8, the cows are 0, 1 and 7.)
// Write a function to return a hint according to the secret number and friend's guess, use A to indicate the bulls and B to indicate the cows. In the above example, your function should return "1A3B".

// Please note that both secret number and friend's guess may contain duplicate digits, for example:

// Secret number:  "1123"
// Friend's guess: "0111"
// In this case, the 1st 1 in friend's guess is a bull, the 2nd or 3rd 1 is a cow, and your function should return "1A1B".
// You may assume that the secret number and your friend's guess only contain digits, and their lengths are always equal.


// Tags Hash Table

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
	if(secret === null || secret === undefined || guess === null || guess === undefined) {
		return "0A0B"
	}

	var sArr = secret.split("");
	var gArr = guess.split("");
	var sMap = new Map();

	//set hash table for secret
	for (var i = 0; i < sArr.length; i++){
		if (!sMap.has(sArr[i])) {
			sMap.set(sArr[i], 1);
		} else {
			var c = sMap.get(sArr[i]);
			c += 1;
			sMap.set(sArr[i], c);
		}
	}
	
	console.log(sMap);

	var bulls = 0;
	var cows = 0;

    for (i = 0; i < gArr.length; i++) {
    	if (gArr[i] === sArr[i]) {
    		bulls++;
    		c = sMap.get(sArr[i]);
    		if (c - 1 > 0) {
    			c--;
    			sMap.set(sArr[i], c);
    		} else {
    			sMap.delete(sArr[i]);
    		}
    	} else {
    		if (sMap.has(gArr[i])){
    			cows++;
    			c = sMap.get(gArr[i]);
	    		if (c - 1 > 0) {
	    			c--;
	    			sMap.set(gArr[i], c);
	    		} else {
	    			sMap.delete(gArr[i]);
	    		}
    		}
    	}
    }

    return bulls + "A" + cows + "B";   

    
};

// 这个题目说了一堆，其实就是对比两个字符串，返回两种情况的个数：
// 1. 位置和值 都一模一样。这个遍历一遍就能找到
// 2. 位置不一样，但值一样的。这个可以靠一张hash表出现，但是注意它后面所描述的情况，1123 和 0111， 只有两个1中了，所以返回1A1B，而不是返回1A2B

// 所以想到，要先对secret建一张hash表，key是字母，value是该字母出现的个数
// 然后用guess对着secret遍历，如果找到位置对，值也对的，要从hash表中把它减去一，如果在当前位置没有找到对应值，就在hash表里去找是否有，有就把个数减一，如果hash表中某个键的值为0了就把它删去。



// 感觉想法天衣无缝，但是下面的case却发生了问题
//"1122" 
//"1222"
// 答案应该是"3A0B",但是按我的算法,却给出了3A1B的答案.
// 分析一下，应该是这句话出了问题 ：*如果在当前位置没有找到对应值，就在hash表里去找是否有，有就把个数减一* 这里有可能把后面位置对，值也对的值减去了
//所以应该先遍历一遍，把位置对，值也对的都剔除出去，然后再对剩下的建立hash表

var getHint = function(secret, guess) {
	if(secret === null || secret === undefined || guess === null || guess === undefined) {
		return "0A0B"
	}

	var sArr = secret.split("");
	var gArr = guess.split("");

	//counting bulls
	var bulls = 0;
	/*
	for (var i = 0; i < sArr.length; i++) {
		if (sArr[i] === gArr[i]) {
			bulls++;
			sArr.splice(i,1);   //这里删掉了当前i，如果直接i+1，则后面的那个值，实际是被跳过了，所以这里要分情况i++，所以改用while循环
			gArr.splice(i,1);
		}
	}
	*/
	var i = 0;
	while (i < sArr.length) {
		if (sArr[i] === gArr[i]) {
			bulls++;
			sArr.splice(i,1);
			gArr.splice(i,1);
		} else {
		    i++;
		}
	}

	// set hash table for secret
	var sMap = new Map();
	for (i = 0; i < sArr.length; i++) {
		if (!sMap.has(sArr[i])) {
			sMap.set(sArr[i], 1);
		} else {
			c = sMap.get(sArr[i]);
			c += 1;
			sMap.set(sArr[i], c);
		}
	}
	//counting cows
	var cows = 0;
	for (i = 0; i < gArr.length; i++) {
		if (sMap.has(gArr[i])) {
			cows++;
			c = sMap.get(gArr[i]);
			if (c > 1) {
				c -= 1;
				sMap.set(gArr[i], c);
			} else {
				sMap.delete(gArr[i]);
			}
		}
	}

    return bulls + "A" + cows + "B";   

    
};

// 以上代码并没有一次AC， 问题出在注释掉的那段代码


