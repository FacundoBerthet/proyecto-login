document.addEventListener('DOMContentLoaded', function(){

    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    const showHideButton = document.getElementById('show-hide');

    //Listeners eventos
    loginForm.addEventListener('submit', function(event){
        event.preventDefault();
        validateForm();
    })

   emailInput.addEventListener('blur', function(){
        validateEmail();
   }) 

   emailInput.addEventListener('input', function(){
        clear(emailError);
   })

   passwordInput.addEventListener('input', function(){
        clear(passwordError);
    })

    confirmPasswordInput.addEventListener('input', function(){
        clear(confirmPasswordError);
    })

    //Configuracion boton mostrar/ocultar
    showHideButton.addEventListener('click', function(){
        const isPassword = passwordInput.type === "password";
        passwordInput.type = isPassword ? "text" : "password";
        confirmPasswordInput.type = isPassword ? "text" : "password";
    });
    

    //Metodo que valida el form
    function validateForm(){
        const isValidEmail = validateEmail();
        const isValidPassword = validatePassword();
        const passwordMatch = validatePasswordMatch();

        if(isValidEmail && isValidPassword && passwordMatch){
            saveToLocalStorage();
            alert("Has ingresado con exito");
        }
    }

    //Metodo que valida el email
    function validateEmail(){
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const emailValue = emailInput.value.trim()//trim elimina espacios vacios al comienzo y al final
        if(!emailRegex.test(emailValue)){
            showError(emailError, "Ingresa un email válido");
            return false;
        }
        return true;
    }

    //Metodo que valida la contraseña
    function validatePassword(){
        const passwordValue = passwordInput.value.trim();
        if(passwordValue.length < 6){
            showError(passwordError, "Ingresa una contraseña de al menos 6 caracteres")
            return false;
        }
        return true
    }

    //Metodo que valida que las 2 contraseñas dadas son iguales
    function validatePasswordMatch(){
        const passwordValue = passwordInput.value.trim();
        const confirmPasswordValue = confirmPasswordInput.value.trim();
        if(passwordValue != confirmPasswordValue){
            showError(confirmPasswordError, "Las contraseñas no coinciden")
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

    //Metodo que guarda elementos en el localStorage
    function saveToLocalStorage(){
        const emailValue = emailInput.value.trim();
        localStorage.setItem('email', emailValue);
        const body = bodyBuilderJSON();
        console.log(body);
    }

    //Metodo que crea un JSON
    function bodyBuilderJSON(){
        return {
            "email": emailInput.value,
            "password": passwordInput.value
        }
    }
})