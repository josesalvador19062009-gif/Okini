const traducciones = {
    'es': {
        'Inicio': 'Inicio',
        'Cafés': 'Cafés',
        'Métodos': 'Métodos',
        'Nosotros': 'Nosotros',
        'Contacto': 'Contacto',
        'Hablemos de tu pedido': 'Hablemos de tu pedido',
        'Solicitar pedido': 'Solicitar pedido',
        'Cambiar modo': 'Cambiar modo',
        'Cambiar idioma': 'Cambiar idioma',
        'Okini, tu café de especialidad': 'Okini, tu café de especialidad',
        'Número 1': 'Número 1',
        'Volver al sitio principal': 'Volver al sitio principal',
        'Pedidos': 'Pedidos',
        'Contáctanos': 'Contáctanos',
        'Capuchinno': 'Capuchinno',
        'V60': 'V60',
        'Kyoto Drip': 'Kyoto Drip',
        'Café con cremora': 'Café con cremora',
        'Siphon Japonés': 'Siphon Japonés',
        'Todos los derechos reservados.': 'Todos los derechos reservados.',
        'Cuéntanos qué café necesitas y te lo llevaremos': 'Cuéntanos qué café necesitas y te lo llevaremos',
        'Este formulario nos ayuda a entender rápidamente tu pedido. No necesitas pensarlo: podemos llevartelo sin problemas..': 'Este formulario nos ayuda a entender rápidamente tu pedido. No necesitas pensarlo: podemos llevartelo sin problemas..',
        'Qué quieres.': 'Qué quieres.',
        'Cuéntanos sobre tu pedido': 'Cuéntanos sobre tu pedido',
        '¿Para que lo quieres?': '¿Para que lo quieres?',
        'Dános más detalles sobre el lugar en que estás.': 'Dános más detalles sobre el lugar en que estás.',
        'Te contactamos': 'Te contactamos',
        'Coordinamos una conversación para aterrizar el pedido.': 'Coordinamos una conversación para aterrizar el pedido.',
        'Información del pedido': 'Información del pedido',
        'Completa los datos y nos pondremos en contacto contigo.': 'Completa los datos y nos pondremos en contacto contigo.',
        'Nombre': 'Nombre',
        'Empresa / institución': 'Empresa / institución',
        'Correo electrónico': 'Correo electrónico',
        'Teléfono': 'Teléfono',
        'Tipo de café': 'Tipo de café',
        'Enviar solicitud': 'Enviar solicitud',
        'Estas son las tazas disponibles el día de hoy:': 'Estas son las tazas disponibles el día de hoy:',
        'Presiona este botón': 'Presiona este botón',
        'Reserva una taza': 'Reserva una taza'
    },
    'en': {
        'Inicio': 'Home',
        'Cafés': 'Coffees',
        'Métodos': 'Methods',
        'Nosotros': 'About Us',
        'Contacto': 'Contact',
        'Hablemos de tu pedido': 'Let’s talk about your order',
        'Solicitar pedido': 'Request Order',
        'Cambiar modo': 'Toggle Theme',
        'Cambiar idioma': 'Change Language',
        'Okini, tu café de especialidad': 'Okini, your specialty coffee',
        'Número 1': 'Number 1',
        'Volver al sitio principal': 'Back to main site',
        'Pedidos': 'Orders',
        'Contáctanos': 'Contact Us',
        'Capuchinno': 'Cappuccino',
        'V60': 'V60',
        'Prensa francesa': 'French Press',
        'Kyoto Drip': 'Kyoto Drip',
        'Café con cremora': 'Coffee with Creamer',
        'Siphon Japonés': 'Japanese Siphon',
        'Todos los derechos reservados.': 'All rights reserved.',
        'Cuéntanos qué café necesitas y te lo llevaremos': 'Tell us what coffee you need, and we’ll bring it right to you.',
        'Este formulario nos ayuda a entender rápidamente tu pedido. No necesitas pensarlo: podemos llevartelo sin problemas..': 'This form helps us quickly understand your order. No need to overthink it—we can deliver it to you with ease.',
        'Qué quieres.': 'What you want.',
        'Cuéntanos sobre tu pedido': 'Tell us about your order',
        '¿Para que lo quieres?': 'What do you need it for?',
        'Dános más detalles sobre el lugar en que estás.': 'Give us more details about your location.',
        'Te contactamos': 'We’ll contact you',
        'Coordinamos una conversación para aterrizar el pedido.': 'We’ll schedule a quick chat to finalize your order details.',
        'Información del pedido': 'Order Information',
        'Completa los datos y nos pondremos en contacto contigo.': 'Fill in your details and we will get in touch with you.',
        'Nombre': 'Name',
        'Empresa / institución': 'Company / Institution',
        'Correo electrónico': 'Email',
        'Teléfono': 'Phone',
        'Tipo de café': 'Coffee Type',
        'Enviar solicitud': 'Send Request',
        'Estas son las tazas disponibles el día de hoy:': 'Available cups for today:',
        'Presiona este botón': 'Click this button',
        'Reserva una taza': 'Reserve a Cup'
    }
};

let idiomaActual = localStorage.getItem('idiomaSitio') || 'es';

function cambiarIdiomaAutomatico(lang) {
    idiomaActual = lang;
    localStorage.setItem('idiomaSitio', lang);

    // Buscar todos los elementos de texto en la página
    const elementos = document.querySelectorAll('p, span, a, h1, h2, h3, h4, h5, h6, label, button, placeholder');

    elementos.forEach(el => {
        // Verificar texto interno
        const textoLimpio = el.textContent.trim();
        if (traducciones[lang][textoLimpio]) {
            el.textContent = traducciones[lang][textoLimpio];
        }

        // Verificar si es un input con placeholder
        if (el.placeholder && traducciones[lang][el.placeholder.trim()]) {
            el.placeholder = traducciones[lang][el.placeholder.trim()];
        }
    });
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    if (idiomaActual === 'en') {
        cambiarIdiomaAutomatico('en');
    }
});