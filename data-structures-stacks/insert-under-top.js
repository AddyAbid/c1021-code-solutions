/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.peek() === undefined) {
    return stack;
  } else {
    const top = stack.pop();
    stack.push(value);
    return stack.push(top);
  }
}
