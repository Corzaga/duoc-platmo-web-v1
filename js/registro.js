
const registro= document.getElementById('registro');
const checkbox= document.getElementById('terminos');
const password = document.getElementById('password');
const confirmationPassword = document.getElementById('confirmationPassword');


checkbox.addEventListener('change', () => checkbox.setCustomValidity(''));
password.addEventListener('input',  () => confirmationPassword.setCustomValidity(''));
confirmationPassword.addEventListener('input', () => {confirmationPassword.setCustomValidity('');});

registro.addEventListener('submit', (e) =>{
    e.preventDefault();


    function validarPassword(){
    if(password.value ===confirmationPassword.value){
        confirmationPassword.setCustomValidity('')
    } else {
        confirmationPassword.setCustomValidity('Las contraseñas no coinciden')
    }
    }
    validarPassword()

    if(checkbox.checked){
        checkbox.setCustomValidity('')
    } else{
        checkbox.setCustomValidity('Acepta los terminos por favor')
    }

    if(!registro.checkValidity()){
    registro.reportValidity();
    return;
    }

    alert('Usuario registrado')
    registro.reset();
})



