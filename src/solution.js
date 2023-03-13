/*
  Write a function that returns a particular student when given a name. If no name matches, return `null`.
*/
const students = [
  { name: "Leo Yeon-Joo", score: 8.9 },
  { name: "Morgan Sutton", score: 7.4 },
  { name: "Natalee Vargas", score: 9.2 },
  { name: "Jim", score: 7}
];


function findStudentByName(students, name) {
  return students.find(studentObj=> studentObj.name === name) || null
}

console.log(findStudentByName(students, "Jim"))

module.exports = findStudentByName;
