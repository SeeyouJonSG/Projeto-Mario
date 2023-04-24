

// Passo 1 - dar um jeito de pegar o elemento que representa o botao na tela usando js 

console.log (document.querySelector(".botao-trailer"));

const botaoTrailer = document.querySelector(".botao-trailer")
const video = document.getElementById("video");
const modal = document.querySelector(".modal")
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");   


}















botaoTrailer.addEventListener("click", () =>{
    
    alternarModal()
      
      video.setAttribute("src", linkDoVideo)     
})



// OBJETIVO 2 - quando o usuario clicar no X devemos fechar a modal    
// Passo 1 - dar um jeito de pegar o elemento de fechar modal usando o js
const botaoFecharModal = document.querySelector(".fechar-modal")

// Passo 2 - dar um jeito de identificar quando o usuario clicou no X
botaoFecharModal.addEventListener("click", () =>{
    // Passo 3 - fechar a modal
    alternarModal()
    video.setAttribute("src", "");

});




