/* exported countValues */
function countValues(stack) {
  var tempArr = [];
  while (stack.peek() !== undefined) {
    tempArr.push(stack.peek());
    stack.pop();
  }
  return tempArr.length;
}
