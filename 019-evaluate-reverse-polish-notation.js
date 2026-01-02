// Evaluate Reverse Polish Notation

// You are given an array of strings tokens that represents a valid arithmetic expression in Reverse Polish Notation. Reverse Polish Notation is a way of writing mathematical expressions where operators come after their operands instead of between them.

// Return the integer that represents the evaluation of the expression.

// The operands may be integers or the results of other operations.
// The operators include '+', '-', '*', and '/'.
// Assume that division between integers always truncates toward zero.

// Example 1:
// Input: tokens = ["1","2","+","3","*","4","-"]
// Output: 5
// Explanation: ((1 + 2) * 3) - 4 = 5

// Constraints:
// 1 <= tokens.length <= 1000.
// tokens[i] is "+", "-", "*", or "/", or a string representing an integer in the range [-100, 100].

function evaluateRPN(tokens) {
  const operators = new Set(["+", "-", "*", "/"]);
  const stack = [];

  for (let token of tokens) {
    if (!operators.has(token)) {
      stack.push(Number(token));
    } else {
      const right = stack.pop();
      const left = stack.pop();

      if (token === "+") {
        stack.push(left + right);
      } else if (token === "-") {
        stack.push(left - right);
      } else if (token === "*") {
        stack.push(left * right);
      } else if (token === "/") {
        stack.push(Math.trunc(left / right));
      }
    }
  }

  return stack[0];
}

// time complexity: 0(n)
// space complexity: 0(n)

const tokens = ["1", "2", "+", "3", "*", "4", "-"];

console.log(evaluateRPN(tokens));
