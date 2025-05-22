// Animación de paralaje suave para los elementos flotantes
window.addEventListener('mousemove', (e) => {
    const floatingElements = document.querySelectorAll('.floating-phone');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    floatingElements.forEach((element, index) => {
        const speed = (index + 1) * 0.5;
        const xOffset = (x - 0.5) * speed * 20;
        const yOffset = (y - 0.5) * speed * 20;
        
        element.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    });
});

// Efecto de clic en las tarjetas de teléfonos
document.querySelectorAll('.phone-card').forEach(card => {
    card.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1.05)';
        }, 100);
    });
});

// Animación de entrada escalonada para las tarjetas
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
});

document.querySelectorAll('.phone-card').forEach(card => {
    observer.observe(card);
});