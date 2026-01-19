// Daily Temperatures

// Given an array of integers "temperatures" representing the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] = 0 instead.

 
// Example 1:
// Input: temperatures = [30, 29, 38, 36, 35, 40, 28];
// Output: [2, 1, 3, 2, 1, 0, 0]

// Example 2:
// Input: temperatures = [62,40,50,60]
// Output: [0,1,1,0]

function dailyTemperatures(temperatures){
    const result = new Array(temperatures.length).fill(0);
    const stack = [];

    for(let i = 0; i < temperatures.length; i++){
        while(stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]){
            const idx = stack.pop();
            result[idx] = i - idx;
        }
        stack.push(i);
    }

    return result;
}

//time complexity: 0(n)
// space compexity: 0(n)

const temperatures = [30, 29, 38, 36, 35, 40, 28];
console.log(dailyTemperatures(temperatures));