/* =====================================================
   SABOR & MEMÓRIA
   PARTICIPAR DO DESAFIO
===================================================== */


/* =====================================================
   ELEMENTOS
===================================================== */

const formulario =
    document.getElementById("formDesafio");


const foto =
    document.getElementById("fotoReceita");


const nomeFoto =
    document.getElementById("nomeFoto");


const preview =
    document.getElementById("previewImagem");


const imagemPreview =
    document.getElementById("imagemPreview");


const mensagem =
    document.getElementById("mensagemDesafio");


const sucesso =
    document.getElementById("participacaoSucesso");



/* =====================================================
   PREVISUALIZAÇÃO DA IMAGEM
===================================================== */

foto.addEventListener("change", function() {

    if (foto.files.length === 0) {

        nomeFoto.textContent =
            "Nenhuma imagem selecionada.";

        preview.classList.remove("ativo");

        return;
    }


    const arquivo =
        foto.files[0];


    nomeFoto.textContent =
        arquivo.name;


    const leitor =
        new FileReader();


    leitor.addEventListener(
        "load",
        function() {

            imagemPreview.src =
                leitor.result;

            preview.classList.add("ativo");

        }
    );


    leitor.readAsDataURL(arquivo);

});



/* =====================================================
   ENVIO DO FORMULÁRIO
===================================================== */

formulario.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const nome =
            document
            .getElementById("nomeParticipante")
            .value
            .trim();


        const receita =
            document
            .getElementById("nomeReceitaDesafio")
            .value
            .trim();


        const historia =
            document
            .getElementById("historiaReceita")
            .value
            .trim();


        const memoria =
            document
            .getElementById("memoriaReceita")
            .value
            .trim();



        if (
            nome === "" ||
            receita === "" ||
            historia === "" ||
            memoria === ""
        ) {

            mensagem.textContent =
                "Preencha todos os campos obrigatórios.";

            mensagem.classList.add("erro");

            return;
        }



        /* =================================================
           SALVAR PARTICIPAÇÃO TEMPORARIAMENTE
        ================================================= */

        const participacao = {

            nome: nome,

            receita: receita,

            historia: historia,

            memoria: memoria,

            data:
                new Date().toLocaleDateString("pt-BR")

        };


        localStorage.setItem(
            "participacaoDesafio",
            "true"
        );


        localStorage.setItem(
            "dadosParticipacao",
            JSON.stringify(participacao)
        );



        /* =================================================
           MOSTRAR SUCESSO
        ================================================= */

        formulario.style.display =
            "none";


        mensagem.classList.remove("erro");


        sucesso.classList.add("ativo");


        window.scrollTo({

            top: sucesso.offsetTop - 100,

            behavior: "smooth"

        });

    }
);