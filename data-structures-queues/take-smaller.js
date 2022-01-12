/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  if (queue.peek() !== undefined) {
    var removedValue = queue.dequeue();
    if (queue.peek() !== undefined) {
      var secondRemoved = queue.dequeue();
      if (removedValue <= secondRemoved) {
        queue.enqueue(secondRemoved);
        return removedValue;
      } else if (removedValue > secondRemoved) {
        queue.enqueue(removedValue);
        return secondRemoved;
      }
    }
    return removedValue;
  }
}
