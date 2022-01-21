console.log("Form Validation")

const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

let validName = false;
let validEmail = false;
let validPhone = false;

name.addEventListener('blur', () => {
    let str = name.value
    let regex = /^[a-zA-Z]([0-9a-zA-z]){1,9}$/
    if (regex.test(str)) {
        console.log("Name is Valid")
        name.classList.add('is-valid')
        name.classList.remove('is-invalid')
        validName = true;

    } else {
        console.log("Name is InValid")
        name.classList.add('is-invalid')
        validName = false;


    }
})

email.addEventListener('blur', () => {

    let str = email.value
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/
    if (regex.test(str)) {
        console.log("Email is Valid")
        email.classList.add('is-valid')
        email.classList.remove('is-invalid')
        validEmail = true;
    } else {
        console.log("Email is Invalid")
        email.classList.add('is-invalid')
        validEmail = false;


    }
})

phone.addEventListener('blur', () => {

    let str = phone.value
    let regex = /^([0-9]){10}$/
    if (regex.test(str)) {
        console.log("Number is Valid")
        phone.classList.add('is-valid')
        phone.classList.remove('is-invalid')
        validPhone = true;

    } else {
        console.log("Number is Invalid")
        phone.classList.add('is-invalid')
        validPhone = false;


    }
})

const submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {

    if (validPhone == false || validName == false || validEmail == false) {
        let message = document.getElementById('message');

        message.innerHTML = ` <div id="failure" class="alert alert-danger alert-dismissible" role="alert">
        <strong>Error!</strong> Your travel request has not been sent due to errors
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">×</span>
        </button>
    </div>`
        setTimeout(() => {
            message.innerHTML = '';

        }, 3000);
    } else {
        let message = document.getElementById('message');

        message.innerHTML = `<div id="success" class="alert alert-success alert-dismissible" role="alert">
        <strong>Success!</strong> Your travel request has been successfully submitted
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">×</span>
        </button>
        </div>`
        setTimeout(() => {
            message.innerHTML = '';

        }, 3000);
    }
    e.preventDefault();
})