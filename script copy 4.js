const boton2 = document.querySelector("#app")
const boton = document.querySelector("button");
const preguntas = document.getElementById("preguntas");
const listaRespuestas = document.getElementById("lista-respuestas"); // Suponiendo que tienes una lista con este id en tu HTML
const maxProductos = 3; 
const productos = [];
const productos2 = [];
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
      console.log(productos);
      productos2.push(producto)

      return productos
});
    productos.splice(0, productos.length);  //or     productos=[]
} 
//  preguntas.value = "";
}
function obtenerRespuestas2() {
const sentencias = [
    "¿Cuál es ${name} tu nombre?",
    "¿Cuántos años ${name} tienes?",
    "¿Cuál es tu ${name} color favorito?",
    "¿Cuál es ${name} tu ciudad?",
    "¿Cuál es tu ${name} comida favorita?"
  ];
  
//Aleatorio  inputs
const indiceAleatorio = Math.floor(Math.random() * productos2.length);
const indiceAleatorio2=productos2[indiceAleatorio]
console.log(indiceAleatorio2)

//Aleatorio  arrays
const indiceAleatorio3 = Math.floor(Math.random() * sentencias.length);
const preguntaBase = sentencias[indiceAleatorio3];
const preguntaCompleta = preguntaBase.replace("${name} ", ` ${indiceAleatorio2} `);
    console.log(preguntaCompleta);
const li = document.createElement("li");
    li.textContent = preguntaCompleta;
    listaRespuestas.appendChild(li);
  return preguntaCompleta;
}
boton.addEventListener('click', obtenerRespuestas);
boton2.addEventListener('click', obtenerRespuestas2);
