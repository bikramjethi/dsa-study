/**
 * 125. Valid Palindrome
 * 
    A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

    Given a string s, return true if it is a palindrome, or false otherwise.

    Example 1:
    Input: s = "A man, a plan, a canal: Panama"
    Output: true
    Explanation: "amanaplanacanalpanama" is a palindrome.
    
    Example 2:
    Input: s = "race a car"
    Output: false
    Explanation: "raceacar" is not a palindrome.

    Example 3:
    Input: s = " "
    Output: true
    Explanation: s is an empty string "" after removing non-alphanumeric characters.
    Since an empty string reads the same forward and backward, it is a palindrome.
 */

function cleanString(s) {
  return s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // Use a regular expression to match any character that is NOT a letter (a-z, A-Z) or a digit (0-9).
  // The 'g' flag ensures that all occurrences are replaced, not just the first one.
  const newStr = cleanString(s);

  let i = 0;
  let j = newStr.length - 1;

  while (i < j) {
    console.log({ i, j });
    if (newStr[i] !== newStr[j]) {
      return false;
    }
    i++;
    j--;
  }

  return true;
};
