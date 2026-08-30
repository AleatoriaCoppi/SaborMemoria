/* =====================================================
   SABOR & MEMÓRIA — CADASTRO
===================================================== */

function validarCadastro(event) {

    event.preventDefault();


    const nome =
        document.getElementById("nome");

    const email =
        document.getElementById("email");

    const senha =
        document.getElementById("senha");

    const confirmar =
        document.getElementById("confirmarSenha");


    if (
        !nome ||
        !email ||
        !senha ||
        !confirmar
    ) {

        return;

    }


    if (
        nome.value.trim() === "" ||
        email.value.trim() === "" ||
        senha.value.trim() === "" ||
        confirmar.value.trim() === ""
    ) {

        alert("Preencha todos os campos.");

        return;

    }


    if (senha.value !== confirmar.value) {

        alert("As senhas não são iguais.");

        return;

    }


    alert("Cadastro realizado com sucesso!");


    window.location.href =
        "login.html";

}