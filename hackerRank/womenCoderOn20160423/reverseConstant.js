 /*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

function processData(input) {
    var stringsArray = input.toString().split('\n');
    for (var i = 1; i < stringsArray.length; i++){
        var curStringArray = stringsArray[i].split('');
        //console.log(curStringArray);
        var isVowel = function(c){
            if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
                return true;
            }
            return false;
        }
        var swap = function(a,x,y){
            a.splice(y, 1, a.splice(x, 1, a[y])[0]);
            return a;
        }
        
        var left = 0;
        var right = curStringArray.length - 1;
        //console.log('origin: ' + right);
        while(left < right){
            while (isVowel(curStringArray[left])){
                left++;
            }
            while (isVowel(curStringArray[right])) {
                right--;
            }
            //console.log('left: '+left+' right: '+ right+' Before swap: '+ curStringArray);
            swap(curStringArray,left,right);
            //console.log('left: '+left+' right: '+ right+' After swap: '+ curStringArray);
            left++;
            right--;
        }
    //process.stdout.write(curStringArray.join('')+'\n');
      console.log(curStringArray.join('')+'\n');
    }
}
processData("10\nieiuosazoutibqoiibe\nueocuivudazotuoejoe\noumueaoeaoyumgfjxumo\nuunhawxztuoookuerso\ntufgnaumsaj\nkoouooueex\nkknaxvxkuaibs\nmoiaeaaeqihuidaeora\ninegwzuboa\nievskueawaakgfiegie");

/*
ieiuobaqoubitzoiise
ueojuituzadovuoecoe
oumueaoeaoxujfgmyumo
uusraktzxuooowuehno
jusmnaugfat
xoouooueek
sbkaxvxnuaikk
roiaeaaedihuiqaeoma
ibezwgunoa
iegfgueakaawksievie
*/