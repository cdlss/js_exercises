/**
    Given a character, check if it represents an odd digit, an even digit or not a digit at all.

    **Example**
    -   For symbol = '5', the output should be
    characterParity(symbol) = "odd";
    -   For symbol = '8', the output should be
    characterParity(symbol) = "even";
    -   For symbol = 'q', the output should be
    characterParity(symbol) = "not a digit".

    **Hints**
    -   isNaN()
    -   parseInt()

    **Input/Output**
    -   **[execution time limit] 5 seconds (ts)**
    -   **[input] char symbol**
    -   **[output] string**
*/

function characterParity(symbol) {
   const result = parseInt(symbol);

   return isNaN(result) ? 'not a digit' : result % 2 === 0 ? 'even' : 'odd';
}

console.log(characterParity('5'))
console.log(characterParity('8'))
console.log(characterParity('q'))