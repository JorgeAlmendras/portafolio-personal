document.addEventListener('DOMContentLoaded', () => {
    // Lógica para el menú móvil
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Cerrar menú móvil al hacer clic en un enlace
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // Lógica para el formulario de contacto
    const contactForm = document.getElementById('contact-form');
    const successMessage = document.getElementById('form-success-message');

    contactForm.addEventListener('submit', (e) => {
        //e.preventDefault(); // Previene el envío real del formulario

        // Aquí podrías agregar una integración con un servicio como EmailJS o Formspree
        // Por ahora, solo mostraremos un mensaje de éxito.

        successMessage.classList.remove('opacity-0', '-translate-y-4');
        successMessage.classList.add('opacity-100', 'translate-y-0');

        //contactForm.reset(); // Limpia el formulario

        setTimeout(() => {
            contactForm.reset(); // Limpia el formulario al cargar la página
            successMessage.classList.remove('opacity-100', 'translate-y-0');
            successMessage.classList.add('opacity-0', '-translate-y-4');
        }, 5000); // Oculta el mensaje después de 5 segundos
    });

    
});