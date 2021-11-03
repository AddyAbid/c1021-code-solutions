/* exported invert */
/*
create empty object storage
look at each key and value in given object
assign value to key and key to value in storage object
return object
*/

function invert(source) {
  var outPut = {};
  for (var key in source) {
    outPut[source[key]] = key;
  }
  return outPut;
}
