/* =====================================================
   SABOR & MEMÓRIA — INDEX
===================================================== */

function pesquisar() {

    const campo = document.getElementById("busca");

    if (!campo) {
        return;
    }

    const texto = campo.value.trim();

    if (texto === "") {
        alert("Digite uma receita para pesquisar.");
        return;
    }

    window.location.href =
        "receitas.html?busca=" +
        encodeURIComponent(texto);
}


document.addEventListener("DOMContentLoaded", function () {

    const campoBusca =
        document.getElementById("busca");

    if (campoBusca) {

        campoBusca.addEventListener(
            "keypress",
            function (event) {

                if (event.key === "Enter") {
                    pesquisar();
                }

            }
        );

    }

});