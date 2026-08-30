/* =====================================================
   SABOR & MEMÓRIA — LOGIN
===================================================== */

function validarLogin(event) {

    event.preventDefault();


    const email =
        document.getElementById("email");

    const senha =
        document.getElementById("senha");


    if (!email || !senha) {
        return;
    }


    if (
        email.value.trim() === "" ||
        senha.value.trim() === ""
    ) {

        alert("Preencha todos os campos.");

        return;

    }


    alert("Login realizado com sucesso!");


    window.location.href =
        "index.html";

}