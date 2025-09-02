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
  let itrCount = 0;
  console.log({ arrayLength, itrCount });
  for (i = 0; i < arrayLength; i++) {
    let j = i + 1;
    while (j > 0) {
        itrCount++;
      if (nums[j] < nums[j - 1]) {
        const temp = nums[j];
        nums[j] = nums[j - 1];
        nums[j - 1] = temp;
      } else {
        break;
      }
      j--;
    }
  }

  console.log({ arrayLength, itrCount });
  return nums;
};

console.log(sortArray([3, 2, 5, 7, 7, 3, 2, 6, 9, 7]));

/**
 * Created itrCount to count the iterations across nested loops
 * for the above array the output was
 * 
 * { arrayLength: 10, itrCount: 55 }
 * [ 2, 2, 3, 3, 5, 6, 7, 7, 7, 9]
 * 
 * Now let us try to add a break logic within the while loop in case of an else condition
 * 
    else {
        break;
    }
    Output still valid: [ 2, 2, 3, 3, 5, 6, 7, 7, 7, 9]
    And the iterationCount has reduced: { arrayLength: 10, itrCount: 21 }
 */
