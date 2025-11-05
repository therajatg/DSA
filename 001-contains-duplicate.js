// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

// Input: nums = [1, 2, 3, 3];

// Input: nums = [1, 2, 3, 4];

function hasDuplicate(nums) {
  const set = new Set();
  for (let num of nums) {
    if (set.has(num)) {
      return true;
    }
    set.add(num);
  }
  return false;
}

console.log(hasDuplicate([1, 2, 3, 4, 5, 6]));

//Time complexity: 0(n)
