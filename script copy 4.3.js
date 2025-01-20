const maxVocabulario = 4; 
const header = document.getElementById("preguntas"); 
const vocabulario = [];
const vocabularioLista = [];
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

function plantilla(){
    const selectedTemplate = document.createElement("div");
        selectedTemplate.innerHTML = `
        <div class="catalog-part">
          <label class="texto__parrafo">
            <button id="add"><i class="fas fa-plus-circle"></i></button> 
            <input type="text"" placeholder="Ten daily activities ejm:work"> 
          </label>
        </div>
        <div id="divMain" class="headerPrincipal"></div>
    `;
    document.body.appendChild(selectedTemplate); 
let  boton1 = document.getElementById("add"); 
     boton1.addEventListener("click",activity)
}
    //<<<<<<<<<<<<<<<< >>>>>>>>>>>>>>>>>>>><<<
function activity(){

let  preguntas = document.querySelector( "input"); 
let divMain = document.getElementById("divMain"); 
const divUl = document.createElement("ul");
const alertas = document.createElement("p");
divMain.textContent=""  

       divUl.classList.add("row")
  alertas.classList.add("siginificado")
    let pregunta = preguntas.value;
    vocabulario.push(pregunta);

if(pregunta.trim() === "") {
             alert("Por favor, ingresa una pregunta.");return;
}if(vocabulario.length === maxVocabulario){alertas.textContent = `¡Has alcanzado el límite de ${maxVocabulario} productos! Aquí están:`;

                                                                           //    swim(wather)
                //OBJETO   = el elemento se asemeja a una semilla but this need swing(corregir) + __c^2__ 
                //           al remain into rest => this should ${}                                 \\\\_\  a^2+b^2=c^2
                            //  que debemos do  1 or 0                                         eroni ^c^                                                        __
                            let checkClick=checkComplete(alertas) //un var here perform "one" reoni  ejm:es viceral representar <= or ^c^ but C<=estas \_\
                              //nomina nodejs  //ver clases nomina con el profe alura oni volas scii kiel faras [posicion]
           checkClick.classList.add("fixe")         
vocabulario.forEach(element => {
                  const li = document.createElement("li");
              //  let actions=document.getElementsByClassName(element)

              //  actions.disabled = true  
                  li.classList.add("catalog-part")
                  li.textContent = element;
                  alertas.appendChild(divUl);
                  divUl.appendChild(li);
                    //use us button to make follow toward "ver movimiento boton en blogger "
    divUl.appendChild(checkClick); 
                  vocabularioLista.push(element)                 //  lista creada desde el input
           
return vocabulario
});
  vocabulario.splice(0, vocabulario.length);  //or     productos=[]
  divMain.appendChild(alertas);
  alertas.appendChild(divUl);

return divMain
} 
preguntas.value = "";
}













const checkComplete=(divUl)=> {
  const addButton = document.createElement("button");
  const iFont = document.createElement("i");
  addButton.classList.add("botonCatalog-part")
  iFont.classList.add("fas","fa-plus-circle")

  addButton.appendChild(iFont)
  addButton.addEventListener("click", () => {

    question(divUl); 
  });

  return addButton;
}



const question=(divUl)=>{
  const div = document.createElement("div");
  const ul = document.createElement("ul");
  const li = document.createElement("li");

  const verbos = aleatorioSentencias();

  div.classList.add("headerPrincipal","siginificado")
  ul.classList.add("column")
  li.classList.add("catalog-part")

      li.textContent = verbos;
      ul.appendChild(li);
      div.appendChild(ul);
          divUl.appendChild(div);
return divUl
}





function aleatorioSentencias() {
    const indiceAleatorio2 =   vocabularioLista [Math.floor(Math.random() * vocabularioLista.length)]
    const preguntaBase = sentencias[Math.floor(Math.random() * sentencias.length)]
    const preguntaCompleta = preguntaBase.replace("${name} ", ` ${indiceAleatorio2} `);
return preguntaCompleta;    
}


// funcion tarjeta de actividad

plantilla(); 