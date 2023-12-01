var contador = 0;

function entrar() {
    let numero = document.getElementById("numeroCarrinho");
    var login = document.getElementById("login");
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    if (email.trim() == "" && senha.trim() == "") {
        alert("Por favor, preencha todos os campos.");
    } else {
        alert("Bem-vindo, " + email);

        login.innerText = "Bem-Vindo, " + email;

        login.disabled = true;

        login.style.marginLeft = "100px";

        numero.style.display = "block";

        closeDialog();
    }
}
function openDialog() {
    document.getElementById("customDialog").style.display = "block";
}

function closeDialog() {
    document.getElementById("customDialog").style.display = "none";
}
function Mensagem() {
    let numero = document.getElementById("numeroCarrinho");

    contador++;

    numero.innerText = contador;
}

function troca() {
    let produto = document.querySelector(".produtos");
    let produto2 = document.querySelector(".produtos2");

    produto2.style.display = "grid";
    produto.style.display = "none";
}

function troca2() {
    let produto = document.querySelector(".produtos");
    let produto2 = document.querySelector(".produtos2");

    produto2.style.display = "none";
    produto.style.display = "grid";
}