// Adicionando efeitos de flutuação com JavaScript para as seções

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {
        section.addEventListener('mouseenter', () => {
            section.style.transform = 'translateY(-10px)';
            section.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.2)';
        });

        section.addEventListener('mouseleave', () => {
            section.style.transform = 'translateY(0)';
            section.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
    });
});
