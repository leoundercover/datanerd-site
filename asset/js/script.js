// Script para funcionalidades básicas do site
document.addEventListener('DOMContentLoaded', () => {
    // Menu mobile toggle (preparação para futura implementação)
    console.log('Datanerd site carregado com sucesso.');

    // Adicionar classe active ao link do menu correspondente à página atual
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath.split('/').pop()) {
            link.classList.add('active');
        }
    });
});