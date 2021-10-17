/* exported getKeys */
/*
create storage for output
look for property in object
add values to storage
return storage
*/

function getKeys(object) {
  var outPut = [];
  for (var keys in object) {
    outPut.push(keys);
  }
  return outPut;
}
