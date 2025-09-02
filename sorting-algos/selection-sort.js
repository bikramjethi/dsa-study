/**
 * Time complexity: O(n^2)
 * 
 * Easiest of the sorting algos:
 * Suppose the list is [64, 25, 12, 22, 11]:
 * 
 * Find the smallest: 11. Swap it with the first number → [11, 25, 12, 22, 64]
 * 
 * Find next smallest in rest: 12. Swap → [11, 12, 25, 22, 64]
 * 
 * Next smallest is 22. Swap → [11, 12, 22, 25, 64]
 * 
 * Continue until the list is fully sorted....
 * 
 * Summary of Key Ideas:
 * Always pick the smallest (or largest, if sorting in reverse) from what's left.
 * Move it to its right position.
 * Repeat until the list is sorted.
 * Works well for learning, but is slow for very big lists.
 * 
 */

var sortArray = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }
    let swapItem = nums[i];
    nums[i] = nums[minIndex];
    nums[minIndex] = swapItem;
  }
  return nums;
};
