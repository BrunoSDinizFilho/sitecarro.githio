function aparecerFormulario() {
    document.getElementById('formulario-compra').style.display = 'block';
}

function validarFormulario() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;

    if (nome === "" || email === "" || telefone === "") {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return false;
    }

    alert("Formulário enviado com sucesso!");
    document.getElementById('compra-form').reset();
    document.getElementById('formulario-compra').style.display = 'none';
    return false;
}
