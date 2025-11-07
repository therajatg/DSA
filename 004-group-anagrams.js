// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

//eat
//ate
//tea

// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Explanation:
// There is no string in strs that can be rearranged to form "bat".
// The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
// The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

// Constraints:
// strs[i] consists of lowercase English letters.

// ["eat","tea","tan","ate","nat","bat"]

// {ant: ["tan", "nat"], aet: []}

//recommended way
function getGroupedAnagrams(strs) {
  const obj = {};
  for (let str of strs) {
    const sortedStr = str.split("").sort().join("");
    if (!obj[sortedStr]) {
      obj[sortedStr] = [];
    }

    obj[sortedStr].push(str);
  }

  return Object.values(obj);
}

let input = ["eat", "tea", "tan", "ate", "nat", "bat"];

//time complexity: 0(n * klogk)
//a = 97 in ASCII

function getGroupedAnagramsOne(strs) {
  const obj = {};
  for (let str of strs) {
    const arr = new Array(26).fill(0);
    for (let char of str) {
      arr[char.charCodeAt(0) - 97]++;
    }
    const key = arr.join("#");

    if (!obj[key]) {
      obj[key] = [];
    }
    obj[key].push(str);
  }
  return Object.values(obj);
}

//time complexity = 0(n*k)

console.log(getGroupedAnagramsOne(input));
