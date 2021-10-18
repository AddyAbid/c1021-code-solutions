/* exported truncate */
/*
return string starting from first character to given length and add ellipsis
*/

function truncate(length, string) {
  return string.substr(0, length) + '...';
}
