/*
3. Fibonacci

Question: How do get nth Fibonacci number?

Answer: I create an array and start from iterate through.

Fibonacci series is one of the most popular interview question for beginners. 
so, you have to learn this one.

function fibonacci(n) {
  var fibonacci = [];
  fibonacci[0] = 0;
  fibonacci[1] = 1;
  
  var i = 2;
  while (i <= n) {
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
    i++;
  }
  
  return fibonacci[n];
}
fibonacci(6);

Interviewer: What is the run time complexity?

you: O(n)

Interviewer: can you make it recursive?

function fibonacci(n) {
  if ( n <= 1) {
    return n;
  } else {
    return fibonacci(n-1) + fibonacci(n-2);
  }
}
fibonacci(12);

Interviewer: What is the run time complexity?

You: O(2^n). 

*/

function fibonacci(n) {
  var fibonacci = [];
  fibonacci[0] = 0;
  fibonacci[1] = 1;
  
  var i = 2;
  while (i <= n) {
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
    i++;
  }
  
  return fibonacci[n];
}
fibonacci(12);
/*
144
*/