// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Hoisting In Javascript</h1>`;

// Example- 1
var age = 28;
function getName(name) {
  console.log('I am ' + name);
}
getName('Mike');
console.log(age);

// Example- 2
getProfession('Mike'); // as function code is assigned to the functions during memory creation, in execution phase it just invoked
console.log(employee); // undefined value is assigned during memory creation phase
var employee = 'John';
function getProfession(profession) {
  console.log('I am ' + profession);
}

/*// Example- 3
getEmailId();
var emailId = () => 'test@gamil.com';*/

/*// Example- 4
getCurrentTime();
var currentTime = function () {
  return now();
};*/

/* In Example- 3 & Example- 4, when the code is executed, In memory creation phase an undefined value will be assigned to the variables and thus there is no funcion defination available when the program is in code execution phase and encounters first line of function invocation. So it will throw an error */
