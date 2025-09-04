/**
 * MERGE SORT - Divide and merge algorithm
 * Time complexity: O(n log2(n))
 * Space complexity: O(n)
 * 
 * pseudocode
 * 
 mergeSort(arr, low, high) {
    if(low < high) {
        let mid = (low+high)/2;
        mergeSort(arr, low, mid);
        mergeSort(arr, mid+1, high);
        merge(arr, low, mid, high);
    } else {
        return;
    }
 }

 pseudocode for merge
 mergeArray(arr, low, mid, high) {
    left = low;
    right = mid+1;
    tempArray = [];

    While(left<=mid and right<=high) {
        if(left<=right) {
            tempArray.push(left);
            left++;
        } else {
            tempArray.push(right);
            right++;  
        }
    }

    while(left<=mid) {
        tempArray.push(left);
        left++;   
    }

    while(right<=high) {
        tempArray.push(left);
        left++;  
    }

    for(i = low; i <= high; i++) {
        arr[i] = temp[i - low];
    }
 }
 * 
 */

function mergeArray(arr, low, mid, high) {
    let left = low;
    let right = mid + 1;
    let temp = [];

    while (left <= mid && right <= high) {
        if (arr[left] <= arr[right]) {
            temp.push(arr[left]);
            left++;
        } else {
            temp.push(arr[right]);
            right++;
        }
    }

    while (left <= mid) {
        temp.push(arr[left]);
        left++;
    }

    while (right <= high) {
        temp.push(arr[right]);
        right++;
    }

    for(let i=low; i<=high; i++) {
        arr[i] = temp[i-low];
    }
}

function mergeSort(arr, low, high) {
    if (low < high) {
        const mid = Math.floor((low + high) / 2);
        mergeSort(arr, low, mid);
        mergeSort(arr, mid + 1, high);
        mergeArray(arr, low, mid, high);
    }
    else {
        return;
    }
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    mergeSort(nums, 0, nums.length - 1);
    return nums;
};
