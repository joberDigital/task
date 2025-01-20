const productos = [];
const boton = document.querySelector("button");
const preguntas = document.getElementById("preguntas");
const answ = document.getElementById("lista-respuestas");
function obtenerRespuestas() {
  const pregunta = preguntas.value;
  productos.push(pregunta);
if( productos.length === 3) {
      answ.textContent = `¡Has alcanzado el límite de productos! Aquí están:`;
            // Crear un nuevo elemento de lista y agregarlo a la lista
      productos.forEach(producto => {
        const li = document.createElement("li");
        li.textContent = producto;
        window.document.body.appendChild(li);
 });
}
  preguntas.value = ""; // Limpiar el campo de preguntas
}
boton.addEventListener('click', obtenerRespuestas);