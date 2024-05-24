const form = document.getElementById("form");
const dados = document.getElementById("dados");
const empresa = document.getElementById("empresa");
const bairro = document.getElementById("bairro");
const cidade = document.getElementById("cidade");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");

form.addEventListener("submit", (event) =>{
    event.preventDefault();
    validandoDados();
    validandoEmpresa();
    validandoBairro();
    validandoCidade();
    validandoNome();
    validandoEmail();
    validandoTelefone();
})


function validandoDados(){
    const dadosValue = dados.value;

    if(dadosValue === ''){
        errorInput(dados, "Preencha o campo!")
    }else{
        const formItem = dados.parentElement;
        formItem.classList = "form-dados";
    }
}

function validandoEmpresa(){
    const empresaValue = empresa.value;

    if(empresaValue === ''){
        errorInput(empresa, "Preencha o campo!")
    }else{
        const formItem = empresa.parentElement;
        formItem.classList = "form-dados";
    }
}

function validandoBairro(){
    const bairroValue = bairro.value;

    if(bairroValue === ''){
        errorInput(bairro, "Preencha o campo!")
    }else{
        const formItem = bairro.parentElement;
        formItem.classList = "form-dados";
    }
}

function validandoCidade(){
    const cidadeValue = cidade.value;

    if(cidadeValue === ''){
        errorInput(cidade, "Preencha o campo!")
    }else{
        const formItem = cidade.parentElement;
        formItem.classList = "form-dados";
    }
}

function validandoNome(){
    const nomeValue = nome.value;

    if(nomeValue === ''){
        errorInput(nome, "Preencha o campo!")
    }else{
        const formItem = nome.parentElement;
        formItem.classList = "form-dados";
    }
}

function validandoEmail(){
    const emailValue = email.value;

    if(emailValue === ''){
        errorInput(email, "Preencha o campo!")
    }else{
        const formItem = email.parentElement;
        formItem.classList = "form-dados";
    }
}

function validandoTelefone(){
    const telefoneValue = telefone.value;

    if(telefoneValue === ''){
        errorInput(telefone, "Preencha o campo!")
    }else{
        const formItem = telefone.parentElement;
        formItem.classList = "form-dados";
    }
}

function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a");

    textMessage.innerText = message;

    formItem.className = "form-dados error"
}


/* função que abre o hamburger */
function toggleMenu() {
    const menu = document.getElementById('menu');
    const overlay = document.getElementById('overlay');
    const hamburger = document.querySelector('.hamburger');
    menu.classList.toggle('show');
    overlay.classList.toggle('show');
    hamburger.classList.toggle('active');
}