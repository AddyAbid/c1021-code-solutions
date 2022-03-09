/* exported difference */
/*
create new array for first arr filtered by if the second arr does not include a value in first
create new array for second arr filtered by if the first arr does not include a value in second
combine both new arrays
return combined array
*/

function difference(first, second) {
  const firstArr = first.filter(index => !second.includes(index));
  const secondArr = second.filter(index => !first.includes(index));
  const difference = firstArr.concat(secondArr);
  return difference;
}
