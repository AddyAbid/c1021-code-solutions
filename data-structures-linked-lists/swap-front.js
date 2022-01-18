/* exported swapFront */
/* global LinkedList */ // eslint-disable-line no-unused-vars
function swapFront(list) {
  if (list.next === null) return list;
  const newList = new LinkedList(list.next.data, list.data);
  newList.next.next = list.next.next;
  return newList;
}
