var books = [
  {
    isbn: '9788195004867',
    author: 'Dale Carnegie',
    title: 'How to win friends and influence people'
  },
  {
    isbn: '9780316017930',
    author: 'Malcolm Gladwell',
    title: 'Outliers'
  },
  {
    isbn: '9781612680170',
    author: 'Robert Kiyosaki',
    title: 'Rich Dad Poor Dad'
  }
];
console.log('value of books:', books);
console.log('type of books:', typeof books);

var stringifyBook = JSON.stringify(books);

console.log('value of stringifyBook:', stringifyBook);
console.log('type of stringifyBook:', typeof stringifyBook);

var student = '{"id": "1", "name": "John Doe"}';
console.log('value of student:', student);
console.log('type of student:', typeof student);

var parsedStudent = JSON.parse(student);
console.log('value of parsedStudent:', parsedStudent);
console.log('type of parsedStudent:', typeof parsedStudent);
