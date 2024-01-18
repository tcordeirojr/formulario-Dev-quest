//Botao Enviar//
const botaoSubmit = document.getElementById("botaoSubmit");
botaoSubmit.addEventListener('click', function () {
    
});


//------------------------------------------------------//
//Validação de Formulario//
document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    if (validarFormulario()) {
        
        alert('formulario com sucesso');
        
    }
    else{
        alert("preencha todos os campos obrigatorios");
    }
});

function validarFormulario() {
    // let nome = document.getElementById('nome');
    // let email = document.getElementById('email');
    // let telefone = document.getElementById('telefone');
    // let mensagem = document.getElementById('mensagem');
    let forms = document.getElementsByClassName('form');

    // if(nome ==="" || email ==="" || telefone =="" || mensagem ===""){
        if(forms =! ""){
        return false;
    }else(forms =!value)
    return true; 
}
validarFormulario();
