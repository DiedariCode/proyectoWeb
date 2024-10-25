function alternarMenu() {
    const enlacesNavegacion = document.querySelector('.enlaces-navegacion');
    enlacesNavegacion.classList.toggle('nav-activo');
}

let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelector('.proveedores__logos');
    const totalSlides = document.querySelectorAll('.proveedores__tarjeta').length / 2; // Solo cuenta las originales

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1; // Si estamos en el primer slide, volver al último
    } else if (currentIndex >= totalSlides) {
        // Si estamos en el último slide, mover a la primera tarjeta de la copia
        slides.style.transition = 'none'; // Desactivar la transición
        currentIndex = 0;
        slides.style.transform = `translateX(0)`; // Mover a la primera tarjeta
        setTimeout(() => {
            slides.style.transition = 'transform 0.5s ease'; // Reactivar la transición
            currentIndex++; // Avanzar a la primera tarjeta original
            const offset = -currentIndex * (200 + 20);
            slides.style.transform = `translateX(${offset}px)`;
        }, 50); // Esperar un poco para que se vea el cambio
        return;
    }

    const offset = -currentIndex * (200 + 20); // 200 es el ancho de cada tarjeta y 20 es el margen
    slides.style.transform = `translateX(${offset}px)`;
}

setInterval(() => {
    moveSlide(1);
}, 3000);
