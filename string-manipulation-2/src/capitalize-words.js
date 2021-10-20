/* exported capitalizeWords */
/*
create storage to hold given string and set all characters to lowercase
split each word up by space and add to new storage.
look at each character in storage and assign to new variable
declare new variable
add word with first letter uppercase and every lowercase letter after
return storage.
*/

function capitalizeWords(string) {
  var copied = string.toLowerCase();
  var final;
  var stringSplit = copied.split(' ');
  for (var i = 0; i < stringSplit.length; i++) {
    var total = stringSplit[i];

    final += total[0].toUpperCase() + total.substr(1);
  }
  return final;
}
