// Array de preguntas
const preguntas = [
    "¿Cuál es tu nombre?",
    "¿Cuántos años tienes?",
    "¿Cuál es tu color favorito?",
    "¿Cuál es tu ciudad?",
    "¿Cuál es tu comida favorita?"
];

// Array para almacenar las respuestas
const respuestas = [];
// Función para crear un elemento de formulario (pregunta)
function crearPregunta(pregunta) {
    const div = document.createElement('div');
    const input = document.createElement('input');
    div.textContent = pregunta;
    div.appendChild(input);
    return div;
}
// Función para agregar preguntas al DOM
function agregarPreguntas() {
    const contenedor = document.getElementById('preguntas');
    preguntas.forEach(pregunta => {
    contenedor.appendChild(crearPregunta(pregunta));
    });
}

// Función para obtener las respuestas y mostrarlas
function obtenerRespuestas() {
    const contenedor = document.getElementById('as');
    const inputs = document.querySelectorAll('input');
    inputs.forEach((input, index) => {
        respuestas.push(input.value);
    });
console.log(respuestas); // Mostrar las respuestas en la consola
contenedor.innerHTML=(respuestas)
}

// Agregar las preguntas al cargar la página
agregarPreguntas();

// Obtener las respuestas al enviar el formulario (puedes usar un botón o un evento de envío)
// Aquí se muestra un ejemplo usando un botón
const boton = document.createElement('button');
boton.textContent = 'hacer click ';
document.body.appendChild(boton);
boton.addEventListener('click', obtenerRespuestas);