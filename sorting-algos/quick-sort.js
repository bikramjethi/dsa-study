/**
 * 2 RULES
 * 1. pick a pivot -> place it at it's right index, as if the array was sorted
 * 2. smaller on the left, larger on the right
 *
 * Visualiszer: http://hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
 *
 */

function partition(arr, low, high) {
  let pivot = arr[low];
  let i = low;
  let j = high;

  while (i < j) {
    while (arr[i] <= pivot && i <= high - 1) {
      i++;
    }

    while (arr[j] > pivot && j >= low + 1) {
      j--;
    }

    if (i < j) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  arr[low] = arr[j];
  arr[j] = pivot;

  return j;
}

function quickSort(arr, low, high) {
  if (low < high) {
    let pIndex = partition(arr, low, high);
    quickSort(arr, low, pIndex - 1);
    quickSort(arr, pIndex + 1, high);
  }
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  quickSort(nums, 0, nums.length - 1);
  return nums;
};
