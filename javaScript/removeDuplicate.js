/*

5. remove Duplicate

Question: How would you remove duplicate members from an array?

Answer: will start a while looping and keep an object/ associated array. 
If i find an element for the first time i will set its value as true (that will tell me element added once.). 
if i find a element in the exists object, i will not insert it into the return array.

*/

function removeDuplicate(arr) {
  var exist = {},
      result = [],
      elm;
  
  for (var i = 0; i < arr.length; i++) {
    elm = arr[i];
    if (!exist[elm]) {
      result.push(elm);
      exist[elm] = true;
    }
  }
  return result;
}

removeDuplicate([1,2,2,2,3,4,5,6,7,8,9,9,10,10,10]);

/*
1,2,3,4,5,6,7,8,9,10
*/