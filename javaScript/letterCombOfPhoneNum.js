/*17. Letter Combinations of a Phone Number  
Total Accepted: 78379 Total Submissions: 272911 Difficulty: Medium

Given a digit string, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below.

Input:Digit string "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

Note:
Although the above answer is in lexicographical order, your answer could be in any order you want. 
*/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    //corner case
    if (digits === null || digits === undefined) {
        return '';
    }
    if (digits === '') {
        return [];
    }
    //initialize
    var path = [];
    var results = [];
    var digitsArr = digits.split('').map(function(n){return Number(n) - 2;});
    //range check
    if (digitsArr.some(function(n){return (n<0 || n>7) ;})){
        return '';
    }
    
    var keyboard = [
                        ['a','b','c'],
                        ['d','e','f'],
                        ['g','h','i'],
                        ['j','k','l'],
                        ['m','n','o'],
                        ['p','q','r','s'],
                        ['t','u','v'],
                        ['w','x','y','z']
                    ];

   var dfsHelper = function(keyboard, digitsArr, results, path, pos){
       //base case
       if (path.length === digitsArr.length) {
           results.push(path.slice(0).join(''));
           return;
       }
       if (pos > (digitsArr.length - 1)) {
           return;
       }
       //recursive case
       var index = digitsArr[pos];
       for (var i = 0; i < keyboard[index].length; i++) {
           path.push(keyboard[index][i]);
           arguments.callee(keyboard, digitsArr, results, path, pos + 1);
           path.pop(path.length - 1);
       }
   }
   dfsHelper(keyboard, digitsArr, results, path, 0);
   console.table(results);
   return results;
};
letterCombinations('23');
/*
ad,ae,af,bd,be,bf,cd,ce,cf
*/
letterCombinations('2345');
/*
adgj,adgk,adgl,adhj,adhk,adhl,adij,adik,adil,aegj,aegk,aegl,aehj,aehk,aehl,aeij,aeik,aeil,afgj,afgk,afgl,afhj,afhk,afhl,afij,afik,afil,bdgj,bdgk,bdgl,bdhj,bdhk,bdhl,bdij,bdik,bdil,begj,begk,begl,behj,behk,behl,beij,beik,beil,bfgj,bfgk,bfgl,bfhj,bfhk,bfhl,bfij,bfik,bfil,cdgj,cdgk,cdgl,cdhj,cdhk,cdhl,cdij,cdik,cdil,cegj,cegk,cegl,cehj,cehk,cehl,ceij,ceik,ceil,cfgj,cfgk,cfgl,cfhj,cfhk,cfhl,cfij,cfik,cfil
*/
