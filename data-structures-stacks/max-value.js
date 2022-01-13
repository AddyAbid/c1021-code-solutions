/* exported maxValue */

function maxValue(stack) {
  if (stack.peek() === undefined) {
    return -Infinity;
  }
  var temp = stack.peek();
  while (stack.peek() !== undefined) {
    var nextInLine = stack.pop();
    if (temp < nextInLine) {
      temp = nextInLine;
    }
  }
  return temp;
}
