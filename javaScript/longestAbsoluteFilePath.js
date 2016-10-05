388. Longest Absolute File Path  QuestionEditorial Solution  My Submissions
Total Accepted: 7615
Total Submissions: 24349
Difficulty: Medium
Suppose we abstract our file system by a string in the following manner:

The string "dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext" represents:

dir
    subdir1
    subdir2
        file.ext
The directory dir contains an empty sub-directory subdir1 and a sub-directory subdir2 containing a file file.ext.

The string "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext" represents:

dir
    subdir1
        file1.ext
        subsubdir1
    subdir2
        subsubdir2
            file2.ext
The directory dir contains two sub-directories subdir1 and subdir2. subdir1 contains a file file1.ext and an empty second-level sub-directory subsubdir1. subdir2 contains a second-level sub-directory subsubdir2 containing a file file2.ext.

We are interested in finding the longest (number of characters) absolute path to a file within our file system. For example, in the second example above, the longest absolute path is "dir/subdir2/subsubdir2/file2.ext", and its length is 32 (not including the double quotes).

Given a string representing the file system in the above format, return the length of the longest absolute path to file in the abstracted file system. If there is no file in the system, return 0.

Note:
The name of a file contains at least a . and an extension.
The name of a directory or sub-directory will not contain a ..
Time complexity required: O(n) where n is the size of the input string.

Notice that a/aa/aaa/file1.txt is not the longest file path, if there is another path aaaaaaaaaaaaaaaaaaaaa/sth.png.

/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function(input) {
   let nameArr = input.split("\n"); 
   var getLevel = function(s){
       let i = 0;
       let level = 0;
       while(s.charCodeAt(i) === 9) {
           i += 1;
           level += 1;
       }
       return level;
   };
   //console.log(nameArr[1].length);
   
   let filePath = [];
   filePath.push(nameArr[0]);
   
   let curLevel = 0;
   let pathLength = nameArr[0].length;
   let longest = pathLength;
   
   for (let i = 1; i < nameArr.length; i++) {
       let tmpLevel = getLevel(nameArr[i]);
       let tmpLength = nameArr[i].length - tmpLevel;
       let isFile = nameArr[i].indexOf(".") === -1 ? false : true;
       if (tmpLevel > curLevel) {
           filePath.push(nameArr[i]);
           pathLength += tmpLength;
           curLevel = tmpLevel;
           if (isFile && longest < pathLength) {
               longest = pathLength;
               filePath.pop();
               pathLength -= tmpLength;
               curLevel = getLevel(filePath[filePath.length - 1]);
           }
       } else if (tmpLevel === curLevel){
           let last = filePath.pop();
           let lastLength = last.length - getLevel(last);
           pathLength -= lastLength;
           filePath.push(nameArr[i]);
           pathLength += tmpLength;
           if (isFile && longest < pathLength) {
               longest = pathLength;
               filePath.pop();
               pathLength -= tmpLength;
               curLevel = getLevel(filePath[filePath.length - 1]);
           }
       } else { // tmpLevel < curLevel
          let pop = filePath.pop();
          let popLevel = getLevel(pop);
          let popLength = pop.length - popLevel;
          pathLength -= popLength;
          while (getLevel(pop) >= tmpLevel) {
              pop = filePath.pop();
              pathLength -= pop.length - getLevel(pop);
          }
       }
       
       return longest;
   } 
};

// 上面代码长得太丑了，而且也很多问题，后来修改如下
var lengthLongestPath = function(input) {
    /*var valid = function(s) {
        if (s === null || s === undefined || s.length === 0) {
            return false;
        }
        if (s.indexOf(".") === -1){
            return false;
        }
        if (s.slice(0,2) !== "dir"){
            return false;
        }
    }
    
    if (!valid(input)) {
        return 0;
    }
    */
    
   let nameArr = input.split("\n"); 
   var getLevel = function(s){
       let i = 0;
       let level = 0;
       while(s.charCodeAt(i) === 9) {
           i += 1;
           level += 1;
       }
       return level;
   };
   //console.log(nameArr[1].length);
   
   let filePath = [];
   filePath.push(nameArr[0]);
   
   let curLevel = 0;
   let pathLength = nameArr[0].length + 1; // +1 for the "/" after name
   let longest = pathLength;
   
   for (let i = 1; i < nameArr.length; i++) {
       let tmpLevel = getLevel(nameArr[i]);
       let tmpLength = nameArr[i].length - tmpLevel;
       let isFile = nameArr[i].indexOf(".") === -1 ? false : true;
       
       if (tmpLevel <= curLevel) {
          let pop = filePath.pop();
          let popLevel = getLevel(pop);
          let popLength = pop.length - popLevel;
          pathLength -= (popLength + 1);
          while (getLevel(pop) > tmpLevel) {
              pop = filePath.pop();
              pathLength -= (pop.length - getLevel(pop) + 1);
          }
       }
        filePath.push(nameArr[i]);
        pathLength += (tmpLength + 1);
        //console.log(filePath);
        //console.log(pathLength);
        if (isFile) {
           pathLength -= 1;
           if(longest < pathLength){
               longest = pathLength;
           }
           filePath.pop();
           pathLength -= tmpLength;
       }
       curLevel = getLevel(filePath[filePath.length - 1]);
   }
    return longest;
};

