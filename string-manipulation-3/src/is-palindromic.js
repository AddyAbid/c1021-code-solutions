/* exported isPalindromic */
/*
create storage to hold given word backwards
get rid of any spaces in given word
look at each character in word
assign to storage starting from end
compare storage word to given word
if equal return true
else return false
*/

function isPalindromic(string) {
  var backwardsWord = '';
  var split = string.split(' ').join('');
  for (var i = 0; i < split.length; i++) {
    backwardsWord = split[i] + backwardsWord;
  }
  if (backwardsWord === split) {
    return true;
  }
  return false;
}
