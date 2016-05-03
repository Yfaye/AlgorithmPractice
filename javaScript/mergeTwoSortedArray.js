/*
6. merge two sorted array

Question: How would you merge two sorted array?

Answer: I will keep a pointer for each array and (read the code. and be careful about this one.)
 */

function mergeTwoSortedArray(a, b) {
  var aElm = a[0],
      bElm = b[0],
      result = [],
      i = 1,
      j = 1;
  
  if (a.length == 0) {
    return b;
  }
  if (b.length == 0) {
    return a;
  }

  /* 
  if aElm or bElm exists we will insert to merged array
  (will go inside while loop)
   to insert: aElm exists and bElm doesn't exists
             or both exists and aElm < bElm
    this is the critical part of the example            
  */
  
  while (aElm || bElm) {
    if ((aElm && !bElm) || aElm < bElm) {
      result.push(aElm);
      aElm = a[i++];
    } else {
      result.push(bElm);
      bElm = b[j++];
    }
  } 
  return result;
  
}

mergeTwoSortedArray([2,5,6,7],[1,3,4,9]);
/*
1,2,3,4,5,6,7,9
*/