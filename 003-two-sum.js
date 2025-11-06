// Two Sum
// Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.

// You may assume that every input has exactly one pair of indices i and j that satisfy the condition.

// Return the answer with the smaller index first.

// Example 1:
// Input:
// nums = [3,4,5,6], target = 7
// Output: [0,1]
// Explanation: nums[0] + nums[1] == 7, so we return [0, 1].

// Example 2:
// Input: nums = [4,5,6], target = 10
// Output: [0,2]

// Example 3:
// Input: nums = [5,5], target = 10
// Output: [0,1]

// [3,4,5,6]

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

//time complexity: 0(n2)

// {"3": 0, "4": 1}

function twoSumFinal(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i];

    if (compliment in map) {
      return [map[compliment], i];
    }

    map[nums[i]] = i;
  }

  return null;
}

console.log(twoSum([3, 4, 5, 6], 7));
