/* =====================================================
   SABOR & MEMÓRIA
   DESAFIOS
===================================================== */


/* =====================================================
   CURTIR PARTICIPAÇÃO
===================================================== */

const botoesCurtir =
    document.querySelectorAll(".btn-curtir");


botoesCurtir.forEach(function(botao) {

    botao.addEventListener("click", function() {

        const participante =
            botao.closest(".participante");

        const contador =
            participante.querySelector("strong");

        let curtidas =
            parseInt(contador.textContent);


        if (botao.classList.contains("curtido")) {

            curtidas--;

            botao.classList.remove("curtido");

            botao.textContent = "♡";

        } else {

            curtidas++;

            botao.classList.add("curtido");

            botao.textContent = "♥";

        }


        contador.textContent = curtidas;

    });

});



/* =====================================================
   ANIMAÇÃO DOS CARDS
===================================================== */

const cards =
    document.querySelectorAll(".card-desafio");


cards.forEach(function(card, indice) {

    card.style.animationDelay =
        (indice * 0.08) + "s";

});



/* =====================================================
   PARTICIPAÇÃO JÁ REALIZADA
===================================================== */

const participacao =
    localStorage.getItem("participacaoDesafio");


if (participacao === "true") {

    const botoes =
        document.querySelectorAll(".btn-desafio");


    botoes.forEach(function(botao) {

        if (
            botao.textContent
                .toLowerCase()
                .includes("participar")
        ) {

            botao.textContent =
                "Minha participação →";

        }

    });

}