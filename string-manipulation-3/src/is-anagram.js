/* exported isAnagram */
/*
assign first given string to variable and split each word by letter, convert to array, alphebetize, then join characters to remove all spaces
assign second given string to variable and split each word by letter, convert to array, alphebetize, then join characters to remove all spaces
split new sorted string by spaces and convert back to string
split new sorted string by spaces and convert back to string
compare the first string to the second
if they are not eqaul return false
else
return true
*/

function isAnagram(firstString, secondString) {

  var secondSplit = secondString.split('').sort().join('');
  var firstSplit = firstString.split('').sort().join('');
  firstSplit = firstSplit.split(' ').join('');
  secondSplit = secondSplit.split(' ').join('');
  if (secondSplit !== firstSplit) {
    return false;
  }
  return true;
}
