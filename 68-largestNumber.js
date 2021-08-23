/**

  **Example**
  - For n = 2, the output should be largestNumber(n) = 99.

  **Hints**
  -   concat()
  -   parseInt()

  **Input/Output**
  - **[execution time limit] 4 seconds (js)**
  - **[input] integer n**

  *Guaranteed constraints:*
  1 ≤ n ≤ 9.

  - **[output] integer**

  - *Guaranteed constraints:*
  The largest integer of length n.

*/


function largestNumber(n) {
 return parseInt('9'.repeat(n));
}

console.log(largestNumber(2));