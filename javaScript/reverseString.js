/*
8. string reverse

Question: How would you reverse a string in JavaScript?

Answer: I can loop through the string and concatenate letters to a new string

function reverseString(str) {
  var reversed = "";
  for (var i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

reverseString('test reverse string');

Interviewer: You know concatenation performed well in modern browsers but becomes slow in older browsers like IE8. Is there any different way, you can reverse a string?

Answer: sure. i can use an array and also add some checking. 
        if string is null or other than string this will fail. 
        let me do some type check as well. 
        Using this array is like using string buffer in some server side languages.
 
function reverseString(str) {
  var reversed = [];
  if (!str || typeof str != 'string' || str.length < 2) {
    return str;
  }
  
  for (var i = str.length - 1; i >= 0; i--) {
    reversed.push(str[i]);
  }
  
  return reversed.join("");
  
}

reverseString("Haha don't give up");

Interviewer: What is the run time complexity?

You: O(n)

Interviewer: Can you make this better?

You: I can loop through half of the index and it will save little bit.
(this is kind of useless, might not impress interviewer)

function reverseString(str) {
  str = str.split('');
  var head = 0,
      tail = str.length - 1,
      tmp;
  while ((head != tail) && (head <= Math.floor(str.length / 2)) && (tail >= Math.ceil(str.length / 2))) {
    tmp = str[head];
    str[head] = str[tail];
    str[tail] = tmp;
    
    //str[head] = str[head] ^ str[tail];
    //str[tail] = str[head] ^ str[tail];
    //str[head] = str[head] ^ str[tail];
    head++;
    tail--
    console.log("head is :" + head + " " + "tail is: " + tail);
  }
  return str.join('');
}

reverseString('testodd');

Interviewer: That works, but can u do it in a recursive way?

You: sure.

function reverseString(str) {
  if (str === "") {
    return ""; 
  } else {
    return reverseString(str.substr(1)) + str.charAt(0);
  }
}

reverseString("recursive");

try 5

Interviewer: Can you use any build in method to make it little cleaner?

You: yes.


function reverse(str){
  if(!str || str.length <2) 
  {
   return str;
  }  
  return str.split('').reverse().join('');
}

try 6

Question: Can you make reverse function as string extension?

Answer: I need to add this function to the String.prototype and instead of using str as parameter, i need to use this


String.prototype.reverse = function (){
  if(!this || this.length <2) return this;
  
  return this.split('').reverse().join('');
}

> 'abc'.reverse();
  = 'cba'
        
 */

String.prototype.reverseString = function(){
  if (!this || this.length < 2) {
    return this;
  }
  return this.split('').reverse().join('');
}

'abcdefg'.reverseString();
var teststr = 'abcdefg'.split('');
console.log(teststr);




/*
abcdefg
*/
/*
undefined
*/
/*
undefined
*/
/*
undefined
*/
/*
undefined
*/
/*
undefined
*/