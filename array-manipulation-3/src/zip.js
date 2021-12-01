/* exported zip */
/*
if the lenght of the arrays are not equal remove last index
push arrays into storage
search through each value by 2
push to output storage
 */
function zip(first, second) {
  var firstTemp;
  var secondTemp;
  var output = [];
  var finalOutput = [];
  if (first.length > second.length) {
    first.pop();
  } else if (first.length < second.length) {
    second.pop();
  }
  firstTemp = first;
  secondTemp = second;

  for (var i = 0; i < firstTemp.length; i++) {

    for (var j = 0; j < secondTemp.length; j++) {

      if (firstTemp.indexOf(firstTemp[i]) === secondTemp.indexOf(secondTemp[j])) {
        output.push(firstTemp[i]);
        output.push(secondTemp[j]);
      }
    }
  }
  for (var k = 0; k < output.length; k += 2) {
    var newArr = output.slice(k, k + 2);

    finalOutput.push(newArr);
  }
  // console.log(finalOutput);
  return finalOutput;
}
