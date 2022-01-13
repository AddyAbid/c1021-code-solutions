/* exported postpone */

function postpone(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  var front = queue.dequeue();
  queue.enqueue(front);
}
