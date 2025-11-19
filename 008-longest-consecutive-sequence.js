// Given an array of integers, return the length of the longest consecutive sequence of elements that can be formed.

// A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element. The elements do not have to be consecutive in the original array.

// You must write an algorithm that runs in O(n) time.

// Input: nums = [20,2,4,10,3,4,5]
// Output: 4

const nums = [20, 2, 4, 10, 3, 4, 5];

// [2, 3, 4, 4, 5, 10, 20];

function consecutiveSequence(nums) {
  const sortedNums = nums.sort((a, b) => a - b);
  let longest = 1;
  let counter = 1;

  for (let i = 0; i < sortedNums.length - 1; i++) {
    if (sortedNums[i] === sortedNums[i + 1]) {
      continue;
    }

    if (sortedNums[i] + 1 === sortedNums[i + 1]) {
      counter++;
    } else {
      counter = 1;
    }

    if (counter > longest) {
      longest = counter;
    }
  }

  return longest;
}

//nlogn

function consecutiveSequenceFinal(nums) {
  const numSet = new Set(nums); //[20, 2, 4, 10, 3, 5]
  let longest = 1;

  for (let num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentFreq = 1;
      let currentNum = num;

      while (numSet.has(currentNum + 1)) {
        currentFreq++;
        currentNum++;
      }

      longest = Math.max(longest, currentFreq);
    }
  }

  return longest;
}

//0(n)

console.log(consecutiveSequenceFinal(nums));
