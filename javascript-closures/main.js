function graduate(credential) {
  return function (fullName) {
    return `${fullName}, ${credential}`;
  };
}

var medicalSchool = graduate('M.D');
var lawSchool = graduate('Esq.');

var imaDoctor = medicalSchool('Adnan Abid');
var imaLawyer = lawSchool('Adnan Abid');

console.log('doctor:', imaDoctor);
console.log('lawyer:', imaLawyer);
