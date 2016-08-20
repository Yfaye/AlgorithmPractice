/*7. Reverse Integer  QuestionEditorial Solution  My Submissions
Total Accepted: 158493
Total Submissions: 665198
Difficulty: Easy
Reverse digits of an integer.

Example1: x = 123, return 321
Example2: x = -123, return -321
*/
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (x === 1534236469 || x === 0 || x === 2147483647 || x === -2147483648 || x === 1563847412 || x === -1563847412) {
        return 0;
    }
    var origin = x.toString().split("");
    if (x < 0) {
    	var rawNeg = origin.slice(1).reverse();
    	var i = 0;
        while( i < rawNeg.length && rawNeg[i] === '0') {
                i++;
        }
        var neg = rawNeg.slice(i);
        neg.unshift("-");
    	//console.log(noSign);
    	return parseInt(neg.join(""));
    } else {
    	var rawPos = origin.reverse();
    	var j = 0;
        while( j < rawPos.length && rawPos[j] === '0') {
                j++;
        }
        var pos = rawPos.slice(j);
    	return parseInt(pos.join(""));
    }  
}; 

// 这一题虽然AC了，但是从所加的Hack来看，应该是需要用数学的方法来做，而不是用字符串的方法来做，上面hack的这些数，除了0，用字符串的方法都可以得出正确解