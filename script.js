// ==========================================
// 1. MENÚ HAMBURGUESA (Mantenido)
// ==========================================
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-nav-links a');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ==========================================
// 2. SCROLLREVEAL (Mantenido)
// ==========================================
const sr = ScrollReveal({
    distance: '50px', 
    duration: 1000, 
    delay: 200, 
    reset: true
});
sr.reveal('.reveal-top', { origin: 'top' });
sr.reveal('.reveal-bottom', { origin: 'bottom', interval: 150 });
sr.reveal('.reveal-left', { origin: 'left' });

// ==========================================
// 3. SERVICIOS INTERACTIVOS (Actualizado y Ampliado)
// ==========================================
const servicios = [
    { 
        n: "Guardería Premium", 
        p: 250, 
        d: "Cuidado profesional por hora.",
        detalle: "Modelo de negocio flexible. Incluye área de juego supervisada para evitar ansiedad y zonas de descanso diseñadas para evitar el estrés por sobreestimulación." 
    },
    { 
        n: "Baño Higiénico", 
        p: 120, 
        d: "Limpieza rápida y orgánica.",
        detalle: "Uso de productos no tóxicos y biodegradables. Ideal para mantener la higiene de tu mascota mientras recorres el centro comercial."
    },
    { 
        n: "Paseo Activo", 
        p: 80, 
        d: "Ejercicio en zonas seguras.",
        detalle: "Caminatas controladas para garantizar el ejercicio físico necesario, reduciendo comportamientos destructivos por falta de actividad."
    },
    { 
        n: "Snack Gourmet & Tech", 
        p: 40, 
        d: "Nutrición y monitoreo avanzado.",
        detalle: "Snacks premium como refuerzo positivo y acceso opcional a monitoreo mediante collares con tecnología de localización para tu tranquilidad."
    }
];

function renderServicios() {
    const grid = document.getElementById('services-grid');
    if (!grid) return;
    
    // Limpiamos el grid antes de renderizar para evitar duplicados
    grid.innerHTML = '';

    servicios.forEach(s => {
        const card = document.createElement('div');
        card.className = 'service-card reveal-bottom';
        
        // Estructura con área de detalles oculta (se controla con CSS)
        card.innerHTML = `
    <h3 style="color: var(--primary); margin-bottom: 10px;">${s.n}</h3>
    <p style="color: #64748b; margin-bottom: 15px; font-size: 0.9rem;">${s.d}</p>

    <div class="price-tag" style="background: var(--primary); color: white; padding: 5px 15px; border-radius: 20px; display: inline-block; font-weight: 800;">
        $${s.p} MXN
    </div>

    <div class="service-details" style="margin-top: 15px; padding-top: 15px; border-top: 1px solid rgba(0,0,0,0.1); font-size: 0.85rem; color: #475569;">
        <p>${s.detalle}</p>

        <ul style="margin-top: 10px; padding-left: 15px; list-style: circle;">
            <li>Supervisión constante</li>
            <li>Reporte de bienestar incluido</li>
        </ul>
    </div>

    <p class="toggle-text" style="margin-top: 15px; font-size: 0.7rem; color: var(--accent); font-weight: 600;">
        <i class="fas fa-plus-circle"></i> Toca para ver más detalles
    </p>
`;

        // Acción de expandir al hacer clic
        card.addEventListener('click', () => {
    card.classList.toggle('expanded');

    const toggleText = card.querySelector('.toggle-text');

    if (card.classList.contains('expanded')) {
        toggleText.innerHTML = `
            <i class="fas fa-minus-circle"></i> Ahora toca para ver menos
        `;
    } else {
        toggleText.innerHTML = `
            <i class="fas fa-plus-circle"></i> Toca para ver más detalles
        `;
    }
});

        grid.appendChild(card);
    });
}

// ==========================================
// 4. SLIDER DE IMÁGENES (Mantenido)
// ==========================================
function initSlider() {
    const slides = document.querySelectorAll('.slide');
    if (slides.length === 0) return;

    let currentSlide = 0;
    const slideInterval = 5000; 

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    setInterval(nextSlide, slideInterval);
}

// ==========================================
// 5. INICIALIZACIÓN AL CARGAR EL DOM
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    renderServicios();
    initSlider();
});