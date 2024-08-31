/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

// function isPalindrome(str) {
//   const lowercasestr = str.toLowerCase().replace(/\s+/g, "").replace(/[^a-z0-9]/gi, '').trim();

//   const len = lowercasestr.length;

//   for (let i = 0; i < len/2; i++) {
    
//     if(lowercasestr[i] !=lowercasestr[len-i-1]){
//       return false;
//     }
//   }
//   return true;
// }



function isPalindrome(str){
  const lowercasestr = str.toLowerCase();
  const strclean = lowercasestr.split('').filter(character => character>='a' && character<='z').join('');
  const reversestr = strclean.split('').reverse().join('');

  return strclean === reversestr;
}

module.exports = isPalindrome;
