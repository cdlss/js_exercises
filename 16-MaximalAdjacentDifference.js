/**
    Given an array of integers, find the maximal absolute difference between any two of 
    its adjacent elements.

    Example
    For inputArray = [2, 4, 1, 0], the output should be
    arrayMaximalAdjacentDifference(inputArray) = 3.

    For inputArray = [2, 9, 1, 0], the output should be
    arrayMaximalAdjacentDifference(inputArray) = 8.

    Hints
    -   Math.abs()

    Input/Output
    - **[time limit] 4000ms (js)**
    - **[input] array.integer inputArray**

    Guaranteed constraints:
    3 ≤ inputArray.length ≤ 10,
    -15 ≤ inputArray[i] ≤ 15.

    - [output] integer
    The maximal absolute difference.

*/

function arrayMaximalAdjacentDifference(inputArray) {
    let maxDiff = Math.abs(inputArray[0] - inputArray[1]);

    for (let i = 0; i < inputArray.length; i++) {
        let absoluteDiff = Math.abs(inputArray[i - 1] - inputArray[i]);
        maxDiff = absoluteDiff > maxDiff ? absoluteDiff : maxDiff;
    }

    return maxDiff;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));