/* exported withoutHead */

function withoutHead(list) {
  if (list.next !== null) {
    list = list.next;
    return list;
  }
}
