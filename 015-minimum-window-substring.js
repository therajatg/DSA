// Minimum Window Substring

// Given two strings s and t, return the shortest substring of s such that every character in t, including duplicates, is present in the substring. If such a substring does not exist, return an empty string "".

// You may assume that the correct output is always unique.

// Example 1:
// Input: s = "OUZODYXAZV", t = "XYZ"  {X:1, Y: 1, Z: 1}
// Output: "YXAZ"
// Explanation: "YXAZ" is the shortest substring that includes "X", "Y", and "Z" from string t.

// Example 2:
// Input: s = "xyz", t = "xyz"
// Output: "xyz"

// Example 3:
// Input: s = "x", t = "xy"
// Output: ""

// Constraints:
// 1 <= s.length <= 1000
// 1 <= t.length <= 1000
// s and t consist of uppercase and lowercase English letters.

function minWindow(s, t) {
  if (s.length < t.length) {
    return "";
  }

  let left = 0;
  let result = "";
  let minLength = Infinity;
  let tMap = {};
  let sMap = {};
  let matches = 0;

  for (let char of t) {
    tMap[char] = (tMap[char] || 0) + 1;
  }

  for (let right = 0; right < s.length; right++) {
    const rightChar = s[right];
    sMap[rightChar] = (sMap[rightChar] || 0) + 1;

    if (tMap[rightChar] && tMap[rightChar] === sMap[rightChar]) {
      matches++;
    }

    while (matches === Object.keys(tMap).length) {
      if (right - left + 1 < minLength) {
        minLength = right - left + 1;
        result = s.substring(left, right + 1);
        // console.log("result", result);
      }

      const leftChar = s[left];

      if (tMap[leftChar] && tMap[leftChar] === sMap[leftChar]) {
        matches--;
      }

      sMap[leftChar]--;
      left++;
    }
  }

  return result;
}

const s = "OUZODYXAZV";
const t = "XYZ";

console.log(minWindow(s, t));

//time complexity: 0(n)
//space complexity: 0(1)
