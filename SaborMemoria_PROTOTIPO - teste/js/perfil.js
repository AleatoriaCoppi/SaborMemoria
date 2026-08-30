/* =====================================================
   SABOR & MEMÓRIA — PERFIL
===================================================== */


/* =====================================================
   EDITAR PERFIL
===================================================== */

function editarPerfil() {

    const elemento =
        document.getElementById("descricaoPerfil");


    if (!elemento) {
        return;
    }


    const atual =
        elemento.textContent.trim();


    const novaDescricao =
        prompt(
            "Digite uma nova descrição para seu perfil:",
            atual
        );


    if (
        novaDescricao !== null &&
        novaDescricao.trim() !== ""
    ) {

        elemento.textContent =
            novaDescricao.trim();

    }

}