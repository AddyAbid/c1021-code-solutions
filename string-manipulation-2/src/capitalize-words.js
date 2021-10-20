/* exported capitalizeWords */
function capitalizeWords(string) {
  var copied = string.toLowerCase();

  var stringSplit = copied.split(' ');
  for (var i = 0; i < stringSplit.length; i++) {
    var total = stringSplit[i];

    var final;
    final += total[0].toUpperCase() + total.substr(1);
  }
  return final;
}
