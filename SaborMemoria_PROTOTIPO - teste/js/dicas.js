/* =====================================================
   SABOR & MEMÓRIA — DICAS
===================================================== */


/* =====================================================
   FILTRAR DICAS
===================================================== */

function filtrarDicas(categoria, botao) {

    const cards =
        document.querySelectorAll(".card-dica");

    const botoes =
        document.querySelectorAll(
            ".categorias-dicas button"
        );


    let encontrou = false;


    botoes.forEach(function (btn) {

        btn.classList.remove(
            "categoria-ativa"
        );

    });


    botao.classList.add(
        "categoria-ativa"
    );


    cards.forEach(function (card) {

        if (
            categoria === "todas" ||
            card.dataset.categoria === categoria
        ) {

            card.style.display = "block";

            encontrou = true;

        } else {

            card.style.display = "none";

        }

    });


    document.getElementById("nenhumaDica").style.display =
        encontrou ? "none" : "block";


    document.getElementById("resultadoDicas").textContent =
        categoria === "todas"
        ? "Conteúdos selecionados para você."
        : "Confira conteúdos sobre esta categoria.";

}


/* =====================================================
   BUSCAR DICAS
===================================================== */

function buscarDicas() {

    const campo =
        document.getElementById("buscaDica");


    const busca =
        campo.value.toLowerCase().trim();


    const cards =
        document.querySelectorAll(".card-dica");


    let encontrou = false;


    cards.forEach(function (card) {

        const nome =
            card.dataset.nome.toLowerCase();

        const texto =
            card.textContent.toLowerCase();


        if (
            nome.includes(busca) ||
            texto.includes(busca)
        ) {

            card.style.display = "block";

            encontrou = true;

        } else {

            card.style.display = "none";

        }

    });


    document.getElementById("nenhumaDica").style.display =
        encontrou ? "none" : "block";


    if (busca === "") {

        document.getElementById("resultadoDicas").textContent =
            "Conteúdos selecionados para você.";

    } else {

        document.getElementById("resultadoDicas").textContent =
            "Resultados para: " + busca;

    }

}


/* =====================================================
   ENTER NA BUSCA
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const campoBusca =
        document.getElementById("buscaDica");


    if (campoBusca) {

        campoBusca.addEventListener(
            "keyup",
            function (event) {

                if (event.key === "Enter") {

                    buscarDicas();

                }

            }
        );

    }

});