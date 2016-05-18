/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */
/*
(function(){ 
  Array.prototype.slice.call(arguments);
  return typeof arguments; 
})();*/
/*
object
*/

/*
var f = function g(){ return 23; };
typeof g();
*/
/*
Exception: ReferenceError: g is not defined
@Scratchpad/1:16:1
*/
/*
(function(x){ delete x; return x; })(1); 
*/
/*
1
*/

var sum = function(a,b) {return a+b};
var add = sum;

delete sum;
/*
false   //delete 只有当一个属性无法被删除时才返回 false。
*/
typeof sum;
/*
function
*/
