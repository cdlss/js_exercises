/**
    Given two strings, find the number of common characters between them.

    **Example**
    For s1 = "aabcc" and s2 = "adcaa", the output should be
    commonCharacterCount(s1, s2) = 3.

    Strings have 3 common characters - 2 "a"s and 1 "c".

    **Hints**
    -   split()
    -   hasOwnProperty()

    **Input/Output**
    - **[time limit] 4000ms (js)**
    - **[input] string s1**

    A string consisting of lowercase latin letters a-z.

    *Guaranteed constraints:*
    1 ≤ s1.length ≤ 15.

    - **[input] string s2**
    A string consisting of lowercase latin letters a-z.

    *Guaranteed constraints:*
    1 ≤ s2.length ≤ 15.

    **[output] integer**
*/

function commonCharacterCount(s1, s2) {
   const s1Chars = s1.split('');
   const s2Chars = s2.split('');
   const s1CharCount = getCharList(s1Chars);
   const s2CharCount = getCharList(s2Chars);
   let total = 0;

    for (const prop in s1CharCount) {
        if (s2CharCount.hasOwnProperty(prop)) {
            if (s2CharCount[prop] < s1CharCount[prop]) {
                total += s2CharCount[prop];
            } else {
                total += s1CharCount[prop];
            }
        }
    }
    return total;
}

function getCharList(chars) {
    const wordCount = {};

    for (let i = 0; i < chars.length; i++) {
        if (wordCount.hasOwnProperty(chars[i])) {
            wordCount[chars[i]]++;
        } else {
            wordCount[chars[i]] = 1;
        }
    }
    return wordCount;
}

console.log(commonCharacterCount('aabcc', 'adcaa'));