/**
    Find the missing letter in the passed letter range and return it.
    If all letters are present in the range, return undefined.

    **Example**
    -   missingLetters("abce") should return "d".
    -   missingLetters("abcdefghjklmno") should return "i".
    -   missingLetters("abcdefghijklmnopqrstuvwxyz") should return undefined.

    **Hints**
    -   split()
*/

function missingLetters(str) {
   const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
   const chars = str.split('');

   if (chars[0] !== 'a') {
     return undefined;
   }

   for (let i = 0; i < chars.length; i++) {
     if (chars[i] !== alphabet[i]) {
       return alphabet[i];
     }
   }
   return undefined;
}


console.log(missingLetters("abce"));
console.log(missingLetters("abcdefghjklmno"));
console.log(missingLetters("abcdefghijklmnopqrstuvwxyz"));