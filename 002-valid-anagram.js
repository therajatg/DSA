// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Example 1:

// Input: s = "racecar", t = "carrace"

// Output: true
// Example 2:

// Input: s = "jar", t = "jam"

// Output: false
// Constraints:

// s and t consist of lowercase English letters.

function isValidAnagram(s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("");
}

//time complexity: n, nlogn, n, n logn, n,n = 0(nlogn)

//rajat
//tazar

function isValidAnagramOne(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const countOne = {};
  const countTwo = {};

  for (let letter of s) {
    if (countOne[letter]) {
      countOne[letter] = countOne[letter] + 1;
    } else {
      countOne[letter] = 1;
    }
  }

  for (let letter of t) {
    if (countTwo[letter]) {
      countTwo[letter] = countTwo[letter] + 1;
    } else {
      countTwo[letter] = 1;
    }
  }

  for (let letter of Object.keys(countOne)) {
    if (countOne[letter] !== countTwo[letter]) {
      return false;
    }
  }
  return true;
}

//final
function isValidAnagramFinal(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const count = {};

  for (let i = 0; i < s.length; i++) {
    count[s[i]] = (count[s[i]] || 0) + 1;
    count[t[i]] = (count[t[i]] || 0) - 1;
  }

  for (let letter of Object.keys(countOne)) {
    if (count[letter] !== 0) {
      return false;
    }
  }
  return true;
}

//time complexity: 0(n)
//space complexity: 1
