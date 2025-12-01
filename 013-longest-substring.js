// Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest substring without duplicate characters.

// A substring is a contiguous sequence of characters within a string.

// Example 1:
// Input: s = "zxyzxyz"
// Output: 3

// Example 2:
// Input: s = "xxxx"
// Output: 1

// Example 3:
// Input: s = "dvdf"
// Output: 3

// hints
// 2 pointers

// 1. Use a Set to track characters in current window
// 2. Expand window by moving right pointer
// 3. When you find a duplicate, shrink window from left until duplicate is removed
// 4. Track the max window size

function longestSubstring(s) {
  if (s.length === 0) return 0;

  let left = 0;
  let right = 0;
  let set = new Set();
  let longestLength = 0;

  while (right < s.length) {
    if (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    } else {
      set.add(s[right]);
      const currentLength = right - left + 1;
      if (currentLength > longestLength) {
        longestLength = currentLength;
      }
      right++;
    }
  }

  return longestLength;
}

//time complexity: 0(n)
// space complexity: 0(m)

console.log(longestSubstring("advdfa"));
