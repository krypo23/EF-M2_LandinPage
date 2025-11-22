// Esperamos a que el contenido del DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {

    // Usar document.querySelector() para obtener referencias a al formulario y sus campos de entrada

    const formRegistro = document.querySelector('#registro');
    const inputNombre = document.querySelector('#nombre');
    const inputEmail = document.querySelector('#email');
    const inputEmpresa = document.querySelector('#empresa');

    // Contenedor donde pondremos la alerta de éxito (justo antes del formulario)
    const formContainer = formRegistro.parentNode;


    // Añade un listener para el evento 'submit' a tu formulario.
    formRegistro.addEventListener('submit', function(event) {
    //Dentro del listener, llama a event.preventDefault().

        event.preventDefault();

        // Obtener los valores limpios de espacios
        const nombreValor = inputNombre.value.trim();
        const emailValor = inputEmail.value.trim();
        const empresaValor = inputEmpresa.value.trim();

        // Escribir una lógica if/else para comprobar si los valores de los inputs están vacíos.
        // El html lo hace pero validamos (por si acaso :))
        if (nombreValor === '' || emailValor === '' || empresaValor === '') {
            // Si algún campo está vacío (aunque el navegador suele bloquearlo antes)
            alert('Por favor, completa todos los campos obligatorios.');
        } else {
            // Si todo es válido:

            // Crear e inyectar alerta de éxito de Bootstrap
            crearAlertaExito();

            // Opcional: limpiar el formulario
            formRegistro.reset();
        }
    });


    // Función auxiliar para crear la alerta (aqui me ayude de la IA :( 
    function crearAlertaExito() {
        // Limpiar alertas previas si las hubiera
        const alertaPrevia = document.querySelector('.alert-registro');
        if (alertaPrevia) {
            alertaPrevia.remove();
        }

        // Crear elemento div para mostras el alerta
        const alertaDiv = document.createElement('div');
        // Clases de Bootstrap para alerta verde (success) y que se pueda cerrar (dismissible)
        alertaDiv.className = 'alert alert-success alert-dismissible fade show alert-registro mt-3';
        alertaDiv.setAttribute('role', 'alert');

        // Contenido HTML de la alerta
        alertaDiv.innerHTML = `
            <strong>¡Registro completado!</strong> Tus datos han sido enviados correctamente.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        `;

        // Inyectar la alerta antes del formulario
        formContainer.insertBefore(alertaDiv, formRegistro);


    }

});