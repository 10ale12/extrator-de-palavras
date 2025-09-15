const botaoMostraPalavras = document.querySelector("#botao-palavrachave");
botaoMostraPalavras.addEventListener("click" , MostraPalavrasChave);
function MostraPalavrasChave(){
const texto = document.querySelector("#entrada-de-texto").value;
const campoResultado = document.querySelector("#resultado-palavrachave");
campoResultado.textContent = processaTexto(texto);
campoResultado.textContent = (" , ");
}
functionprocessaTexto(texto){
  let palavras = texto,split (/\P{L}+/u);
  return palavras;
}
