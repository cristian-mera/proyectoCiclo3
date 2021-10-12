
//variables
var user = document.getElementById('miCorreo');
var password = document.getElementById('miPassword');
var error = document.getElementById('error');
error.style.color = 'red';


function enviarDatos(){
   /* console.log('Enviando datos...');
        
    let mensajeError = [];
    if (user.value === null || user.value === '' && password.value === null || password.value ==='') {
        mensajeError.push('Rellene los campos requeridos....');
        console.log('datos no ingresados')
    }else{
        let pages = location.href = "pages/crud.html";
        console.log('tratando de inr a otra web')
        return pages;
    }
        

    error.innerHTML = mensajeError.join(',');
    return false */
    let mensajeError = [];
    if(user.value === 'djmendoza39@gmail.com' && password.value === '12345'){
        location.href="../pages/crud.html";
    }else{
        mensajeError.push('rellene los campos requeridos');
        console.log(mensajeError);
    }

    
}