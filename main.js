
// var companyRegex = /[a-zA-Z]/
// var emailRegex = /[\w_.]+@[\w_.]{3,}\.[a-zA-Z]{2,}$/
// var numberRegex = /[0-9]/


function validator() {
    var nameRegex = /[^0-9]$/;  
    // console.log(e);
    // var nameValue = ;

    // console.log(nameValue);


    if(nameRegex.test('keydown')){
        console.log('valid');
    } else {
        console.log('invalid')
    }
   
}

document.getElementById('name').addEventListener('keydown',validator);

var goToTop = function() {
    window.scrollTo(0,0);
}

var logo = document.querySelector('.logo');
logo.addEventListener('click', goToTop);