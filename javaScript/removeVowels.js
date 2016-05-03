/*
Let's design a recursive method called removeVowels().

• removeVowels(str) should return a string in which all of the
vowels in the string str have been removed.

• example:
removeVowels("recurse")
should return
"rcrs"
*/


var removeVowels = function(str) {
  var vowels = ['a','e','i','o','u','A','E','I','O','U'];
  //base case
  if (str === null || str ==='') {
    return str;
  }
  
  //recursive case
  if (vowels.includes(str.slice(-1))) {
     return  removeVowels(str.slice(0,-1));   
  } else {
     return removeVowels(str.slice(0,-1)) + str.slice(-1);
  }
};

removeVowels('recursive');
removeVowels('removeVowels');
/*
rcrsv
*/
/*
rmvVwls
*/
