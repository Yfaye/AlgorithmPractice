/*
165. Compare Version Numbers
Total Accepted: 54950 Total Submissions: 309300 Difficulty: Easy

Compare two version numbers version1 and version2.
If version1 > version2 return 1, if version1 < version2 return -1, otherwise return 0.

You may assume that the version strings are non-empty and contain only digits and the . character.
The . character does not represent a decimal point and is used to separate number sequences.
For instance, 2.5 is not "two and a half" or "half way to version three", it is the fifth second-level revision of the second first-level revision.

Here is an example of version numbers ordering:

0.1 < 1.1 < 1.2 < 13.37

Credits:
Special thanks to @ts for adding this problem and creating all test cases.
*/


/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    var v1Arr = version1.split('.').map(function(s){return parseInt(s);});
    var v2Arr = version2.split('.').map(function(s){return parseInt(s);});
    //console.log(v1Arr);
    //console.log(v2Arr);
    
    for (var i = 0, j = 0; i < v1Arr.length && j < v2Arr.length; i++, j++) {
        if (v1Arr[i] < v2Arr[j]) {
            return -1;
        }
        if (v1Arr[i] > v2Arr[j]) {
            return 1;
        }
    }
    //console.log('i is '+ i + ' and j is ' + j);
    while (j < v2Arr.length) {
        //console.log('v2Arr at j is: ' + v2Arr[j]);
        if (v2Arr[j] > 0) {
            return -1;
        }
        j++;
    }
    while (i < v1Arr.length) {
        //console.log('v1Arr at i is: ' + v1Arr[i]);
        if (v1Arr[i] > 0) {
            //console.log('should return 1 now');
            return 1;
        }
        i++;
    }
    return 0;
};