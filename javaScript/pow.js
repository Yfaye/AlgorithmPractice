// 2^4 = 16
// pow(x, n) -> x^n
// pow(2, 4) -> (2*2) -> 4 -> 4*4 -> 16 = 2^4
// pow(2, 1) -> 2

// n >= 0

function pow(x,n) {
    var result = 1;

 for (var i = 1; i <= n; i++) {
    result *= x;
 }
  return result;
}

//iterative approach is O(n)
function powRecursive(x,n) {
    var result = 1;
    if (n == 0) {
        return result;
    } 
    if (n == 1) {
        return x;
    }
    
    result = powRecursive(x, n/2); 
    
    return result*result;

}