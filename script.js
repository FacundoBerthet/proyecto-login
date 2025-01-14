document.addEventListener('DOMContentLoaded', function(){

    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    loginForm.addEventListener('submit', function(event){
        event.preventDefault();
        //Por agregar: metodo que valide el formulario
    })

   emailInput.addEventListener('blur', function(){
        //Por agregar: metodo que valide el mail
   }) 

   emailInput.addEventListener('change', function(){
        //Por agregar: metodo que limpie error
   })

   passwordInput.addEventListener('change', function(){
        //Por agregar: metodo que limpie error
    })

    confirmPasswordInput.addEventListener('change', function(){
        //Por agregar: metodo que limpie error
    })

    //Metodo que valida el form
    function validateForm(){

    }

    //Metodo que valida el email
    function validateEmail(){
        const emailRegex = /^[^\s@]+@[^\s@]+\-[^\s@]+$/;
        const emailValue = emailInput.value.trim()//trim elimina espacios vacios al comienzo y al final
        if(!emailRegex.test(emailValue)){
            //Por agregar: mostrar error
            return false;
        }
        return true;
    }

    //Metodo que valida la contraseña
    function validatePassword(){
        const passwordValue = passwordInput.value.trim();
        if(passwordValue.lenght < 6){
            //por agregar: mostrar error
            return false;
        }
        return true
    }

    //Metodo que valida que las 2 contraseñas dadas son iguales
    function validatePasswordMatch(){
        const passwordValue = passwordInput.value.trim();
        const confirmPasswordValue = confirmPasswordInput.value.trim();
        if(passwordValue != confirmPasswordValue){
            //por agregar: mostrar error
            return false;
        }
        return true;
    }

    //Metodo que muestra un mensaje de error
    function showError(errorElement, message){
        errorElement.innerHTML = message;
        errorElement.style.display = 'block'
    }

    //Metodo que saca un mensaje de error
    function clear(errorElement){
        errorElement.innerHTML = "";
        errorElement.style.display = "none";
    }
})