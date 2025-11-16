// Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].

// Follow-up: Could you solve it in 0(n) time without using the division operation?

// input = [1, 2, 3, 4];
//output = [24, 12, 8, 6];

let input = [2, 4, 6, 10];
//output = [1 * 240, 2 * 60, 8 * 10, 48 * 1]

//[1, 2, 8, 48]
function productExceptSelf(nums) {
  let output = [];
  let length = nums.length;

  for (let i = 0; i < length; i++) {
    if (i === 0) {
      output.push(1);
    } else {
      const leftSideProduct = nums[i - 1] * output[i - 1];
      output.push(leftSideProduct);
    }
  }

  let rightSideProduct = 1;
  for (let i = length - 1; i >= 0; i--) {
    output[i] = output[i] * rightSideProduct;
    rightSideProduct = rightSideProduct * nums[i];
  }

  return output;
}

console.log(productExceptSelf(input));
