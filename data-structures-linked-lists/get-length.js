/* exported getLength */

function getLength(list) {
  var counter = 0;
  while (list !== null) {
    counter++;
    list = list.next;
  }
  return counter;
}
