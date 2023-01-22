const botaoDuvidas = document.querySelector(".botao-duvidas");

botaoDuvidas.addEventListener("click", () => {
    modal.classList.add("aberto");
});

const modal = document.querySelector(".modal");

const botaoFecharModal = document.querySelector(".fechar-modal");

botaoFecharModal.addEventListener ("click", () => {
    modal.classList.remove("aberto");
});


const url = 'https://discord.gg/zPHgMabb6N'
const btn = document.querySelector("#btn")

function openInNewTab(url) {
    const win = window.open(url, '_blank')
    win.focus()
};

btn.addEventListener('click', () => {
    openInNewTab(url)
});