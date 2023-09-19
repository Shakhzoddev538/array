alert("Студентов 11!")
 
let arr = ["shakhzod", "safir", "abdukhafiz", "bobur", "baxzod", "islom", "abdumanon", "artyom", "alsafir", "xojiakbar", "samira", "aziza",]

let student_name = +prompt('Which student tou want to remove?')

if (arr.indexOf(student_name) && arr.splice(student_name, 1)) {
    console.log(
        arr
    );
}else {
    console.log(
        "У нас такого студента нету"
    );
}
