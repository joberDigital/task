const productos = [];
const boton = document.querySelector("button");
const preguntas = document.getElementById("preguntas");
const listaRespuestas = document.getElementById("lista-respuestas"); // Suponiendo que tienes una lista con este id en tu HTML
const maxProductos = 3; 


function obtenerRespuestas() {
  listaRespuestas.textContent=""   //clear body
  const pregunta = preguntas.value;

  if (pregunta.trim() === "") {
    alert("Por favor, ingresa una pregunta.");
    return;
  }
  productos.push(pregunta);
  if (productos.length === maxProductos) {
    listaRespuestas.textContent = `¡Has alcanzado el límite de ${maxProductos} productos! Aquí están:`;
    productos.forEach(producto => {
      const li = document.createElement("li");
      li.textContent = producto;
      listaRespuestas.appendChild(li);
    });
    productos.splice(0, productos.length);  //or     productos=[]
  } 
 preguntas.value = "";
}
boton.addEventListener('click', obtenerRespuestas);