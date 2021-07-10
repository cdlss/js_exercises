/**
    Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

    Example
    For inputArray = [3, 6, -2, -5, 7, 3], the output should be
    adjacentElementsProduct(inputArray) = 21.

    7 and 3 produce the largest product.

    Input/Output

    - **[time limit] 4000ms (js)**
    - **[input] array.integer inputArray**

    An array of integers containing at least two elements.

    *Guaranteed constraints:*

    2 ≤ inputArray.length ≤ 10,
    -1000 ≤ inputArray[i] ≤ 1000.

    - **[output] integer**

    The largest product of adjacent elements.
*/

function adjacentElementsProduct(array){
    let largestProduct = array[0] * array[1];

    for (let i = 1; i < array.length - 1; i++) {
        const product= array[i] * array[i + 1];
        largestProduct= largestProduct < product ? product : largestProduct;
    }
    return largestProduct;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));