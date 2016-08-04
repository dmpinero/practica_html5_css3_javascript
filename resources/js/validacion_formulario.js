if (!Modernizr.formvalidation)
{
      //console.log('No soportada validación de formularios HTML5');
      window.onload = function() {
        H5F.setup(document.getElementById("formulario-contacto"));
      }
}

// Obtener referencias al formulario
var form = document.getElementById("formulario-contacto");

// Validar textarea (Máximo de 150 palabras)
var mensaje = document.getElementById("mensaje");
mensaje.addEventListener('keyup', function() {
    var palabras = this.value.match(/\S+/g).length; // Contar el nº de palabras
    document.getElementById('contador_palabras').innerHTML = palabras;
    document.getElementById('palabras_restantes').innerHTML = 150 - palabras;
});

// Si el campo "¿Cómo me has conocido? tiene el valor "Otros" mostrar nuevo campo
var como_me_has_conocido = document.getElementById("como-me-has-conocido");
// Si el campo tiene el valor 'Otros' mostrar nuevo campo
var dime_como_me_has_conocido = document.createElement("input");
dime_como_me_has_conocido.setAttribute("id", "dime_como_me_has_conocido");
dime_como_me_has_conocido.setAttribute("type", "text");
dime_como_me_has_conocido.setAttribute("name", "dime_como_me_has_conocido");
dime_como_me_has_conocido.setAttribute("placeholder", "Díme cómo me has conocido");
dime_como_me_has_conocido.setAttribute("required", "")
                                       
// Añadir listener al evento de cambio en el campo select
como_me_has_conocido.addEventListener("change", function() {
if (como_me_has_conocido.value == 'Otros')
{
    this.parentNode.appendChild(dime_como_me_has_conocido);
}
else {
    if(document.getElementById("dime_como_me_has_conocido")) {
        this.parentNode.removeChild(dime_como_me_has_conocido);
    }
}
});

// Función que añade la capa si no existe
function añadecapa(capa, capa_añadida) {
    if (! document.getElementById(capa).classList.contains(capa_añadida))
        document.getElementById(capa).classList.add(capa_añadida);
}

// Función que borra la capa si existe
function borracapa(capa, capa_borrar) {
    if (document.getElementById(capa).classList.contains(capa_borrar))
        document.getElementById(capa).classList.remove(capa_borrar);
}

// Validación del formulario al hacer submit
form.addEventListener("submit", function(evt){
    // Validar nombre (requerido)
    var nombre = document.getElementById('nombre');
    if (nombre.checkValidity() == false) {
        document.getElementById('capa_error').style.display='block';      
        document.getElementById('texto_capa_error').innerText = "Escribe tu nombre";           
        añadecapa('capa_error', 'error');
        borracapa('capa_error', 'success');
        nombre.focus();
        evt.preventDefault();
        return false;
    }

    // Validar email (Formato)
    var email = document.getElementById('email');
    if (email.checkValidity() == false) {
        document.getElementById('texto_capa_error').innerText = "Email no válido";
        añadecapa('capa_error', 'error');
        borracapa('capa_error', 'success');        
        email.focus();
        evt.preventDefault();
        return false;
    }

    // Si el campo dime_como_me_has_conocido existe, validamos que esté informado
    var dime_como_me_has_conocido = document.getElementById("dime_como_me_has_conocido");    
    if (dime_como_me_has_conocido != null) {
        if (dime_como_me_has_conocido.checkValidity() == false) {
            document.getElementById('texto_capa_error').innerText = "Por favor indica cómo me has conocido";
            añadecapa('capa_error', 'error');
            borracapa('capa_error', 'success');            
            dime_como_me_has_conocido.focus();
            evt.preventDefault();
            return false;
        }
    }
    
    // Validar número de teléfono (9 dígitos)
    var telefono = document.getElementById("telefono");
    if (telefono.checkValidity() == false) {
        document.getElementById('texto_capa_error').innerText = "Formato de teléfono no válido";
        añadecapa('capa_error', 'error');
        borracapa('capa_error', 'success');        
        telefono.focus();
        evt.preventDefault();
        return false;
    }
    
    var palabras_restantes = document.getElementById('palabras_restantes').innerHTML;
    if (parseInt(palabras_restantes) < 0)
    {
        document.getElementById('texto_capa_error').innerText = "Número de palabras excedido";
        añadecapa('capa_error', 'error');
        borracapa('capa_error', 'success');        
        evt.preventDefault();
        return false;  
    }
    
    // Advertimos de éxito en el envío del formulario, simulando su envio.
    document.getElementById('texto_capa_error').innerText = "Formulario enviado con éxito";
    añadecapa('capa_error', 'success');
    borracapa('capa_error', 'error');    
    evt.preventDefault();
    return false;    
});