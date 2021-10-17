/* exported getValues */
/*
create emptry storage for output
lookk for values in object
add values to storage
return storarge
*/

function getValues(object) {
  var outPut = [];
  for (var keys in object) {
    outPut.push(object[keys]);
  }
  return outPut;
}
