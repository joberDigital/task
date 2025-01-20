const productos = [];
const boton = document.querySelector("button");
const preguntas = document.getElementById("preguntas");
const answ = document.getElementById("lista-respuestas");

function obtenerRespuestas() {
  const pregunta = preguntas.value;
  answ.innerHTML = "";
for (let i = 0; i < productos.length; i++) {
 answ.innerHTML+= "<p>"+productos[i] +"</p>"
console.log(productos[i])
}
preguntas.value = ""; // Limpiar el campo de preguntas
productos.push(pregunta);
}
boton.addEventListener('click', obtenerRespuestas);