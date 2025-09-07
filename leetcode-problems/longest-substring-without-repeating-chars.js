/** 
 * 3. Longest Substring Without Repeating Characters
Medium
Topics
premium lock icon
Companies
Hint
Given a string s, find the length of the longest substring without duplicate characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.

*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let longString = "";
  let stringMap = {};
  let stringPointer = 0;

  while (stringPointer < s.length) {
    let currentString = "";
    for (let i = stringPointer; i <= s.length - 1; i++) {
      let currentChar = s[i];
      if (stringMap[currentChar]) {
        if (longString.length < currentString.length) {
          longString = currentString;
        }
        stringMap = {};
        break;
      } else {
        currentString += currentChar;
        stringMap[currentChar] = true;
      }
    }
    stringPointer++;
  }
  return longString.length;
};
