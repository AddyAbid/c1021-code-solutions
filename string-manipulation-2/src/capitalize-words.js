/* exported capitalizeWords */
function capitalizeWords(string) {
  string = string.toLowerCase();

  var outPut = string.split(' ');
  for (var i = 0; i < outPut.length; i++) {
    outPut = outPut[0].toUpperCase() + string.substr(1);

  }
}
