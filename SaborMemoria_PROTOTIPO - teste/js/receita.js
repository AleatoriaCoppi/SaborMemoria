/* =====================================================
   SABOR & MEMÓRIA — RECEITA
===================================================== */


/* =====================================================
   FAVORITOS
===================================================== */

const btnFavorito =
    document.getElementById("btnFavorito");

const iconeFavorito =
    document.getElementById("iconeFavorito");

const textoFavorito =
    document.getElementById("textoFavorito");


if (btnFavorito) {

    btnFavorito.addEventListener("click", function () {

        const nomeReceita =
            document.querySelector(".receita-conteudo h2").textContent.trim();


        let favoritos =
            JSON.parse(
                localStorage.getItem("favoritos")
            ) || [];


        if (favoritos.includes(nomeReceita)) {

            favoritos =
                favoritos.filter(
                    receita => receita !== nomeReceita
                );


            iconeFavorito.textContent = "♡";

            textoFavorito.textContent =
                "Adicionar aos favoritos";


        } else {

            favoritos.push(nomeReceita);


            iconeFavorito.textContent = "♥";

            textoFavorito.textContent =
                "Remover dos favoritos";

        }


        localStorage.setItem(
            "favoritos",
            JSON.stringify(favoritos)
        );

    });

}


/* =====================================================
   VERIFICAR SE JÁ É FAVORITO
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        if (!btnFavorito) {
            return;
        }


        const nomeReceita =
            document
                .querySelector(".receita-conteudo h2")
                .textContent
                .trim();


        const favoritos =
            JSON.parse(
                localStorage.getItem("favoritos")
            ) || [];


        if (favoritos.includes(nomeReceita)) {

            iconeFavorito.textContent = "♥";

            textoFavorito.textContent =
                "Remover dos favoritos";

        }

    }
);


/* =====================================================
   AVALIAÇÃO
===================================================== */

function avaliar(nota) {

    const mensagem =
        document.getElementById("mensagemAvaliacao");


    if (!mensagem) {
        return;
    }


    mensagem.textContent =
        "Você avaliou esta receita com " +
        nota +
        " estrela" +
        (nota > 1 ? "s." : ".");

}


/* =====================================================
   COMENTÁRIOS
===================================================== */

const formularioComentario =
    document.getElementById("formComentario");


if (formularioComentario) {

    formularioComentario.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const campo =
                document.getElementById("textoComentario");


            const lista =
                document.getElementById("listaComentarios");


            const texto =
                campo.value.trim();


            if (texto === "") {

                alert("Digite um comentário.");

                return;

            }


            const comentario =
                document.createElement("div");


            comentario.className =
                "comentario";


            comentario.innerHTML = `
                <strong>Você</strong>

                <p>${texto}</p>
            `;


            lista.appendChild(comentario);


            campo.value = "";

        }
    );

}