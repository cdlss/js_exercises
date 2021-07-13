/**
    Given a string, replace each its character by the next one in the English alphabet (z would be replaced by a).

    **Example**
    For inputString = "crazy", the output should be
    alphabeticShift(inputString) = "dsbaz".


    **Hints**
    -   split()
    -   indexOf()
    -   join()

    **Input/Output**

    - **[time limit] 4000ms (js)**
    - **[input] string inputString**

    Non-empty string consisting of lowercase English characters.

    *Guaranteed constraints:*

    1 ≤ inputString.length ≤ 10.

    - **[output] string**
    The result string after replacing all of its characters.
*/


// solution 1
function alphabeticShift(inputString) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let shiftedStr = inputString.split('');

    for (let i = 0; i < shiftedStr.length; i++) {
        let index = 0;
        if (shiftedStr[i] !== 'z') {
            index = alphabet.indexOf(shiftedStr[i]) + 1;
        }

        shiftedStr[i] = alphabet[index];
    }

    return shiftedStr.join('');
}

console.log(alphabeticShift('crazy'));


// solution 2
function alphabeticShift2(inputString) {
    const alphabet = {
        'a': 'b', 'b': 'c', 'c': 'd', 
        'd': 'e', 'e': 'f', 'f': 'g',
        'g': 'h', 'h': 'i', 'i': 'j',
        'j': 'k', 'k': 'l', 'l': 'm',
        'm': 'n', 'n': 'o', 'o': 'p',
        'p': 'q', 'q': 'r', 'r': 's',
        's': 't', 't': 'u', 'u': 'v',
        'v': 'w', 'w': 'y', 'y': 'z',
        'z': 'a'
    }

    let shiftedStr = inputString.split('');

    for (let i = 0; i < shiftedStr.length; i++) {
        shiftedStr[i] = alphabet[shiftedStr[i]];
    }

    return shiftedStr.join('');
}

console.log(alphabeticShift2('crazy'));