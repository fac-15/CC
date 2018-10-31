var nameRegex = /[a-zA-Z]/
var companyRegex = /[a-zA-Z]/
var emailRegex = /[\w_.]+@[\w_.]{3,}\.[a-zA-Z]{2,}$/
var numberRegex = /[0-9]/




function validator() {
    var inputName = document.getElementById('first_name');
    inputName.textContent(nameRegex);
    console.log('clicked')
}

document.getElementById('submit').addEventListener('click',validator, false);