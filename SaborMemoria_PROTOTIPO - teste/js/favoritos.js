/* =====================================================
   SABOR & MEMÓRIA — FAVORITOS
===================================================== */


/* =====================================================
   ADICIONAR FAVORITO
===================================================== */

function favoritar(nomeReceita) {

    let favoritos =
        JSON.parse(localStorage.getItem("favoritos")) || [];


    if (favoritos.includes(nomeReceita)) {

        alert("Essa receita já está nos seus favoritos ❤️");

        return;
    }


    favoritos.push(nomeReceita);


    localStorage.setItem(
        "favoritos",
        JSON.stringify(favoritos)
    );


    alert(
        nomeReceita +
        " foi adicionada aos favoritos ❤️"
    );

}


/* =====================================================
   REMOVER FAVORITO
===================================================== */

function removerFavorito(nomeReceita) {

    let favoritos =
        JSON.parse(localStorage.getItem("favoritos")) || [];


    favoritos = favoritos.filter(
        receita => receita !== nomeReceita
    );


    localStorage.setItem(
        "favoritos",
        JSON.stringify(favoritos)
    );


    mostrarFavoritos();

}


/* =====================================================
   MOSTRAR FAVORITOS
===================================================== */

function mostrarFavoritos() {

    const lista =
        document.getElementById("listaFavoritos");


    if (!lista) {
        return;
    }


    const favoritos =
        JSON.parse(localStorage.getItem("favoritos")) || [];


    lista.innerHTML = "";


    if (favoritos.length === 0) {

        lista.innerHTML =
            "<p>Você ainda não possui receitas favoritas.</p>";

        return;
    }


    favoritos.forEach(function(nome) {

        const item =
            document.createElement("div");


        item.className =
            "favorito-item";


        item.innerHTML = `
            <h3>${nome}</h3>

            <button onclick="removerFavorito('${nome}')">
                Remover
            </button>
        `;


        lista.appendChild(item);

    });

}


/* =====================================================
   CARREGAR FAVORITOS
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        mostrarFavoritos();

    }
);