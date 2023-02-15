const textoInicio = document.querySelector(".texto-inicio"); //unimos js con las clases de html
const textoFinal = document.querySelector(".texto-Final");

/*
    La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "a" es convertida para "ai"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"
*/

//Logica para encriptar 
function btnEncriptar(){
    const textoEncriptado = encriptar(textoInicio.value);
    textoFinal.value = textoEncriptado;
    textoFinal.style.backgroundImage = "none";
    textoInicio.value = "";
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"], ["i" ,"imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]; // reglas(?)
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);

        }      
    }
    return stringEncriptada;
}

//Logica para desencriptar

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textoInicio.value);
    textoFinal.value = textoEncriptado;
    textoInicio.value = "";
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["a", "ai"], ["e","enter"], ["i" ,"imes"], ["o", "ober"], ["u", "ufat"]]; // reglas(?)
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }      
    }
    return stringDesencriptada;
}

function copiar(){
    textoFinal.select();
    navigator.clipboard.writeText(textoFinal.value);
    textoFinal.value = "";
    alert("Tecto copiado");

}