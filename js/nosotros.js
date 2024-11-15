function animateCounter(id, start, end, duration) {
    let current = start;
    const range = end - start;
    const increment = range / (duration / 10); // Incremento cada 10ms
    const element = document.getElementById(id);

    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(timer); // Detiene la animación
        }
        element.textContent = Math.floor(current); // Muestra el número entero
    }, 10); // Actualiza cada 10ms
}

// Llama a la función para cada contador al cargar la página
window.onload = () => {
    animateCounter("counter", 0, 25, 2000);         // Años de experiencia: 0 a 25 en 2 segundos
    animateCounter("counter-clients", 0, 10000, 3000); // Clientes satisfechos: 0 a 10000 en 3 segundos
};
