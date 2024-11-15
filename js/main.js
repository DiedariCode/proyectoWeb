// AQUI VA EL JS USADO PARA VARIAS PAGINAS O APARTADOS:

// MODO OSCURO:

const toggleButtonSM = document.getElementById('toggle-buttonsm');
const toggleButtonLG = document.getElementById('toggle-buttonlg');

const body = document.body;
const logo = document.getElementById('logoJimdur');

// Rutas de los logos para modo claro y oscuro
const logoClaro = '../img/Logo Jimdur/logo_sinfondo_negro.png';
const logoOscuro = '../img/Logo Jimdur/logofooter-sinfondo.png';

// Función para actualizar el tema
function updateTema() {
    if (body.classList.contains('dark')) {
        localStorage.setItem('Tema', 'dark');
        logo.src = logoOscuro;
        toggleButtonSM.innerHTML = '<i class="fas fa-moon"></i>';
        toggleButtonLG.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        localStorage.setItem('Tema', 'light');
        logo.src = logoClaro;
        toggleButtonSM.innerHTML = '<i class="fas fa-sun"></i>';
        toggleButtonLG.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

// Verifica el tema guardado en localStorage
if (localStorage.getItem('Tema') === 'dark') {
    body.classList.add('dark');
    logo.src = logoOscuro;
    toggleButtonSM.innerHTML = '<i class="fas fa-moon"></i>';
    toggleButtonLG.innerHTML = '<i class="fas fa-moon"></i>';
} else {
    logo.src = logoClaro;
    toggleButtonSM.innerHTML = '<i class="fas fa-sun"></i>';
    toggleButtonLG.innerHTML = '<i class="fas fa-sun"></i>';
}

// Event listeners para ambos botones
toggleButtonSM.addEventListener('click', () => {
    body.classList.toggle('dark');
    updateTema();
});

toggleButtonLG.addEventListener('click', () => {
    body.classList.toggle('dark');
    updateTema();
});
