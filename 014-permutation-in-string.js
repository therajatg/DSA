// Permutation in String
// You are given two strings s1 and s2.

// Return true if s2 contains a permutation of s1, or false otherwise. That means if a permutation of s1 exists as a substring of s2, then return true.

// Both strings only contain lowercase letters.

// Example 1:
// Input: s1 = "abc", s2 = "lecabee"
// Output: true
// Explanation: The substring "cab" is a permutation of "abc" and is present in "lecabee".

// Example 2:
// Input: s1 = "abc", s2 = "lecaabee"
// Output: false

function stringPermutation(s1, s2) {
  if (s1.length > s2.length) {
    return false;
  }

  let freq = {};

  for (let char of s1) {
    freq[char] = (freq[char] || 0) + 1;
  }

  for (let i = 0; i < s2.length - s1.length; i++) {
    let substring = s2.substring(i, i + s1.length);

    let substringFreq = {};

    for (let char of substring) {
      substringFreq[char] = (substringFreq[char] || 0) + 1;
    }

    if (compareMaps(freq, substringFreq)) {
      return true;
    }
  }

  return false;
}

function compareMaps(map1, map2) {
  const keys1 = Object.keys(map1);
  const keys2 = Object.keys(map2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (map1[key] !== map2[key]) {
      return false;
    }
  }

  return true;
}

// const s1 = "abc";
// const s2 = "lecabee";

const s1 = "abc";
const s2 = "azcxaabee";

//space complexity: 0(1)
//time complexity: 0(n*m)

// console.log(stringPermutation(s1, s2));

function stringPermutationFinal(s1, s2) {
  if (s1.length > s2.length) {
    return false;
  }

  let map1 = {};
  let map2 = {};

  for (let i = 0; i < s1.length; i++) {
    map1[s1[i]] = (map1[s1[i]] || 0) + 1;
    map2[s2[i]] = (map2[s2[i]] || 0) + 1;
  }

  let matches = 0;
  for (let key in map1) {
    if (map1[key] === map2[key]) {
      matches++;
    }
  }

  if (matches === Object.keys(map1).length) {
    return true;
  }

  let left = 0;
  for (let right = s1.length; right < s2.length; right++) {
    const rightChar = s2[right];
    map2[rightChar] = (map2[rightChar] || 0) + 1;

    if (map2[rightChar] === map1[rightChar]) {
      matches++;
    } else if (map2[rightChar] === map1[rightChar] + 1) {
      matches--;
    }

    const leftChar = s2[left];
    map2[leftChar] = (map2[leftChar] || 0) - 1;

    if (map2[leftChar] === map1[leftChar]) {
      matches++;
    } else if (map2[leftChar] === map1[leftChar] - 1) {
      matches--;
    }

    left++;

    if (matches === Object.keys(map1).length) {
      return true;
    }
  }

  return false;
}

console.log(stringPermutationFinal(s1, s2));

//time complexity: 0(n)
//Space complexity: 0(1)
