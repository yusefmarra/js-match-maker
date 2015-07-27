var students = [];

var teachers = [];


var studentButton = document.getElementById('student-button');
var teacherButton = document.getElementById('teacher-button');

teacherButton.addEventListener('click', addTeacher);
studentButton.addEventListener('click', addStudent);

function addStudent() {
  var studentForm = document.getElementById('students');
  console.log(studentForm);
  students.push({
    name: studentForm.children[1].value,
    phone: studentForm.children[3].value,
    city: studentForm.children[5].value
  });
  studentForm.children[1].value = "";
  studentForm.children[3].value = "";
  studentForm.children[5].value = "";

  document.getElementById('student-result').innerHTML = makeResultStr(students);
}

function addTeacher() {
  var teacherForm = document.getElementById('teachers');
  // console.log(teacherForm);
  teachers.push({
    name: teacherForm.children[1].value,
    phone: teacherForm.children[3].value,
    city: teacherForm.children[5].value
  });
  teacherForm.children[1].value = "";
  teacherForm.children[3].value = "";
  teacherForm.children[5].value = "";

  document.getElementById('teacher-result').innerHTML = makeResultStr(teachers);
}

function makeResultStr(array) {
  resultString = "<div class='container'><div class='row'>";
  for (var i in array){
    if (i%3 === 0 && i !== '0'){
      console.log(i);
      console.log(i !== 0);
      resultString += "</div><br><div class='row'>";
    }
    resultString += "<div class='col-sm-2'>Name: " + array[i].name + "<br>Phone: " + array[i].phone + "<br>City: "+ array[i].city + "<br></div>";

  }
  resultString += "</div></div>"
  console.log(resultString);
  return resultString;
}

function validateForm(form) {
  form.children[1]
  form.children[3]
  form.children[5]
}
