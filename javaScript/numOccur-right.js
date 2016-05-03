/*
  Let's design a recursive method called numOccur().
  numOccur(ch, str) should return the number of times that
  the character ch appears in the string str
  Thinking recursively:
 */

var numOccur = function(ch, str){ 
  if (str === '' || str === null || str === undefined) {
    return 0;
  } 
  return (ch === str[0] ? 1 : 0) + numOccur(ch,str.substring(1));
};

numOccur('i', 'filafila');
