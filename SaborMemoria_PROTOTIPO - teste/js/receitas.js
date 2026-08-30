/* =====================================================
   SABOR & MEMÓRIA — RECEITAS
===================================================== */


/* =====================================================
   FILTRAR POR CATEGORIA
===================================================== */

function filtrarCategoria(categoria, botao) {

    const receitas =
        document.querySelectorAll(".card-receita");

    const botoes =
        document.querySelectorAll(".botoes-categorias button");

    let encontrou = false;


    botoes.forEach(function (btn) {

        btn.classList.remove("categoria-ativa");

    });


    botao.classList.add("categoria-ativa");


    receitas.forEach(function (receita) {

        if (
            categoria === "todas" ||
            receita.dataset.categoria === categoria
        ) {

            receita.style.display = "block";

            encontrou = true;

        } else {

            receita.style.display = "none";

        }

    });


    document.getElementById("nenhumaReceita").style.display =
        encontrou ? "none" : "block";


    document.getElementById("campoBusca").value = "";


    document.getElementById("resultadoBusca").textContent =
        categoria === "todas"
        ? "Confira nossas receitas disponíveis."
        : "Receitas da categoria selecionada.";

}


/* =====================================================
   PESQUISAR RECEITAS
===================================================== */

function pesquisarReceitas() {

    const campo =
        document.getElementById("campoBusca");

    const busca =
        campo.value.toLowerCase().trim();


    const receitas =
        document.querySelectorAll(".card-receita");


    let encontrou = false;


    receitas.forEach(function (receita) {

        const nome =
            receita.dataset.nome.toLowerCase();

        const categoria =
            receita.dataset.categoria.toLowerCase();


        if (
            nome.includes(busca) ||
            categoria.includes(busca)
        ) {

            receita.style.display = "block";

            encontrou = true;

        } else {

            receita.style.display = "none";

        }

    });


    document.getElementById("nenhumaReceita").style.display =
        encontrou ? "none" : "block";


    if (busca === "") {

        document.getElementById("resultadoBusca").textContent =
            "Confira nossas receitas disponíveis.";

    } else {

        document.getElementById("resultadoBusca").textContent =
            "Resultados para: " + busca;

    }

}


/* =====================================================
   ENTER NA BUSCA
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const campoBusca =
        document.getElementById("campoBusca");


    if (campoBusca) {

        campoBusca.addEventListener(
            "keyup",
            function (event) {

                if (event.key === "Enter") {

                    pesquisarReceitas();

                }

            }
        );

    }

});