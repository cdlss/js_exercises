/**
  Given a string, find out if its characters can be rearranged to form a palindrome.

  **Example**
  For inputString = "aabb", the output should be
  palindromeRearranging(inputString) = true.
  
  We can rearrange "aabb" to make "abba", which is a palindrome.
  
  **Hints**
  -   split()
  -   hasOwnProperty()
  
  
  **Input/Output**
  - **[time limit] 4000ms (js)**
  - **[input] string inputString**
  
  A string consisting of lowercase English letters.
  
  *Guaranteed constraints:*
  1 ≤ inputString.length ≤ 50.
  
  - **[output] boolean**
  true if the characters of the inputString can be rearranged to form a palindrome, false otherwise.

*/

function palindromeRearranging(inputString) {
  const chars = inputString.split('');
  const charCount = {};
  let oddCount = 0;

  for (const char of chars) {
    if (charCount.hasOwnProperty(char)) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  for (let key in charCount) {
    if (charCount[key] % 2 !== 0) {
      oddCount++;
    }
  }

  return oddCount > 1 ? false : true ;
}

console.log(palindromeRearranging('aabb'));