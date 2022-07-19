let btnSubmit = document.getElementById('submit');
btnSubmit.addEventListener("click", validateForm);


function validateForm() {
    let res = false
    let firstName = document.forms["myForm"]["firstname"].value;
    let email = document.forms["myForm"]["email"].value;
    let confirmemail = document.forms["myForm"]["confirmemail"].value;
    let password = document.forms["myForm"]["password"].value;
    let confirmpassword = document.forms["myForm"]["confirmpassword"].value;
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let cgu = document.getElementById('cgu');

    if (firstName.length < 3) {
        let firstNameAlert = document.getElementById('firstNameAlert');
        firstNameAlert.style.display = 'block';
        firstNameAlert.innerHTML = "Le prénom doit faire au minimum 3 lettres"
        res = false
    } else {
        res = true
    }
    
    if (email != confirmemail){
        let confirmEmailAlert = document.getElementById('confirmEmailAlert');
        confirmEmailAlert.style.display = 'block';
        confirmEmailAlert.innerHTML = "L'email et sa confirmation doivent être les mêmes"
        res = false
    } else {
        res = true
    }
    
    if (password != confirmpassword){
        let confirmPasswordAlert = document.getElementById('confirmPasswordAlert');
        confirmPasswordAlert.style.display = 'block';
        confirmPasswordAlert.innerHTML = "Le mot de passe et sa confirmation doivent être les mêmes"
        res = false
    } else {
        res = true
    }
    
    if (password.length < 7){
        let passwordAlert = document.getElementById('passwordAlert');
        passwordAlert.style.display = 'block';
        passwordAlert.innerHTML = "Le password doit contenir au moins 6 caractères"
        res = false
    } else {
        res = true
    }
    
    if (!email.match(mailformat)){
        let emailAlert = document.getElementById('emailAlert');
        emailAlert.style.display = 'block';
        emailAlert.innerHTML = "L'email doit avoir le format classique d'un email"
        res = false
    } else {
        res = true
    }

    if (!cgu.checked){
        let cguAlert = document.getElementById('cguAlert');
        cguAlert.style.display = 'block';
        cguAlert.innerHTML = "Les CGU doivent être acceptées"
        res = false
    } else {
        res = true
    }

    if (res == true) {
        return true
    } else {
        return false
    }
}

function btnClick() {
    return validateForm();
}


// Remove Alert
function removefirstNameAlert() {
    if (document.getElementById('firstNameAlert').style.display = 'block') {
        document.getElementById('firstNameAlert').style.display = 'none'
    }
}

function removelastNameAlert() {
    if (document.getElementById('lastNameAlert').style.display = 'block') {
        document.getElementById('lastNameAlert').style.display = 'none'
    }
}

function removeemailAlert() {
    if (document.getElementById('emailAlert').style.display = 'block') {
        document.getElementById('emailAlert').style.display = 'none'
    }
}

function removebDateAlert() {
    if (document.getElementById('bDateAlert').style.display = 'block') {
        document.getElementById('bDateAlert').style.display = 'none'
    }
}

function removeconfirmEmailAlert() {
    if (document.getElementById('confirmEmailAlert').style.display = 'block') {
        document.getElementById('confirmEmailAlert').style.display = 'none'
    }
}

function removepasswordAlert() {
    if (document.getElementById('passwordAlert').style.display = 'block') {
        document.getElementById('passwordAlert').style.display = 'none'
    } 
}

function removeconfirmPasswordAlert() {
    if (document.getElementById('confirmPasswordAlert').style.display = 'block') {
        document.getElementById('confirmPasswordAlert').style.display = 'none'
    }
}

function removecguAlert() {
    if (document.getElementById('cguAlert').style.display = 'block') {
        document.getElementById('cguAlert').style.display = 'none'
    }
}