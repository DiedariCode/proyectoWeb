document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.feedback-form');
    const fields = form.querySelectorAll('.form-control');
    
    fields.forEach(field => {
        const errorMessage = field.nextElementSibling; // Seleccionar el <small> para el mensaje de error

        field.addEventListener('input', () => {
            validateField(field, errorMessage);
        });
    });

    const validateField = (field, errorMessage) => {
        const value = field.value.trim();

        switch (field.placeholder) {
            case 'Nombre':
                if (value.length < 3) {
                    errorMessage.textContent = 'El nombre debe tener al menos 3 caracteres';
                } else {
                    errorMessage.textContent = '';
                }
                break;

            case 'Correo Electrónico':
                const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                if (!emailPattern.test(value)) {
                    errorMessage.textContent = 'Ingrese un correo electrónico válido';
                } else {
                    errorMessage.textContent = '';
                }
                break;

            case 'Teléfono':
                const phonePattern = /^[0-9]{9}$/;
                if (!phonePattern.test(value)) {
                    errorMessage.textContent = 'El teléfono debe contener 9 dígitos';
                } else {
                    errorMessage.textContent = '';
                }
                break;

            case 'DNI o RUC':
                const dniRucPattern = /^[0-9]{8,11}$/;
                if (value && !dniRucPattern.test(value)) {
                    errorMessage.textContent = 'Ingrese un DNI o RUC válido de 8 a 11 dígitos';
                } else {
                    errorMessage.textContent = '';
                }
                break;

            case 'Placa vehicular o VIN':
                const placaVinPattern = /^[A-Z0-9]{6,17}$/;
                if (value && !placaVinPattern.test(value)) {
                    errorMessage.textContent = 'Ingrese una placa o VIN válida (6-17 caracteres)';
                } else {
                    errorMessage.textContent = '';
                }
                break;

            default:
                if (field.tagName === 'SELECT') {
                    if (field.value === '') {
                        errorMessage.textContent = 'Seleccione un asunto';
                    } else {
                        errorMessage.textContent = '';
                    }
                } else if (field.tagName === 'TEXTAREA') {
                    if (value.length < 10) {
                        errorMessage.textContent = 'El mensaje debe tener al menos 10 caracteres';
                    } else {
                        errorMessage.textContent = '';
                    }
                }
                break;
        }
    };
});

const toggleButton = document.getElementById('toggle-button');
const body = document.body;
const logo = document.getElementById('logoJimdur');

// Rutas de los logos para modo claro y oscuro
const logoClaro = '../img/Logo Jimdur/logo_sinfondo_negro.png';
const logoOscuro = '../img/Logo Jimdur/logofooter-sinfondo.png';

// Verifica el tema guardado en localStorage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
    logo.src = logoOscuro;
    toggleButton.innerHTML = '<i class="fas fa-moon"></i>'; // Ícono de luna
} else {
    toggleButton.innerHTML = '<i class="fas fa-sun"></i>'; // Ícono de sol
}

// Cambiar el tema y guardar la preferencia
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');
    if (body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
        logo.src = logoOscuro;
        toggleButton.innerHTML = '<i class="fas fa-moon"></i>'; // Ícono de luna
    } else {
        localStorage.setItem('theme', 'light');
        logo.src = logoClaro;
        toggleButton.innerHTML = '<i class="fas fa-sun"></i>'; // Ícono de sol
    }
});

