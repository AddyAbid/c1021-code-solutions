/* exported chunk */
/*
test with [foo, bar, baz, qux] size 2

need storage for output
look at how many indexes in array
add array to new array starting from first up to given size
if added partial size so far, then add again starting from current index to index plus given size
add new array to storage
return storage
*/
function chunk(array, size) {
  var outPut = [];
  for (var i = 0; i < array.length; i += size) {
    var newArr = array.slice(i, i + size);
    outPut.push(newArr);
  }
  return outPut;
}
