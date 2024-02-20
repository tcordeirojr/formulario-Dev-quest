const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const telefone = document.querySelector("#telefone");
const mensagem = document.querySelector("#mensagem");

console.log(nameInput)

form.addEventListener("submit", (event) => {
    event.preventDefault();
    // verificando se o nome esta valido
    if(nameInput.value === "") {
        alert("por favor preencha o seu nome");
        return;
    }
    //verificando se o email esta valido 
    if(email.value === "" || !validarEmail(email.value)){
        alert("por favor preencha o seu email");
        return;
    }
    // verificando se o telefone esta valido
    if(telefone.value === ""){
        alert("por favor preencha o seu telefone");
        return;
    }
    if(mensagem.value === ""){
        alert("escreva a sua mensagem");
        return;
    }

    form.submit()
});
    //função para validar email 
    function validarEmail(email){
        const emailRegex = new RegExp(
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-z]{2,}$/
        );
    if (emailRegex.test(email)){
        return true;
    }
    return false;
    }
    

