// Top K Frequent Elements
// Given an integer array nums and an integer k, return the k most frequent elements within the array.

// Example 1:
// Input: nums = [1, 2, 2, 3, 3, 1, 2, 4, 4, 4, 4], k = 2
// Output: [4,2]

// {"1": 2, "2": 3}

const input = [1, 2, 2, 3, 3, 1, 2, 4, 4, 4, 4];

function topKFrequent(nums, k) {
  const map = {};

  for (let num of nums) {
    map[num] = (map[num] || 0) + 1;
  }

  return Object.entries(map)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((entry) => entry[0]);
}

// 0(nlogn)

// [1, 2, 2, 3, 3, 1, 2, 4, 4, 4, 4]
// [([], [], [1, 3], [2], [4])];

function topKFrequentFinal(nums, k) {
  const map = {};
  // => [[], [], []]
  const bucket = Array.from({ length: nums.length }, () => []);
  const result = [];

  for (let num of nums) {
    map[num] = (map[num] || 0) + 1;
  }

  for (let key in map) {
    const freq = map[key];
    bucket[freq].push(key);
  }

  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i].length) {
      result.push(...bucket[i]);
    }
  }

  return result.slice(0, k);
}

console.log(topKFrequentFinal(input, 2));

//time complexity: 0(n)
