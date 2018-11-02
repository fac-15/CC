/*
Name
    - letters a-z, case insensitive

Company Name
    - letters a-z AND numbers 0-9, case insensitive

Email
    - must have an @ sign

Phone Number
    - numbers 0-9, and 11 characters long

Message
    - greater than 200 characters
    - escape html
*/


// if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value)



function validator(e) {

    // regexes
    // const nameRegex = /[^0-9]$/;
    // const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // old email regex: [\w_.]+@[\w_.]{3,}\.{1}[a-z]{2,}$
    // new email regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    // error message
    const errorP = e.target.nextElementSibling;
    
    // add and remove error classes
    // - phone (validity.valid not working as expected)
    if (e.target.id == 'number' && e.target.value.length<13) {
        e.target.className = '';
        errorP.innerHTML = '';
        errorP.className = 'error-msg';
    }
    // - not phone
    else {
        if (!e.target.validity.valid) {
            e.target.className = 'error';
            errorP.className = 'error-msg-show';
        } else {
            e.target.className = '';
            errorP.innerHTML = '';
            errorP.className = 'error-msg';
        }
    }


    // error messages:
    const nameMsg = 'Please enter a valid name. You can enter letters a-z, upper and lower case';
    const companyMsg = 'Please enter a valid company name. You can enter letters a-z, upper and lower case';
    const emailMsg = 'Please enter a valid email address.';
    const phoneMsg = 'Your phone number is too long. Please enter a valid UK phone number';


    // target different input fields, if they are invalid:
    if (!e.target.validity.valid) {
        // - name
        if (e.target.id == 'name') {
            errorP.innerHTML = nameMsg;
        }
        // - company name
        else if (e.target.id == 'companyName') {
            errorP.innerHTML = companyMsg;
        }
        // - email
        else if (e.target.type == 'email') {
            errorP.innerHTML = emailMsg;
        }
        // - phone
        else if (e.target.type == 'number' || e.target.id == 'number') {
            if (e.target.value.length>12) {
                errorP.innerHTML = phoneMsg;
            }
        }
    }


   
}


// get all form inputs
const inputs = [...document.querySelectorAll('form input')];
inputs.forEach(element=>element.addEventListener('input', validator));
// const textarea = document.querySelector('textarea');
// inputs.push(textarea);



// ______________________
// logo scroll to top
const goToTop = function() {
    window.scrollTo(0,0);
}

const logo = document.querySelector('.logo');
logo.addEventListener('click', goToTop);



window.addEventListener("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - 80);
});



// ______________________
// menu toggle function
function menuToggle(e){

    e.preventDefault();
    const navBar = document.querySelector('.nav-bar');

    if (navBar.classList.contains('toggled-on')){
        navBar.classList.remove('toggled-on');
    } else {
        navBar.classList.add('toggled-on');
    }
    
}


// menu

const menuBtn = document.querySelector('.hamburger');
menuBtn.addEventListener("click", menuToggle);