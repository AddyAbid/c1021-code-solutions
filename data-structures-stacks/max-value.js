/* exported maxValue */

function maxValue(stack) {
  var tempArr = [];
  while (stack.peek() !== undefined) {
    tempArr.push(stack.peek());
    stack.pop();
  }
  if (tempArr.length === 0) {
    return -Infinity;
  } else {
    return Math.max(...tempArr);
  }
}
