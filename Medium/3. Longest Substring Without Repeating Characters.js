/*Given a string s, find the length of the longest substring without repeating characters.*/
var lengthOfLongestSubstring = function(s) {
    
    len = s.length;
     let longestSubstringLength = 0; 
    if(len==1){
       return 1;
       }
      let hashTable = {}; 
    var strings = s.split("");
     let start = 0;
    
    //iterate over the array
  for(let i = 0; i < len; i++) {

      if(hashTable[strings[i]] !==undefined && hashTable[strings[i]] >= start) {
          start = hashTable[strings[i]] + 1
      }

      hashTable[strings[i]] = i;
      longestSubstringLength = Math.max(longestSubstringLength, (i-start + 1))
  }
    
 return longestSubstringLength;
    
};
