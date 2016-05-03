/*

9. reverse words

Question: How would you reverse words in a sentence?

Answer: You have to check for white space and walk through the string. 
        Ask is there could be multiple whitespace.
        
function reverseWords(str) {
  var str = str.split(' ');
  return str.reverse().join(' ');
}

reverseWords("Hi, this is mira's shop");

try 2: while no build in methods is allowed
function reverseWords(str) {
  var result = [],
      wordLen = 0;
  for (var i = str.length - 1; i >= 0; i-- ) {
    if (str[i] == ' ' || i == 0) {
      result.push(str.substr(i, wordLen + 1));
      wordLen = 0;
    } else {
      wordLen++;
    }
  }
  return result.join(' ');
}

reverseWords('George Xu is getting a fever.');

// fever.  a  getting  is  Xu George

*/


/*
 fever.  a  getting  is  Xu George
*/