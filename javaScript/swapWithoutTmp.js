/*

7. swap number without temp

Question: How would you swap two numbers without using a temporary variable?

Answer: Waste time about thinking it. though u know the answer, act like you are thinking and take your time to answer this one.


function swapNumb(a, b){
  console.log('before swap: ','a: ', a, 'b: ', b);
  b = b -a;
  a = a+ b;
  b = a-b;
  console.log('after swap: ','a: ', a, 'b: ', b);  
}

> swapNumb(2, 3);
   = before swap:  a:  2 b:  3
   = after swap:  a:  3 b:  2 
        

bit manipulation: Sorry, i can't explain this to you. Kinjal Dave suggested logical conjunction to understand it. Waste 30 min there at your own risk.


function swapNumb(a, b){
  console.log("a: " + a + " and b: " + b);
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;
  console.log("a: " + a + " and b: " + b);
}

> swapNumb(2, 3);
  = a: 2 and b: 3
  = a: 3 and b: 2
        
 */

function swapWithoutTmp(a,b) {
  a = a^b;
  b = a^b;
  a = a^b;
  console.log("a: " + a +" "+ "b: " + b);
}

/*
undefined
*/