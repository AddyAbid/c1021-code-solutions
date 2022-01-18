/* exported removeTail */

function removeTail(list) {
  if (list.next === null) return list;
  while (list.next !== null) {
    list = list.next.next;
    list.next = null;
  }
  return list;
}
