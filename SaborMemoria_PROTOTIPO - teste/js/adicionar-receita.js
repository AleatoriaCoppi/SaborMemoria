/* =====================================================
   SABOR & MEMÓRIA — ADICIONAR RECEITA
===================================================== */

const formularioReceita =
    document.getElementById("formReceita");

const imagemReceita =
    document.getElementById("imagemReceita");

const nomeImagem =
    document.getElementById("nomeImagem");

const mensagemReceita =
    document.getElementById("mensagemReceita");


/* =====================================================
   MOSTRAR NOME DA IMAGEM
===================================================== */

if (imagemReceita) {

    imagemReceita.addEventListener(
        "change",
        function () {

            if (imagemReceita.files.length > 0) {

                nomeImagem.textContent =
                    imagemReceita.files[0].name;

            } else {

                nomeImagem.textContent =
                    "Nenhuma imagem selecionada.";

            }

        }
    );

}


/* =====================================================
   ENVIO DO FORMULÁRIO
===================================================== */

if (formularioReceita) {

    formularioReceita.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            if (mensagemReceita) {

                mensagemReceita.textContent =
                    "Receita preenchida com sucesso!";

                mensagemReceita.style.color =
                    "#6d4c7d";

            }


            formularioReceita.reset();


            if (nomeImagem) {

                nomeImagem.textContent =
                    "Nenhuma imagem selecionada.";

            }


            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth"
            });

        }
    );

}