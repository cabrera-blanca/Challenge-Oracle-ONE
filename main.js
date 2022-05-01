
var info = document.getElementById('info');
var texto = document.querySelector('#mensaje').innerHTML;
var botonEncriptar = document.querySelector("#encriptar-btn");
var botonDesencriptar = document.querySelector("#desencriptar-btn");
var botonCopiar = document.querySelector("#copiar-btn");
var textAreaCifrador = document.querySelector("#mensaje");
var textAreaResultado = document.querySelector("#final-text");
var vacio = document.querySelector("#img1");
var resultado = document.querySelector("#resultado");
var botonLimpiar = document.querySelector("#limpiar-btn");


//funcion para encriptar

function encriptar(texto){
    var textoEncriptado = "";
    
    textoEncriptado = texto.replace(/e/g, "enter");
    textoEncriptado = textoEncriptado.replace(/i/g, "imes");
    textoEncriptado = textoEncriptado.replace(/a/g, "ai");
    textoEncriptado = textoEncriptado.replace(/o/g, "ober");
    textoEncriptado = textoEncriptado.replace(/u/g, "ufat");
    
    return textoEncriptado;
}

function desencriptar(texto){
    var textoDesencriptado = "";
    
    textoDesencriptado = texto.replace(/enter/g, "e");
    textoDesencriptado = textoDesencriptado.replace(/imes/g, "i");
    textoDesencriptado = textoDesencriptado.replace(/ai/g, "a");
    textoDesencriptado = textoDesencriptado.replace(/ober/g, "o");
    textoDesencriptado = textoDesencriptado.replace(/ufat/g, "u");

    return textoDesencriptado;
}



//eventos 

if(textAreaCifrador.value === ""){
    vacio.style.display="block";
    resultado.style.display="none"
}


botonEncriptar.addEventListener("click", function() {
    var input = textAreaCifrador.value;
    
    vacio.style.display="none";
    resultado.style.display="block";

    textAreaResultado.value = encriptar(input);
    textAreaCifrador.value = "";

});


botonDesencriptar.addEventListener("click", function() {
    var input = textAreaCifrador.value;
    textAreaResultado.value = desencriptar(input);
    textAreaCifrador.value = "";
});

 
//COPIAR

botonCopiar.addEventListener("click", function() {
    copiarTexto();
});

function copiarTexto(){
    var copiarTexto = document.getElementById("final-text");
    
    copiarTexto.select();
    document.execCommand('copy');

    alert("Texto Copiado!");
}


//Limpiar

botonLimpiar.addEventListener("click", function()
{
    limpiarTexto();
})

function limpiarTexto(){
    var limpiarTexto = document.getElementById("limpiar-btn");

    textAreaResultado.value = "";
    vacio.style.display="block";
    resultado.style.display="none"

}



