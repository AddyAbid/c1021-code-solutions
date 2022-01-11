/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  var tempArr = [];
  while (stack.peek() !== undefined) {
    tempArr.push(stack.peek());
    stack.pop();
  }
  for (var i = tempArr.length; i-- > 0;) {
    stack.push(tempArr[i]);
  }
  return tempArr[1];
}
