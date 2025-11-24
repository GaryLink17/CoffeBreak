const formulario = document.querySelector('.formulario');
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

nombre.addEventListener('input', leerDatos);
email.addEventListener('input', leerDatos);
mensaje.addEventListener('input', leerDatos);

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    const {nombre: nombreForm, email:emailForm, mensaje:mensajeForm} = datos;

    if (nombreForm === '' || emailForm === '' || mensajeForm === '') {
        mostrarAlerta('Debes completar todos los campos', 'error');
        return;
    }
    mostrarAlerta('Enviado');

    formulario.reset()
})

function leerDatos(e) {
    datos[e.target.id] = e.target.value;
}

function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if (error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('enviado');
    }

    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 5000)
}