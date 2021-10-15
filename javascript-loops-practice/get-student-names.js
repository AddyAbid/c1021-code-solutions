/* exported getStudentNames */
function getStudentNames(students) {
  var outPut = [];
  for (var i = 0; i < students.length; i++) {
    outPut.push(students[i].name);
  }
  return outPut;
}
