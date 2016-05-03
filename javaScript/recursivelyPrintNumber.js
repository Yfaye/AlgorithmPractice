/*
  printing the series of integers from
  n1 to n2, where n1 <= n2.
  example: printSeries(5, 10) should print the following:
  5, 6, 7, 8, 9, 10
 */

var recursivelyPrintNumber = function(n1, n2) {
   if (n1 > n2) {
     return '';
   }
  
   if (n1 == n2) {
     var str = n1 + ', '; 
   } else {
     var str = n1 + ', ' + recursivelyPrintNumber(n1+1,n2);
   }
  
   return str;
}
recursivelyPrintNumber(5,10);
