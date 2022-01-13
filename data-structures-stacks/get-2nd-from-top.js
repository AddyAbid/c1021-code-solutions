/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.peek() === undefined) {
    return undefined;
  }
  if (stack.peek() !== undefined) {
    var first = stack.pop();
  }
  if (stack.peek() !== undefined) {
    var second = stack.pop();
    stack.push(second);
    stack.push(first);
    return second;
  } else {
    stack.push(first);
  }

}
