const alvo = document.querySelector("#alvo")
const btAcender = document.querySelector("#acender")
const btApagar = document.querySelector("#apagar")

btAcender.addEventListener('click', acender)
btApagar.addEventListener('click', apagar)
alvo.addEventListener('dblclick',quebrar)

function acender(){
    alvo.src="Images/acesa.gif"
}

function apagar(){
    alvo.src="Images/apagada.gif"
}

function quebrar(){
    alvo.src="Images/quebrada.jpg"
}