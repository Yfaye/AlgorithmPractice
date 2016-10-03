/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    if (s === null || s === undefined || s.length === 0) {
        return 0;
    }
    
    // initialize book array for counting character frequency
    var book = [];
    for (let i = 0; i < 64; i++) {
        book[i] = 0;
    }
    
    var n = s.length;
    for (let k = 0; k < n; k++) {
        var code = s.charCodeAt(k);
        if (code < 65 || (code > 90 && code < 97) || code > 122) {
            return 0;
        } else {
            var index = code - 'A'.charCodeAt(0);
            book[index] += 1;
        }
    }
    
    var hasOdd = false;
    var result = 0; 
    
    for (let j = 0; j < 64; j++) {
        if (book[j] === 0 ){ continue;}
        // if book[j] is odd
        if (book[j] % 2 === 1) {
            if (hasOdd === false) {
                result += book[j];
            } else {
                result += (book[j] - 1);
            }
            hasOdd = true;
        }
        
        // if book[j] is even
        if (book[j] % 2 === 0) {
            result += book[j];
        }
    }
    
    return result;
};

// 以上代码没有用hash实现，但是已经AC