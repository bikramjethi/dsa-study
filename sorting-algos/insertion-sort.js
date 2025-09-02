/**
 * Average case: O(n^2)
 * Best case: O(n)
 *
 * It always takes an element and places it in the correct order
 * 
 * Suppose the list is [8, 5, 3, 9, 4]:
 * 
 * Pick 5. It’s smaller than 8, so put it before: [5, 8, 3, 9, 4]
 * 
 * Pick 3. It’s smaller than both 5 and 8, so put at front: [3, 5, 8, 9, 4]
 * 
 * Pick 9. It's larger than 8, leave it: [3, 5, 8, 9, 4]
 * 
 * Pick 4. It fits between 3 and 5: [3, 4, 5, 8, 9]
 * 
 * Key Points
 * Always keeps a sorted part in the list and grows it one by one.
 * Works best for small lists, or when the list is nearly sorted already.
 * Very easy to understand and good for teaching how sorting works.
 */

var sortArray = function (nums) {
  const arrayLength = nums.length;
  for (i = 0; i < arrayLength; i++) {
    let j = i;
    while (j > 0) {
      if (nums[j - 1] > nums[j]) {
        const temp = nums[j - 1];
        nums[j - 1] = nums[j];
        nums[j] = temp;
      }
      j--;
    }
  }
  return nums;
};
