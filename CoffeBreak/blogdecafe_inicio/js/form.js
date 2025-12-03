const formulario = document.querySelector('.formulario');
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

nombre.addEventListener('input', leeDatos);
email.addEventListener('input', leeDatos);
mensaje.addEventListener('input', leeDatos);


formulario.addEventListener('submit', e => {
    e.preventDefault();

    const { nombre: nombreForm, email: emailForm, mensaje: mensajeForm } = datos;

    if (nombreForm === "" || emailForm === "" || mensajeForm === "") {
        mostrarAlerta("Completar todos los campos", "error");
        return;
    }
    mostrarAlerta("Enviado");
    formulario.reset()
})

function leeDatos(e) {
    datos[e.target.id] = e.target.value;
}

function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if (error) {
        alerta.classList.add("error");
    } else {
        alerta.classList.add("enviado");
    }

    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 5000)
}