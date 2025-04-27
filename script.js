// Seleciona os elementos
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModalBtn');
const closeBtn = document.getElementById('closeBtn');

// Abre o modal
openModalBtn.onclick = function() {
    modal.style.display = "block";
    setTimeout(() => {
        modal.style.opacity = "1"; // Anima a opacidade
    }, 10);
}

// Fecha o modal
closeBtn.onclick = function() {
    modal.style.opacity = "0"; // Anima o fechamento
    setTimeout(() => {
        modal.style.display = "none"; // Remove o modal após a animação
    }, 300); // Tempo da animação
}

// Fecha o modal se clicar fora dele
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.opacity = "0";
        setTimeout(() => {
            modal.style.display = "none";
        }, 300);
    }
}
