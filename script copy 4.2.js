const boton2 = document.querySelector("#app")
const boton = document.querySelector("button");
const preguntas = document.getElementById("preguntas");
const listaRespuestas = document.getElementById("lista-respuestas"); // Suponiendo que tienes una lista con este id en tu HTML

const productos = [];
const productos2 = [];
const sentencias = [
  "I loves our daily ${name} in the park",
  "The park is the perfect place for to ${name} and play.",
  "We always make sure to schedule time for ${name} every day.",
  "I ${name} and also dinner me with taste every evening.",
  "The glass is always filled with fresh water for to${name} ",
"After a long day of playing,  I enjoys a long ${name} ",
"I ${name} with unexpected visitor out loud",
"I ${name} to chewing toys guise chiclets",
"I ${name} intently, following a fascinating scent.",
"I ${name} fetch thoughts, creating them, and recreating them."
];
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
        console.log(productos);
        productos2.push(producto)
    return productos
  });
      productos.splice(0, productos.length);  //or     productos=[]
  } 
      preguntas.value = "";
}
function aleatorioSentencias() {
        const indiceAleatorio2 =   productos2 [Math.floor(Math.random() * productos2.length)]
        console.log(indiceAleatorio2)
//Aleatorio  array.....less code
        const preguntaBase = sentencias[Math.floor(Math.random() * sentencias.length)]
        const preguntaCompleta = preguntaBase.replace("${name} ", ` ${indiceAleatorio2} `);
    return preguntaCompleta;    
}
// const verbos = obtenerPreguntaAleatoria();
// console.log(verbos);         // Podría imprimir: "¿Cuál es tu *verbos* favorito?"
function obtenerRespuestas2() {
    const verbos = aleatorioSentencias();
    const li = document.createElement("li");
        li.textContent = verbos;
        listaRespuestas.appendChild(li);
}
boton.addEventListener('click', obtenerRespuestas);
boton2.addEventListener('click', obtenerRespuestas2);
