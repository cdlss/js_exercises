/** 
    Check whether the given string is a subsequence of the plaintext alphabet.

    Example
    - For s = "effg" or s = "cdce", the output should be
    alphabetSubsequence(s) = false

    - For s = "ace" or s = "bxz", the output should be
    alphabetSubsequence(s) = true.

    Hints
    -   size property
    -   charCodeAt()
    -   split()

    Input/Output
    - **[execution time limit] 5 seconds (ts)**
    - **[input] string s**

    *Guaranteed constraints:*
    2 ≤ s.length ≤ 15.

    [output] boolean
    true if the given string is a subsequence of the alphabet, false otherwise.
*/

function alphabetSubsequence(strings) {
    const chars = strings.split('');
    const charValues = [];

    chars.forEach(char => {
        charValues.push(char.charCodeAt(0));
    })

    if (new Set(charValues).size !== charValues.length) {
        return false;
    }

    for (let i = 0; i < charValues.length - 1; i++) {
        if (charValues[i] >= charValues[i + 1]) {
            return false;
        }
        
    }
    return true;
}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
 
