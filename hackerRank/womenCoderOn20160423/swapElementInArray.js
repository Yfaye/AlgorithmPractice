/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var swapItem = function(arr, left,right){
  if (arr.length === 1) {return arr}
  arr[left] = arr.splice(right, 1, arr[left])[0];
  //arr.splice(left, 1, arr.splice(right,1,arr[left])[0]);
  return arr;
}

swapItem([1,2,5,6],0,2);
