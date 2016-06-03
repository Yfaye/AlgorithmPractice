    /**
 * @param {string, string} a,b

 */
    var swap = function(a,b){
        var tmp = a;
        a = b;
        b = tmp;
    };

    var testa = 'a';
    var testb = 'b';
    swap(testa,testb);
console.log(testa); //'a'

  
var a = 1,
    b = 2;

[a, b] = [b, a];

console.log('a:', a, 'b:', b); // a: 2 b: 1  