/*6. ZigZag Conversion
Total Accepted: 91912 Total Submissions: 377604 Difficulty: Easy

The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R

And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string text, int nRows);

convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR". 
*/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (s === undefined || s.length === 0) {
        return "";
    }
    
    if (s.length <= numRows || numRows === 1) {
        return s;
    }
    
    var zigzag = '';
    var gap = 2*numRows - 2;
    
    for (var row = 0; row < numRows; row++) {
        if (row === 0 || row === numRows - 1 ) {
            var index = row;
            while (index < s.length) {
                zigzag = zigzag + s.charAt(index);
                index = index + gap;
            }
        } else {
            var evenIndex = row;
            var oddIndex = row + 2*(numRows - 1 - row);
            var count = 0;
            while (evenIndex < s.length && oddIndex < s.length) {
                if (count % 2 === 0) {
                    zigzag = zigzag + s.charAt(evenIndex);
                    evenIndex = evenIndex + gap;
                    count++;
                } else {
                    zigzag = zigzag + s.charAt(oddIndex);
                    oddIndex = oddIndex + gap;
                    count++;
                }
            }
        }
    }    
    return zigzag;
};
