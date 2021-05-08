var reverse = function(x) {
    var isNegative = false;
    if(x < 0){
        isNegative = true;
        x *= -1;
    };
    var reverseX = parseInt(String(x).split('').reverse((a,b) => a - b).join(''));
    if(reverseX > 0x7FFFFFFF){
      return 0;
    }
    if(isNegative){
        return -1 * reverseX
    } else {
        return reverseX;
    }
};
