/**
    Compare two integers given as strings.
    **Example**
    -   For a = "12" and b = "13", the output should be compareIntegers(a, b) = "less";
    -   For a = "875" and b = "799", the output should be compareIntegers(a, b) = "greater";
    -   For a = "1000" and b = "1000", the output should be compareIntegers(a, b) = "equal".
    
    **Hints**
    -   parseInt()
    
    **Input/Output**
    
    - **[execution time limit] 5 seconds (ts)**
    - **[input] string a**
        A string representing a positive integer without leading zeroes.
    
        *Guaranteed constraints:*
    
        1 ≤ a.length ≤ 10.
    
    - **[input] string b**
    
        A string representing a positive integer without leading zeroes.
    
        *Guaranteed constraints:*
        1 ≤ b.length ≤ 10
    
    -   **[output] string**
        'less' if int(a) < int(b), 'equal' if int(a) = int(b), and 'greater' if int(a) > int(b), 
        where int(x) is equal to integer represented by the string x.

*/

function compareIntegers(a, b) {
  return parseInt(a) > parseInt(b)  ? 'greater' : parseInt(a) < parseInt(b) ? 'less' : 'equal';
}

console.log(compareIntegers('12', '13'));
console.log(compareIntegers('875', '799'));
console.log(compareIntegers('1000', '1000'));