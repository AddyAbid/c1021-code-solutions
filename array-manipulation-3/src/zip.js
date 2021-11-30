/* exported zip */
/*
if the lenght of the arrays are not equal remove last index
push arrays into storage
search through each value by 2
push to output storage
 */
function zip(first, second) {
  var temporaryArr = [];
  var output = [];
  if (first.length > second.length) {
    first.pop();
  } else if (first.length < second.length) {
    second.pop();
  }
  temporaryArr.push(first);
  temporaryArr.push(second);
  for (var i = 0; i < temporaryArr.length; i++) {
    output.push(temporaryArr[i]);
    // console.log(output);
  }
}
