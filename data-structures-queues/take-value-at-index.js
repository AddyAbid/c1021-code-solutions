/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  var counter = 0;
  while (counter !== index) {
    counter++;
    var removedQueues = queue.dequeue();
    queue.enqueue(removedQueues);
  }
  var nextQueue = queue.dequeue();
  return nextQueue;
}
