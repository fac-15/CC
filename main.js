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
    
    // add or remove error classes
    // - not valid:
    if (!e.target.validity.valid) {
        // phone
        if (e.target.id == 'number' && e.target.value.length>=13) {
            e.target.className = 'error';
            errorP.className = 'error-msg-show';
        }
        // not phone
        else if(!e.target.id == 'number') {
            e.target.className = 'error';
            errorP.className = 'error-msg-show';
        }
        
    }
    // valid
    else if (e.target.validity.valid) {
        // not phone
        e.target.className = '';
        errorP.innerHTML = '';
        errorP.className = 'error-msg';        
    }


    // phone
    if (e.target.id == 'number' && e.target.value.length<13) {
        e.target.className = '';
            errorP.innerHTML = '';
            errorP.className = 'error-msg';
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
            // console.log(e.target.value.length);

            if (e.target.value.length>12) {
                errorP.innerHTML = phoneMsg;
            }
        }
        // - textarea (no longer included - see DOM selection below)
        // else if (e.target.type == 'textarea') {
        //     console.log('textarea');
        // }
    }


   
}


// get all form inputs
const inputs = [...document.querySelectorAll('form input')];
inputs.forEach(element=>element.addEventListener('input', validator));
// const textarea = document.querySelector('textarea');
// inputs.push(textarea);
// console.log(inputs);







// ______________________
// logo scroll to top
const goToTop = function() {
    window.scrollTo(0,0);
}

const logo = document.querySelector('.logo');
logo.addEventListener('click', goToTop);