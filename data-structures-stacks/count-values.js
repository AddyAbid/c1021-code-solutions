/* exported countValues */
function countValues(stack) {
  var counter = 0;
  while (stack.peek() !== undefined) {
    counter++;
    stack.pop();
  }
  return counter;
}
