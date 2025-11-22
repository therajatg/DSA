// You are given an integer array heights where heights[i] represents the height of the ith bar.

// You may choose any two bars to form a container. Return the maximum amount of water a container can store.

// Example 1:
// Input: height = [1,7,2,5,4,7,3,6]
// Output: 36

// Example 2:
// Input: height = [2,2,2]
// Output: 4

// Constraints:
// 2 <= height.length <= 1000
// 0 <= height[i] <= 1000

const heights = [1, 8, 6, 2, 5, 4, 8, 3, 7];

function containerWithMostWater(heights) {
  let max = 0;
  for (let i = 0; i < heights.length; i++) {
    for (let j = i + 1; j < heights.length; j++) {
      const currentArea = (j - i) * Math.min(heights[j], heights[i]);
      if (max < currentArea) {
        max = currentArea;
      }
    }
  }
  return max;
}

// 0(n2);

function containerWithMostWaterFinal(heights) {
  let left = 0;
  let right = heights.length - 1;
  let max = 0;

  while (left < right) {
    const currentArea =
      Math.min(heights[left], heights[right]) * (right - left);

    if (currentArea > max) {
      max = currentArea;
    }

    if (heights[left] <= heights[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
}

console.log(containerWithMostWaterFinal(heights));
