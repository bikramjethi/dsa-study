/**
 * Reverse an array 
   Given an array arr of n elements. The task is to reverse the given array. 
   The reversal of array should be inplace.

   Examples:
   Input: n=5, arr = [1,2,3,4,5]
   Output: [5,4,3,2,1]
   Explanation: The reverse of the array [1,2,3,4,5] is [5,4,3,2,1]
   
   Input: n=6, arr = [1,2,1,1,5,1]
   Output: [1,5,1,1,2,1]
   Explanation: The reverse of the array [1,2,1,1,5,1] is [1,5,1,1,2,1].

   Leetcode link: https://leetcode.com/problems/reverse-string/
 * 
 */

/**
 * Reverse an array - Using 2 pointers and recursion
 */

function reverse(s, left, right) {
  if (left >= right) {
    return;
  }

  const temp = s[left];
  s[left] = s[right];
  s[right] = temp;

  reverse(s, left + 1, right - 1);
}
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  reverse(s, 0, s.length - 1);
};

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    const temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }

  return s;
};

/**
 * Reverse an array - Using 2 pointers and no recursion
 */

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    const temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }

  return s;
};
