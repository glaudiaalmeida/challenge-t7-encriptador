document.addEventListener("DOMContentLoaded", () => {
    const textarea= document.getElementById("text");
      textarea.addEventListener("focus", () => {
        textarea.placeholder = "";
    });
    textarea.addEventListener("blur", () => {
        textarea.placeholder = "Digite aqui o texto que vamos encriptar";
    });
});


const textArea = document.querySelector(".text-encriptar");
const mensagem = document.querySelector(".mensagem");
  

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.Value);
    mensagem.value = textoEncriptado;
    textArea = "";

}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
};

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.Value);
    mensagem.value = textoDesencriptado;
    textArea = "";

}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i=0; i<matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
};
