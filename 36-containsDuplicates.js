/**
  Given an array of integers, write a function that determines whether the array contains any duplicates. 
  Your function should return true if any element appears at least twice in the array, 
  and it should return false if every element is distinct.

  **Example**
  -   For a = [1, 2, 3, 1], the output should be
  containsDuplicates(a) = true.

  There are two 1s in the given array.

  -   For a = [3, 1], the output should be
  containsDuplicates(a) = false.

  The given array contains no duplicates.

  **Hints**
  -   sort()

  **Input/Output**
  - **[execution time limit] 5 seconds (ts)**
  - **[input] array.integer a**
      A sorted array of unique integers.

      *Guaranteed constraints:*

      0 ≤ a.length ≤ 105,
      -2 · 109 ≤ a[i] ≤ 2 · 109.

  - **[output] boolean**
*/

function containsDuplicates(array) {
  a = array.sort((a, b) => a - b);

  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1]) {
      return true;
    }
  }
  return false;
}

console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([3, 1]));