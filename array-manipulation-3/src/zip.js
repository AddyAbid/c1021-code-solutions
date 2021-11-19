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

  for (var i = 0; i < temporaryArr.length; i += 2) {
    output.push(temporaryArr.slice(i, i + 2));

  }

}

// function zip(first, second) {
//   var total = [];
//   var m = [];
//   if (first.length === second.length) {
//     second.pop();
//     console.length(second);
//   }
//   first.forEach(function (i, j) {
//     total.push(i);
//     total.push(second[j]);
//   });
//   for (var i = 0; i < total.length; i += 2) {
//     var newArr = total.slice(i, i + 2);
//     m.push(newArr);
//     console.log(newArr);

//   }

//   return m;
// }
