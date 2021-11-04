/* exported pick */
/*
create empty object storage
look at all keys in given object
if given array values match the keys in given object and is not equal to undefined
add only those keys and values to empty object
return object
*/

function pick(source, keys) {
  var outPut = {};
  for (var key in source) {
    if (keys.includes(key) && source[key] !== undefined) {
      outPut[key] = source[key];
    }
  }
  return outPut;
}
