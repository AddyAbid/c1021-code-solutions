/* exported omit */
/*
create empty object storage
look at all keys in given object
if given array values do not match the keys in given object
add only those keys and values to empty object
return object
*/

function omit(source, keys) {
  var outPut = {};
  for (var key in source) {
    if (!keys.includes(key)) {
      outPut[key] = source[key];
    }
  }
  return outPut;
}
