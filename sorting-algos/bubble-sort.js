/**
 * It's kind of opposite to selection sort in the sense that the largest element gets sorted first
 * Suppose there is an array: [13,46,24,52,20,9]
 * 
 * We start by iteratively comparing adjacent elements and swapping if the first element
 * is greater than the second one, after each iteration the largest element moves to the
 * end of the unsorted portion of the array
 * 
 * Number of iterations = arrayLength - 1 = 6 - 1 = 5
 * 
 * Iteration 1: 
 * this is how the array looks like initially -> [13,46,24,52,20,9]
 * pointerLimit = arrayLength - 1 - iterationNum = 6 - 1 - 1 = 4
 * - pointer=0, We compare 13 and 46, since 13 < 46(lesser) we do nothing -> [13,46,24,52,20,9]
 * - pointer=1, We compare 46 and 24, since 46 > 24(greater) we swap them -> [13,24,46,52,20,9]
 * - pointer=2, We compare 46 and 52, since 46 < 52(lesser) we do nothing -> [13,24,46,52,20,9]
 * - pointer=3, We compare 52 and 20, since 52 > 20(greater) we swap them -> [13, 24, 46, 20, 52, 9]
 * - pointer=4, We compare 52 and 9, since 52 > 9(greater) we swap them -> [13, 24, 46, 20, 9, 52]
 * 
 * Iteration 2: [13, 24, 46, 20, 9, 52]
 * pointerLimit = arrayLength - 1 - iterationNum = 6 - 1 - 2 = 3
 * - pointer=0, We compare 13 and 24, since 13 < 24(lesser) we do nothing -> [13, 24, 46, 20, 9, 52]
 * - pointer=1, We compare 24 and 46, since 24 < 46(lesser) we do nothing  -> [13, 24, 46, 20, 9, 52]
 * - pointer=2, We compare 46 and 20, since 46 > 20(greater) we swap them -> [13, 24, 20, 46, 9, 52]
 * - pointer=3, We compare 46 and 9, since 46 > 9(greater) we swap them -> [13, 24, 20, 9, 46, 52]
 * 
 * Iteration 3: [13, 24, 20, 9, 46, 52]
 * pointerLimit = arrayLength - 1 - iterationNum = 6 - 1 - 3 = 2
 * - pointer=0, We compare 13 and 24, since 13 < 24(lesser) we do nothing -> [13, 24, 20, 9, 46, 52]
 * - pointer=1, We compare 24 and 20, since 24 > 20(greater) we swap them -> [13, 20, 24, 9, 46, 52]
 * - pointer=2, We compare 24 and 9, since 24 > 9(greater) we swap them -> [13, 20, 9, 24, 46, 52]
 * 
 * Iteration 4: [13, 20, 9, 24, 46, 52]
 * pointerLimit = arrayLength - 1 - iterationNum = 6 - 1 - 4 = 1
 * - pointer=0, We compare 13 and 20, since 13 < 20(lesser) we do nothing -> [13, 20, 9, 24, 46, 52]
 * - pointer=1, We compare 20 and 9, since 20 > 9(greater) we swap them -> [13, 9, 20, 24, 46, 52]
 * 
 * Iteration 5: [13, 9, 20, 24, 46, 52]
 * pointerLimit = arrayLength - 1 - iterationNum = 6 - 1 - 4 = 1
 * - pointer=0, We compare 13 and 9, since 13 > 9(greater) we swap -> [9, 13, 20, 24, 46, 52]
 */
var sortArray = function (nums) {
    const arrayLength = nums.length;
    for (i = arrayLength - 1; i > 0; i--) {
        for (j = 0; j < i; j++) {
            if(nums[j] > nums[j+1]) {
                let swap = nums[j+1];
                nums[j+1] = nums[j];
                nums[j] = swap;
            }
        }
    }
    return nums;
};