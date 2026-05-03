// Menú Hamburguesa
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-nav-links a');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    // Efecto visual en el botón
    hamburger.classList.toggle('active');
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// ScrollReveal
const sr = ScrollReveal({
    distance: '50px', duration: 1000, delay: 200, reset: true
});
sr.reveal('.reveal-top', { origin: 'top' });
sr.reveal('.reveal-bottom', { origin: 'bottom', interval: 150 });
sr.reveal('.reveal-left', { origin: 'left' });

// Servicios
const servicios = [
    { n: "Guardería Premium", p: 250, d: "Cuidado profesional por hora." },
    { n: "Baño Higiénico", p: 120, d: "Limpieza rápida y orgánica." },
    { n: "Paseo Activo", p: 80, d: "Ejercicio en zonas seguras." },
    { n: "Snack Gourmet", p: 40, d: "Nutrición de alta calidad." }
];

function renderServicios() {
    const grid = document.getElementById('services-grid');
    if (!grid) return;
    servicios.forEach(s => {
        const card = document.createElement('div');
        card.className = 'service-card reveal-bottom';
        card.innerHTML = `
            <h3 style="color: var(--primary); margin-bottom: 10px;">${s.n}</h3>
            <p style="color: #64748b; margin-bottom: 20px; font-size: 0.9rem;">${s.d}</p>
            <div style="font-size: 1.5rem; font-weight: 800;">$${s.p} MXN</div>
        `;
        grid.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    const slideInterval = 5000; // 5 segundos por imagen

    function nextSlide() {
        // Quita la clase activa de la imagen actual
        slides[currentSlide].classList.remove('active');
        
        // Pasa a la siguiente (y vuelve a empezar si es la última)
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Añade la clase activa a la nueva imagen
        slides[currentSlide].classList.add('active');
    }

    // Ejecuta la función cada 5 segundos
    setInterval(nextSlide, slideInterval);
});

document.addEventListener('DOMContentLoaded', renderServicios);


