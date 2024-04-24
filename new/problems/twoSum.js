const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return "No Such Numbers Present";
};
// console.log(twoSum([3, 3], 6));
// time complexity: O(N2)

//optimized solution
const twoSumOptimized = (nums, target) => {
  const numsObj = {};
  for (let i = 0; i < nums.length; i++) {
    numsObj[nums[i]] = i;
  }
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numsObj.hasOwnProperty(complement) && numsObj[complement] !== i) {
      return [i, numsObj[complement]];
    }
  }
};

console.log(twoSumOptimized([4, 5, 8, 7, 3, 8], 10));
