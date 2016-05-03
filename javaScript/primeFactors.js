/*2. Prime Factors

Question: How could you find all prime factors of a number?

Answer: Run a while loop. 
start dividing by two and if not divisible increase divider until u r done.

Interviewer:What is the run time complexity? can you make this better

You: this is O(n). you can increase divisor by 2 form divisor = 3. 
Because, if a number is divisible by any even number it would divisible by 2. 
Hence, you dont need to divide by even numbers. 
Besides, you will not have a factor bigger than half of its value. 
if you want make it complex use tough concept in no. 1 (try-2. if u get it)
*/

function primeFactors(n){
  var result = [];
  if (typeof n != "number" || n < 2) {
    return result;
  }
  
  if (n == 2 || n == 3) {
    result.push(n);
    return result;
  }
  
  var divisor = 2;
  var limit = Math.floor(n/2);
  
  while (divisor <= limit) {
    if (n % divisor == 0) {
      result.push(divisor);
      n = n / divisor;
    } else {
      if (divisor >= 3) {
        divisor += 2;
      } else {
        divisor++;
      }
    }
  } 
  return result;
}

primeFactors(188);