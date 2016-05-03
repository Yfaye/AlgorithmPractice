/*
171. Excel Sheet Column Number
Total Accepted: 70187 Total Submissions: 171949 Difficulty: Easy

Related to question Excel Sheet Column Title

Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 
*/

var titleToNumber = function(s) {
    
    var digits = s.length - 1;
    var columnIndex = 0;
    
    for (var i = 0; i < s.length; i++){
        columnIndex += parseInt(s.charCodeAt(i)-'A'.charCodeAt(0) + 1) * Math.pow(26, digits);
        digits--;
    }
    
    return columnIndex;
    
};
titleToNumber('BA');

/*
53
*/