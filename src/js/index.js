const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const telefone = document.querySelector("#telefone");
const mensagem = document.querySelector("#mensagem");
const msgObg = document.querySelectorAll(".error-info");
const errorMsg = document.querySelector(".error-info-mensagem")


form.addEventListener("submit", (event) => {
    event.preventDefault();

    if(nameInput.value === ""){
        nameInput.style.border = "2px solid #f52e2e";
        msgObg[0].style.display="flex";
    }else{
        nameInput.style.border = "2px solid #3ccc87";
        msgObg[0].style.display="";
    };
    
    if(email.value === "" || !validarEmail(email.value)){
        email.style.border = "2px solid #f52e2e";
        msgObg[1].style.display = "flex";
        
    }else{
        email.style.border = "2px solid #3ccc87";
        msgObg[1].style.display="";
    };
    
    if(telefone.value === "" || !validarNumero(telefone.value)){
        telefone.style.border = "2px solid #f52e2e" ;
        msgObg[2].style.display = "flex"
    }else{
        telefone.style.border = "2px solid #3CCC87";
        msgObg[2].style.display="";
    };
    
    if(mensagem.value === ""){
        mensagem.style.border = "2px solid #f52e2e";
        errorMsg.style.display = "flex";
        return;
    }else{
        mensagem.style.border = "2px solid #3ccc87";
        errorMsg.style.display="";
    };

    form.submit()
});

    function validarEmail(email){
        const emailRegex = new RegExp(
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-z]{2,}$/
        );
    if (emailRegex.test(email)){
        return true;
    }
    return false;
        
    };

    function validarNumero(telefone) {
        const telefoneRegex = new RegExp(
            /^[0-9]/
        );
        if(telefoneRegex.test(telefone)){
            return true;
        }
        return false;
        
    };


