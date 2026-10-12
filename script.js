
const botaoMenu = document.querySelector(".menu-toggle");
const menuPrincipal = document.querySelector("#menu-principal");

botaoMenu.addEventListener("click", () => {
    const menuAberto = botaoMenu.getAttribute("aria-expanded") === "true";

    botaoMenu.setAttribute("aria-expanded", String(!menuAberto));
    menuPrincipal.classList.toggle("aberto", !menuAberto);
});

menuPrincipal.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        menuPrincipal.classList.remove("aberto");
        botaoMenu.setAttribute("aria-expanded", "false");
    });
});

const formulario = document.querySelector("#form-voluntario");
const mensagem = document.querySelector("#mensagem-formulario");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    if (!formulario.checkValidity()) {
        formulario.reportValidity();
        return;
    }

    mensagem.textContent =
        "Formulário validado! Este projeto demonstrativo ainda não envia os dados para um servidor.";

    formulario.reset();
});

