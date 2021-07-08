/**
    1. Write a function that returns the sum of two numbers.
    2. Write a function that returns the sum of all numbers regardless of # of params.

    Example
    For param1 = 1 and param2 = 2, the output should be
    add(param1, param2) = 3.
*/

function addTwoNumbers(num1, num2) {
    if (num1 !== 'number' || num2 !== 'number') {
        return `enter number type`;
    }
    return num1 + num2;
}

console.log(addTwoNumbers(1, 2));
console.log(addTwoNumbers(3, 2));


function addNumbers(...numbers) {
    const sum = numbers.reduce((a, b) => a + b, 0);
     return sum;
}
console.log(addNumbers(1,2,3,4,5));
console.log(addNumbers(2,3));