/*
28. Implement strStr()
Total Accepted: 109936 Total Submissions: 436432 Difficulty: Easy

Implement strStr().

Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack. 
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (haystack === undefined || needle === undefined ) {
        return -1;
    }
    
    var stackLen = haystack.length;
    var needleLen = needle.length;
    
    if (stackLen ===0 && needleLen !== 0 ) {
        return -1;
    }
    if (stackLen !==0 && needleLen === 0) {
        return 0;
    }
    if (stackLen < needleLen) {
        return -1;
    }
    
    for (var i = 0; i < stackLen - needleLen + 1; i++) {
        for (var j = 0; j < needleLen; j++) {
            if (haystack.charAt(i+j) !== needle.charAt(j)) {
                break;
            }
        }
        if (j === needleLen) {
            return i;
        }
    }
    return -1;
};

strStr("lalalla","lla");