// Esperamos a que cargue todo el contenido del DOM
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Definimos qué vamos a hacer cuando el elemento sea visible
    const observarEntrada = (entradas, observador) => {
        entradas.forEach((entrada) => {
            // Si el elemento entra en pantalla (isIntersecting es true)
            if(entrada.isIntersecting){
                // Le agregamos la clase 'visible' que definimos en Sass
                entrada.target.classList.add('visible');
            }
        });
    };

    // 2. Configuramos el Observador
    const observador = new IntersectionObserver(observarEntrada, {
        root: null, // observa respecto a la ventana del navegador
        rootMargin: '0px', 
        threshold: 0.1 // Se activa cuando al menos el 10% del h2 es visible
    });

    // 3. Le decimos al observador que vigile TODOS los h2
    const titulos = document.querySelectorAll('h2');
    titulos.forEach(h2 => observador.observe(h2));
});