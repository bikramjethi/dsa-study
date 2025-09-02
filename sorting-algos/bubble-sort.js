/**
 * 
 * Time complexity: 
 * Average/Worst case: O(n^2)
 * Best case: O(n)
 * 
 * Suppose the list is [5, 1, 4, 2, 8]:
 * Compare 5 and 1. Swap → [1, 5, 4, 2, 8]
 * Compare 5 and 4. Swap → [1, 4, 5, 2, 8]
 * Compare 5 and 2. Swap → [1, 4, 2, 5, 8]
 * Compare 5 and 8. No swap.
 * 
 * Repeat for the remaining unsorted part. Every pass makes the big numbers bubble up to the end.
 */
var sortArray = function (nums) {
    const arrayLength = nums.length;
    for (i = arrayLength - 1; i > 0; i--) {
        /**
         * This `didSwap` implementation ensures the best case complexity of O(n)
         */
        let didSwap = 0;
        for (j = 0; j < i; j++) {
            if(nums[j] > nums[j+1]) {
                didSwap = 1;
                let swap = nums[j+1];
                nums[j+1] = nums[j];
                nums[j] = swap;
            }
        }
        if(didSwap === 0) {
            break;
        }
    }
    return nums;
};