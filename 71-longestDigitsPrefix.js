/**
  Given a string, output its longest prefix which contains only digits.

**Example**
For inputString="123aa1", the output should be
longestDigitsPrefix(inputString) = "123".

**Hints**
-   split()
-   includes()
-   push()
-   join()

**Input/Output**
- **[time limit] 4000ms (js)**
- **[input] string inputString**

*Guaranteed constraints:*
3 ≤ inputString.length ≤ 35.
- **[output] string**
*/


function longestDigitsPrefix(inputString) {
    const chars = inputString.split(' ');
    let prefix = '';

    for (const char of inputString) {
      const num = parseInt(char, 10);
      if (isNaN(num)) {
        break;
      }
      prefix += char;
    }
    return prefix;
}

console.log(longestDigitsPrefix('123aa1'));