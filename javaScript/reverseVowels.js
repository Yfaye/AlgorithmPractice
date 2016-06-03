/*
Write a function that takes a string as input and reverse only the vowels of a string.

Example 1:
Given s = "hello", return "holle".

Example 2:
Given s = "leetcode", return "leotcede". 
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    var sArr = s.split('');
    
    var isVowel = function(c){
        if (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u' ||
            c === 'A' || c === 'E' || c === 'I' || c === 'O' || c === 'U')
        {
            return true;
        }
        return false;
    };
    
    var swap = function(a,b){
        console.log('origin a is ' + a);
        var tmp = a;
        a = b;
        b = tmp;
        console.log('swaped a is ' + a );
    };
    
    var left = 0;
    var right = sArr.length - 1;
    //var middle = sArr.length / 2;
    
    while(left <= right) {
        console.log('left is: ' + left + ' and right is: ' + right);
        console.log('left value is ' + sArr[left] + ' and right value is ' + sArr[right]);
        if (isVowel(sArr[left]) === false ){ //&& left < Math.ceil(middle)) {
            left++;
            continue;
        }
        if (isVowel(sArr[right]) === false){// && right > Math.floor(middle)) {
            right--;
            continue;
        }
        if (isVowel(sArr[left]) === true && isVowel(sArr[right]) === true) {
            swap(sArr[left],sArr[right]);
            console.log(sArr[left] + sArr[right]);
            left++;
            right--;
        }
    }
    return sArr.join('');
};

reverseVowels('Helo');
/*
Helo
*/