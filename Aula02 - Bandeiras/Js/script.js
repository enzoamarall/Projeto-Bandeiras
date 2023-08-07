// dom

const alvo = document.querySelector("#alvo")
const btBrasil = document.querySelector("#brasil")
const btInglaterra = document.querySelector("#inglaterra")
const btItalia = document.querySelector("#italia")
const btUsa = document.querySelector("#usa")
const btAngola = document.querySelector("#angola")
 //addEventLister (Evento, Função)

btBrasil.addEventListener('click',bandBrasil)
btInglaterra.addEventListener('click',bandInglaterra)
btItalia.addEventListener('click',bandItalia)
btUsa.addEventListener('click',bandUsa)
btAngola.addEventListener('click',bandAngola)

//funções

function bandBrasil(){
    alvo.src="Images/01 - Brasil.jpg"    
}

function bandInglaterra(){
    alvo.src="Images/02 - inglaterra.jpg"
}

function bandItalia(){
    alvo.src="Images/03 - italia.png"
}

function bandUsa(){
    alvo.src="Images/04 - USA.png"
}

function bandAngola(){
    alvo.src="Images/05 - angola.jpg"
}
