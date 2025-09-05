function partition3way(arr, low, high) {
  // Randomize pivot
  const pivotIdx = Math.floor(Math.random() * (high - low + 1)) + low;
  [arr[low], arr[pivotIdx]] = [arr[pivotIdx], arr[low]];
  let pivot = arr[low];
  let lt = low,
    i = low + 1,
    gt = high;

  while (i <= gt) {
    if (arr[i] < pivot) {
      [arr[lt], arr[i]] = [arr[i], arr[lt]];
      lt++;
      i++;
    } else if (arr[i] > pivot) {
      [arr[i], arr[gt]] = [arr[gt], arr[i]];
      gt--;
    } else {
      i++;
    }
  }
  // Returns the bounds of the equal-to-pivot section
  return [lt, gt];
}

function quickSort(arr, low, high) {
  if (low < high) {
    const [lt, gt] = partition3way(arr, low, high);
    quickSort(arr, low, lt - 1);
    quickSort(arr, gt + 1, high);
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
