const textoIntroducido = document.querySelector(".textoIntroducido");
const resultado = document.querySelector(".resultado");
const reglaEncriptacion = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];


function botonEncriptar() {
    const textoEncriptado = encriptar(textoIntroducido.value)
    resultado.value = textoEncriptado
    resultado.style.backgroundImage = "none";
    textoIntroducido.value =""
}
    
function encriptar(textoPorEncriptar){
    textoPorEncriptar = textoPorEncriptar.toLowerCase();
    for (let index = 0; index < reglaEncriptacion.length; index++) {      
        if (textoPorEncriptar.includes(reglaEncriptacion[index][0]));
        textoPorEncriptar = textoPorEncriptar.replaceAll(reglaEncriptacion[index][0], reglaEncriptacion[index][1]);
        }
    return textoPorEncriptar
}

function botonDesencriptar(){
    const textoDesencriptado = desencriptar(textoIntroducido.value);
    resultado.value = textoDesencriptado;
    resultado.style.backgroundImage = "none";
    textoIntroducido.value =""
}

function desencriptar(textoPorDesencriptar){
    textoPorDesencriptar = textoPorDesencriptar.toLowerCase();
    for (let index = 0; index < reglaEncriptacion.length; index++) {      
        if (textoPorDesencriptar.includes(reglaEncriptacion[index][1]));
        textoPorDesencriptar = textoPorDesencriptar.replaceAll(reglaEncriptacion[index][1], reglaEncriptacion[index][0]);
        }
    return textoPorDesencriptar
}

function botonCopiar(){
    resultado.select()
    document.execCommand("Copy")
    resultado.value=""
    
}