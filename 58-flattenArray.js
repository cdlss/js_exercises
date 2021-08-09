/**
  Flatten a nested array. You must account for varying levels of nesting.

  **Example**
  -   steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
  -   steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4]
  
  **Hints**
  -   isArray()
  -   push()
*/

function flattenArray(array) {
  const oneArray = [];

  flatten(array);

  function flatten(array) {
    array.forEach((element) => {
      if (Array.isArray(element)) {
        flatten(element);
      } else {
        oneArray.push(element);
      }
    });
  }

  return oneArray;
}

console.log(flattenArray([[["a"]], [["b"]]]));
console.log(flattenArray([1, [2], [3, [[4]]]]));