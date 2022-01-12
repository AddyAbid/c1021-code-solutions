/* exported take2nd */

function take2nd(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  if (queue.peek() !== undefined) {
    var firstRemove = queue.dequeue();
    queue.enqueue(firstRemove);
    var secondRemove = queue.dequeue();
    return secondRemove;
  }
}
