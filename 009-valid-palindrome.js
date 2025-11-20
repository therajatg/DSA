// Given a string s, return true if it is a palindrome, otherwise return false.

// A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.

// Note: Alphanumeric characters consist of letters (A-Z, a-z) and numbers (0-9).

//Example 1
// racecar
// madam
// level
// 12321

//abccba

// Example 2:
// "Was it a car or a cat I saw?"

function isPalindrome(s) {
  return s === s.split("").reverse().join("");
}

//time complexity: 0(n)
//space complexity: 0(n)

function isPalindromeFinal(s) {
  let lowerCaseString = s.toLowerCase();
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    while (start < end && !isAlphaNumeric(lowerCaseString[start])) {
      start++;
    }
    while (start < end && !isAlphaNumeric(lowerCaseString[end])) {
      end--;
    }

    if (lowerCaseString[start] === lowerCaseString[end]) {
      start++;
      end--;
    } else {
      return false;
    }
  }
  return true;
}

function isAlphaNumeric(char) {
  if (("a" <= char && char <= "z") || ("0" <= char && char <= "9")) {
    return true;
  }
  return false;
}

console.log(isPalindromeFinal("Was it a car or a cat I saw?"));
