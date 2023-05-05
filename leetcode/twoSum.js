// var twoSum = function (nums, target) {
//   let numObj = {};
//   for (let i = 0; i < nums.length; i++) {
//     numObj[nums[i]] = i;
//   }
//   for (let i = 0; i < nums.length - 1; i++) {
//     let complement = target - nums[i];
//     if (numObj.hasOwnProperty(complement) && numObj[complement] !== i) {
//       return [i, numObj[complement]];
//     }
//   }
// };

// console.log(twoSum([3, 2, 4], 6));

// var removeDuplicates = function (nums) {
//   let countObj = {};
//   for (let i = 0; i < nums.length; i++) {
//     if (!countObj.hasOwnProperty(nums[i])) {
//       countObj[nums[i]] = 1;
//     }
//   }
//   console.log("obj", countObj);
//   nums = Object.keys(countObj);
//   return nums;
// };

// console.log(removeDuplicates([1, 1, 2]));

// var addBinary = function (a, b) {
//   const aBin = `0b${a}`;
//   const bBin = `0b${b}`;
//   console.log("aBin", aBin, "bBin", bBin);
//   const sum = BigInt(aBin) + BigInt(bBin);
//   return sum.toString(2);
// };

// addBinary(1, 111);

console.log(010101 + 111);
console.log((0b010101 + 0b111).toString(2));
