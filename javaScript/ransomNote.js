/*383. Ransom Note  QuestionEditorial Solution  My Submissions
Total Accepted: 1520
Total Submissions: 3187
Difficulty: Easy
 Given  an  arbitrary  ransom  note  string  and  another  string  containing  letters from  all  the  magazines,  write  a  function  that  will  return  true  if  the  ransom   note  can  be  constructed  from  the  magazines ;  otherwise,  it  will  return  false.   

Each  letter  in  the  magazine  string  can  only  be  used  once  in  your  ransom  note.

Note:
You may assume that both strings contain only lowercase letters.

canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true
*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    var rLen = ransomNote.length;
    var mLen = magazine.length;
    
    var r = ransomNote.split("");
    var m = magazine.split("");
    console.log(r);
    console.log(m);
    
    //corner case
    if (rLen === 0) {
        return true;
    }
    if (mLen === 0) {
        return false;
    }
    if (rLen > mLen) {
        return false;
    }
    
    
    for (var i = 0; i < rLen; i++) {
            var index = m.indexOf(r[i]);
            if (index === -1) {
                return false;
            }
            m[index] = "";
    }
    
    return true;   
};

// 已AC, 本题类似StrStr，特别注意 magazine 里每个符号只能使用一次，所以如果找到相同的，要把之前magazine里的那个符号删掉。

// 下面是用双循环做的，已AC

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    var rLen = ransomNote.length;
    var mLen = magazine.length;
    
    var r = ransomNote.split("");
    var m = magazine.split("");
    console.log(r);
    console.log(m);
    
    //corner case
    if (rLen === 0) {
        return true;
    }
    if (mLen === 0) {
        return false;
    }
    if (rLen > mLen) {
        return false;
    }
    
    
    for (var i = 0; i < rLen; i++) {
        for (var j = 0; j < mLen; j++) {
            if (m[j] === r[i]) { //如果找到，就把magazine里面的符号抹掉，并且不再接着到magazine里面找了，而是开始比对ransom里的下一个字母
                m[j] = "";  
                break;
            }
        }
        if (j === mLen){ // 表示已经完全查找了整个magazine，没有找到ransomNote里面的字母。
         return false;           
        }
    }
    
    return true;

};

// 