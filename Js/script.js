const form = document.getElementById("form");
const dados = document.getElementById("dados");
const empresa = document.getElementById("empresa");
const bairro = document.getElementById("bairro");
const cidade = document.getElementById("cidade");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");

const itensLista = ["dados", "empresa", "bairro", "cidade", "nome", "email", "telefone"]

function validacaoForm(item) {
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

form.addEventListener("submit", (event) => {
    event.preventDefault();
    validacaoForm();
})

function errorInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a");

    textMessage.innerText = message;

    formItem.className = "form-dados error"
}

function validacaoInput(text) {
    const textValue = text.value;

    console.log(text)

    if (textValue === '') {
        errorInput(text, "Preencha o campo!")
    } else {
        const formItem = text.parentElement;
        formItem.classList = "form-dados";
    }
}