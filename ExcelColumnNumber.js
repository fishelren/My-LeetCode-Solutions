/**
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

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var sum = 0;
    for(var i = s.length -1; i >= 0; i--){
        sum += Math.pow(26, s.length - 1 - i) * (s.codePointAt(i) - 64);
    }
    return sum;
};