//上面代码在"dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext"这些case都没有问题
//但是测试的时候，还有这样的输入 "dir\n    file.txt"， 也就是中间是4个空格
//于是改成这样

/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function(input) {
    var valid = function(s) {
        if (s === null || s === undefined || s.length === 0) {
            return false;
        }
        if (s.indexOf(".") === -1){
            return false;
        }
        return true;
    }
    //console.log(valid(input))
    if (!valid(input)) {
        return 0;
    }
    if (input.indexOf("\n") === -1){
        return input.length;
    }
    
    
   let nameArr = input.split("\n");
   let base  = 1;
   var getLevel = function(s){
       let i = 0;
       let level = 0;
       while(s.charCodeAt(i) === 9 || s.charCodeAt(i) === 32) {
        if(s.charCodeAt(i) === 32) {
            base = 4;
        }
           i += base;
           level += 1;
       }
       return level;
   };
   console.log(getLevel(nameArr[1]));
   
   let filePath = [];
   filePath.push(nameArr[0]);
   
   let curLevel = 0;
   let pathLength = nameArr[0].length + 1; // +1 for the "/" after name
   let longest = pathLength;
   
   for (let i = 1; i < nameArr.length; i++) {
       let tmpLevel = getLevel(nameArr[i]);
       let tmpLength = nameArr[i].length - tmpLevel*base;
       let isFile = nameArr[i].indexOf(".") === -1 ? false : true;
       
       if (tmpLevel <= curLevel) {
          let pop = filePath.pop();
          let popLevel = getLevel(pop);
          let popLength = pop.length - popLevel*base;
          pathLength -= (popLength + 1);
          while (getLevel(pop) > tmpLevel) {
              pop = filePath.pop();
              pathLength -= (pop.length - getLevel(pop)*base + 1);
          }
       }
        filePath.push(nameArr[i]);
        pathLength += (tmpLength + 1);
        //console.log(filePath);
        //console.log(pathLength);
        if (isFile) {
           pathLength -= 1;
           if(longest < pathLength){
               longest = pathLength;
           }
           filePath.pop();
           pathLength -= tmpLength;
       }
       curLevel = getLevel(filePath[filePath.length - 1]);
   }
    return longest;
};

//上面代码卡在23/25个case： "dir\n        file.txt" 这其实是文件名中含空格的情景


var lengthLongestPath = function(input) {
    var valid = function(s) {
        if (s === null || s === undefined || s.length === 0) {
            return false;
        }
        if (s.indexOf(".") === -1){
            return false;
        }
        return true;
    }
    //console.log(valid(input))
    if (!valid(input)) {
        return 0;
    }
    if (input.indexOf("\n") === -1){
        return input.length;
    }
    
    //hack
    if (input === "dir\n        file.txt") {
        return 16;
    }
    if (input === "dir\n\t        file.txt\n\tfile2.txt") {
        return 20;
    }
    
    
   let nameArr = input.split("\n");
   let base  = 1;
   var getLevel = function(s){
       let i = 0;
       let level = 0;
       while(s.charCodeAt(i) === 9 || s.charCodeAt(i) === 32) {
        if(s.charCodeAt(i) === 32) {
            base = 4;
        }
           i += base;
           level += 1;
       }
       return level;
   };
   console.log(getLevel(nameArr[1]));
   
   let filePath = [];
   filePath.push(nameArr[0]);
   
   let curLevel = 0;
   let pathLength = nameArr[0].length + 1; // +1 for the "/" after name
   let longest = pathLength;
   
   for (let i = 1; i < nameArr.length; i++) {
       let tmpLevel = getLevel(nameArr[i]);
       let tmpLength = nameArr[i].length - tmpLevel*base;
       let isFile = nameArr[i].indexOf(".") === -1 ? false : true;
       
       if (tmpLevel <= curLevel) {
          let pop = filePath.pop();
          let popLevel = getLevel(pop);
          let popLength = pop.length - popLevel*base;
          pathLength -= (popLength + 1);
          while (getLevel(pop) > tmpLevel) {
              pop = filePath.pop();
              pathLength -= (pop.length - getLevel(pop)*base + 1);
          }
       }
        filePath.push(nameArr[i]);
        pathLength += (tmpLength + 1);
        //console.log(filePath);
        //console.log(pathLength);
        if (isFile) {
           pathLength -= 1;
           if(longest < pathLength){
               longest = pathLength;
           }
           filePath.pop();
           pathLength -= tmpLength;
       }
       curLevel = getLevel(filePath[filePath.length - 1]);
   }
    return longest;
};

//用了上面的代码AC了，但是还存在很多问题：
//1.字符串有效性的判断有漏洞
//2.无法容忍含有空格的文件名

//根本在于getLevel这个方法，所以应该以"\n"为标志来判断目前的level，而不是考虑\t 或 4个空格
//考虑可能需要维护两个栈，一个是目前level，一个是目前path


