/* exported union */
/*

 */
function union(first, second) {
  const firstArr = first.filter(index => second.includes(index));
  const secondArr = second.filter(index => !first.includes(index));
  const concatArr = firstArr.concat(secondArr);
  return concatArr;
}
