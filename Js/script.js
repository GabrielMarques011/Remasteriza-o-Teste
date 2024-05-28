const form = document.getElementById("form");
const dados = document.getElementById("dados");
const empresa = document.getElementById("empresa");
const bairro = document.getElementById("bairro");
const cidade = document.getElementById("cidade");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const select = document.getElementById("select");
const mensagem = document.getElementById("mensagem");

const itensLista = ["dados", "empresa", "bairro", "cidade", "nome", "email", "telefone", "select", "mensagem"]

function validacaoForm() {
    itensLista.forEach(item => {
        const input = document.getElementById(item);
        
        if (input.value === '') {
            errorInput(input, "Preencha o campo!")
        } else {
            const formItem = input.parentElement;
            formItem.classList = "form-dados";
        }
    });
}

function errorInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a");

    textMessage.innerText = message;

    formItem.className = "form-dados error"
}

function validacaoSubmitLimpar(){
    itensLista.forEach(item=>{
        document.getElementById(item).value = '';
    })
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    if(data.dados == '' || data.empresa == '' || data.bairro == '' || data.cidade == '' || data.nome == '' || data.email == '' || data.telefone == ''){
        validacaoForm();
    }else{
        validacaoSubmitLimpar();
    }
})

function validacaoInput(text) {
    const textValue = text.value;

    if (textValue === '') {
        errorInput(text, "Preencha o campo!")
    } else {
        const formItem = text.parentElement;
        formItem.classList = "form-dados";
    }

    console.log(text.value)
}