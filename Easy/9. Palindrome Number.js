/*Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.
*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    var isneg=false;
    if (x<0){
        return false;
    }
    
    else if(x>=0){
       var revnum=parseInt(String(x).split('').reverse().join(''));
       if(x===revnum)
        {
            return true;
        }
        else{
            return false;
        }}
};
 
