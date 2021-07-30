/**
    Given a string, find the number of different characters in it.

    **Example**
    For s = &quot;cabca&quot;, the output should be
    differentSymbolsNaive(s) = 3.

    There are 3 different characters a, b and c.

    **Hints**
    -   includes()
    -   split()
    -   push()

    **Input/Output**
    - **[execution time limit] 4 seconds (js)**
    - **[input] string s**

        A string of lowercase English letters.  

        *Guaranteed constraints:*

        3 ≤ s.length ≤ 1000.

    - **[output] integer**
*/

function differentSymbolsNaive(string) {
  const uniqueChars = [];
  const inputChars = string.split('');

  inputChars.forEach((char) => {
    if (!uniqueChars.includes(char)) {
      uniqueChars.push(char);
    }
  });

  return uniqueChars.length;
}

console.log(differentSymbolsNaive('cabca'));


// Solution 2:
// function differentSymbolsNaive2(string) {
//   const inputChars = {};
//   const inputChars = string.split('');

//   inputChars.forEach((char) => {
//     uniqueChars[char] = 1;
//   });

//   return Object.keys(uniqueChars).length;
// }

// console.log(differentSymbolsNaive2('cabca'));


// Solution 3:
// function differentSymbolsNaive3(string) {
//     const uniqueChars = new Set();
//     const inputChars = string.split('');

//     inputChars.forEach((char) =>{
//       uniqueChars.add(char);
//     });

//     return uniqueChars.size;
// }

// console.log(differentSymbolsNaive3('cabca'));