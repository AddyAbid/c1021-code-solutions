/* exported intersection */
/*
create new arr by filtering out if second are does include a value from the first
return  array with those values
*/

function intersection(first, second) {
  const firstArr = first.filter(index => second.includes(index));
  return firstArr;
}
