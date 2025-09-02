//Saudação automática 
function mostrarSaudacao() {
    const hora = new Date().getHours();
    let mensagem = "";

    if (hora < 12) {
        mensagem = "Bom dia! Seja bem-vindo ao meu portfólio.";
    } else if (hora < 18) {
        mensagem = "Boa tarde! Obrigado por visitar meu site.";
    } else {
        mensagem = "Boa noite! Aproveite para conhecer meus projetos.";
    }

    // Se existir o elemento #saudacao, altera o texto
    const elemento = document.getElementById("saudacao");
    if (elemento) {
        elemento.innerText = mensagem;
    }
}

// Validação do formulário de contato
function validarFormulario() {
    const nome = document.getElementById("nome")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const mensagem = document.getElementById("mensagem")?.value.trim();

    if (!nome || !email || !mensagem) {
        alert("Por favor, preencha todos os campos antes de enviar.");
        return false;
    }

    alert("Mensagem enviada com sucesso!");
    return true;
}

 //Executa a saudação automaticamente na página inicial 
document.addEventListener("DOMContentLoaded", mostrarSaudacao);
