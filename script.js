// Espera o DOM carregar
document.addEventListener("DOMContentLoaded", () => {
    
    const imagemPc = document.querySelector("#img-pc");

    // Configurações do observador
    const observerOptions = {
        root: null, // usa a janela do navegador
        threshold: 0.5 // dispara quando 50% da imagem estiver visível
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona a classe que dispara a animação CSS
                entry.target.classList.add("aparecer");
                // Para de observar depois que já apareceu (opcional)
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Começa a observar a imagem
    if (imagemPc) {
        observer.observe(imagemPc);
    };

});

document.addEventListener("DOMContentLoaded", () => {
    // Agora selecionamos a seção inteira
    const secaoParaAnimar = document.querySelector(".animar-scroll");

    const observerOptions = {
        root: null,
        threshold: 0.3 // Dispara quando 30% da seção aparecer
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona a classe no pai, e o CSS faz o resto nos filhos
                entry.target.classList.add("aparecer");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    if (secaoParaAnimar) {
        observer.observe(secaoParaAnimar);
    }
});