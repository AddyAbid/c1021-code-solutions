/* exported toObject */
/*
create empty storage to hold object
create storage for property
create storage for value
set empty objects value  at that key to equal given value
return object

*/

function toObject(keyValuePair) {
  var obj = {};
  var key = keyValuePair[0];
  var val = keyValuePair[1];
  obj[key] = val;
  return obj;
}
