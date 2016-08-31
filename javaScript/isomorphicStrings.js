// 205. Isomorphic Strings 
// Total Accepted: 71626
// Total Submissions: 229355
// Difficulty: Easy
// Given two strings s and t, determine if they are isomorphic.

// Two strings are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

// For example,
// Given "egg", "add", return true.

// Given "foo", "bar", return false.

// Given "paper", "title", return true.

// Note:
// You may assume both s and t have the same length.

// Tags Hash Table
// Similar Problems (E) Word Pattern
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
	//corner case
	if (s === null || s=== undefined || t === null || t === undefined || s.length !== t.length) {
		return false;
	}

    var sArr = s.split("");
    var tArr = t.split("");
    var n = sArr.length;
    var sTot = new Map();
    var tTos = new Map();

    for (var i = 0; i < n; i++) {
    	if (!sTot.has(sArr[i]) && !tTos.has(tArr[i])) {	
    		sTot.set(sArr[i], tArr[i]);
    		tTos.set(tArr[i], sArr[i]);
    	} else {
    		if (sTot.get(sArr[i]) !== tArr[i] || tTos.get(tArr[i]) !== sArr[i]) {
    			return false;
    		}
    	}
    }
    return true;
};

//思路就是，拿一张hash表记录哪个字母对哪个字母，然后从头开始同时遍历两个str，如果表里查得到替换字母，就替换，如果查不到就替换，并且记录到表里，替换完成后比较两个字符串是否相等
//后来在写代码的时候发现，不用替换以及再比较了，如果替换时与t的当前位置不一致，就直接可以return false

//以上思路在 "ab" "aa" 这个case return  True了...漏洞在于，如果a和a已经建立了一一对应的联系，那么再有b的时候，就不能再关联给a了
//所以考虑建立两个hash表，一个是s->t的hash，一个是t到s的hash，两个表获得的值应该是互相一致的

//修改后，上述代码终于AC了

//本题的启示在于，如果需要在两个顺序集合中，建立这种一一对应的强对应关系，需要考虑使用两个hash表