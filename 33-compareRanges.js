/**
  Given a sorted integer array that does not contain any duplicates, 
  return a summary of the number ranges it contains.

  **Example**
  -   For nums = [-1, 0, 1, 2, 6, 7, 9], the output should be
  composeRanges(nums) = ["-1->2", "6->7", "9"].

  **Hints**
  -   push()

  **Input/Output**
  - **[execution time limit] 5 seconds (ts)**
  - **[input] array.integer nums**
      A sorted array of unique integers.

      *Guaranteed constraints:*

      0 ≤ nums.length ≤ 15,
      (231 - 1) ≤ nums[i] ≤ 231 - 1.

  - **[output] array.string**
*/

function composeRanges(nums) {
  if (nums.length < 1) return [];

  const ranges = [{start: nums[0], end: nums[0]}];

  for (let i = 0; i < nums.length; i++) {
    if (ranges[ranges.length -1].end + 1 === nums[i]) {
      ranges[ranges.length - 1].end = nums[i];
    } else {
      ranges.push({start: nums[i], end: nums[i]});
    }
  }

  for (let i = 0; i < ranges.length; i++) {
    if (ranges[i].start !== ranges[i].end) {
      ranges[i] = `${ranges[i].start} -> ${ranges[i].end}`;
    } else {
      ranges[i] = ranges[i].start.toString();
    }
  }

  return ranges;
}


console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]));