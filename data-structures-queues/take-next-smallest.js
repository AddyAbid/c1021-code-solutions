/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  while (queue.peek() !== undefined) {
    var removedQueues = queue.dequeue();
    if (removedQueues <= queue.peek()) {
      return removedQueues;
    } else if (removedQueues > queue.peek()) {
      queue.enqueue(removedQueues);
    }
  }
  return removedQueues;
}
