/* exported student */
var student = {
  firstName: 'Addy',
  lastName: 'Abid',
  subject: 'CSS',
  getFullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
  getIntroduction: function () {
    return 'Hello, my name is ' + this.getFullName() + ' and I am studying ' + this.subject + '.';
  }
};
