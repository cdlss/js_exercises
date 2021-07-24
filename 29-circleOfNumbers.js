/**
    Consider integer numbers from 0 to n - 1 written down along the circle 
    in such a way that the distance between any two neighboring numbers is equal 
    (note that 0 and n - 1 are neighboring, too).
    Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber.

    **Example**
    For n = 10 and firstNumber = 2, the output should be
    circleOfNumbers(n, firstNumber) = 7.

    ![](https://codefightsuserpics.s3.amazonaws.com/tasks/circleOfNumbers/img/example.png?_tm=1490625697098)

    **Hints**
    -   push()

    **Input/Output**
    - **[time limit] 4000ms (js)**
    - **[input] integer n**

    A positive even integer.

    *Guaranteed constraints:*
    4 ≤ n ≤ 20.

    - **[input] integer firstNumber**

    *Guaranteed constraints:*
    0 ≤ firstNumber ≤ n - 1.
    - **[output] integer**
*/

function circleOfNumbers(n, firstNumber) {
    const numberArray = [];
    const halfWay = n / 2;

    for (let i = 0; i < n; i++) {
        numberArray.push(i);
    }

    if (firstNumber < halfWay) {
        return numberArray[firstNumber + halfWay];
    }

    return numberArray[firstNumber - halfWay];
}

console.log(circleOfNumbers(10, 2));