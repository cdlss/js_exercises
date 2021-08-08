
/**
  Find the leftmost digit that occurs in a given string.

  **Example**
  -   For inputString = "var_1__Int", the output should be
  firstDigit(inputString) = '1';
  
  -   For inputString = "q2q-q", the output should be
  firstDigit(inputString) = '2';
  
  -   For inputString = "0ss", the output should be
  firstDigit(inputString) = '0'.
  
  **Hints**
  -   split()
  -   includes()
  
  **Input/Output**
  - **[execution time limit] 5 seconds (ts)**
  - **[input] string inputString**
  
  A string containing at least one digit.
  
  *Guaranteed constraints:*
  3 ≤ inputString.length ≤ 10.
  
  - **[output] char**
*/


function firstDigit(inputString) {
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const chars = inputString.split('');

  for (let i = 0; i < inputString.length; i++) {
      if (digits.includes(digits[i])) {
        return inputString[i];
      }
  }
}

console.log(firstDigit('var_1__Int'));
console.log(firstDigit('q2q-q'));
console.log(firstDigit('0ss'));