/*
  Write a function that returns a particular student when given a name. If no name matches, return `null`.
*/
// const students = [
//   { name: "Leo Yeon-Joo", score: 8.9 },
//   { name: "Morgan Sutton", score: 7.4 },
//   { name: "Natalee Vargas", score: 9.2 },
//   { name: "Jim", score: 7}
// ];


function findStudentByName(students =[], name) {
  if (students.length === 0) return null;
  const result = students.find((studentObj)=>{
    return studentObj.name === name
  })
  if(!result){
    return null
  }else{
    return result
  }
}


module.exports = findStudentByName;


