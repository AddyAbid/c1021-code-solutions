/* exported oddOrEven */
function oddOrEven(numbers) {
  var outPut = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      outPut.push('even');
    } else if (numbers[i] % 2 !== 0) {
      outPut.push('odd');
    }
  }
  return outPut;
}
