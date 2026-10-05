( () => {
    const translations = {
        'Inicio': 'Home',
        'Cafés': 'Coffees',
        'Métodos': 'Meythods',
        'Nosotros': 'About us',
        'Contacto': 'Contact',
        'Hablemos de tu pedido': 'Tell us about your order',
        'Solicitar pedido': 'Request order',
        'Cambiar modo': 'Change theme',
        'Cambiar idioma': 'Change language',
        'Tu Caafé no.1': 'Your coffee no.1',
        'Móvil': 'Mobile',
        'Pedidos': 'Orders',
        'Contáctanos': 'Contact us',
        'Café clásico': 'Classic coffee',
        'Café con leche': 'Coffee with milk',
        'Capuchinno': 'Capuchinno',
        'V60': 'V60',
        'Prensa francesa': 'French press',
        'Kyoto Drip': 'Kyoto Drip',
        'Café con cremora': 'Coffee with creamer',
        'Siphon Japonés': 'Japanese siphon',
        'Todos los derechos reservados.': 'All rights reserved.',
        'Este formulario nos ayuda a entender rápidamente tu pedido. No necesitas pensarlo: podemos llevartelo sin problemas..': 'This form helps us quickly understand your order. No need to think about it: we can deliver it to you without any problems.',
        'Qué quieres.': 'What you want.',
        'Revisamos el alcance': 'We review the scope',
        'Identificamos una ruta técnica y funcional.': 'We identify a technical and functional path.',
        'Te contactamos': 'We contact you',
        'Coordinamos una conversación para aterrizar el pedido.': 'We schedule a conversation to shape the order.',
        'Información del pedido': 'Order information',
        'Completa los datos y nos pondremos en contacto contigo.': 'Complete the details and we will contact you.',
        'Nombre': 'Name',
        'Empresa / institución': 'Company / institution',
        'Correo electrónico': 'Email',
        'Teléfono': 'Phone',
        'Tipo de café': 'Coffee type',
        'Cuéntanos sobre tu pedido': 'Tell us about your order',
        'Enviar solicitud': 'Send request'
        'Estas son las tazas disponibles el día de hoy:': 'These are the mugs available today:',
        'Presiona este botón': 'Press this button',
        'Reserva una taza': 'Reserve a cup',
    };

    const originals = new WeakMap();
    const translateTextNodes = (lang) => {
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
            acceptNode(node) {
                return node.parentElement && !['SCRIPT', 'STYLE'].includes(node.parentElement.tagName) && node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
            }
        });
        const nodes = [];
        while (walker.nextNode())
            nodes.push(walker.currentNode);
        nodes.forEach(node => {
            if (!originals.has(node))
                originals.set(node, node.nodeValue);
            const source = originals.get(node);
            if (lang === 'es') {
                node.nodeValue = source;
                return;
            }
            const clean = source.trim();
            const translated = translations[clean];
            if (translated)
                node.nodeValue = source.replace(clean, translated);
        }
        );
    }
    ;

    const setLanguage = (lang) => {
        document.documentElement.lang = lang;
        translateTextNodes(lang);
        localStorage.setItem('intecgt-language', lang);
        document.querySelectorAll('.lang-toggle').forEach(button => {
            button.querySelector('.lang-current').textContent = lang.toUpperCase();
            button.querySelector('.lang-other').textContent = lang === 'es' ? 'EN' : 'ES';
            button.setAttribute('aria-label', lang === 'es' ? 'Cambiar idioma a inglés' : 'Switch language to Spanish');
        }
        );
    }
    ;

    const initial = localStorage.getItem('intecgt-language') === 'en' ? 'en' : 'es';
    setLanguage(initial);
    document.querySelectorAll('.lang-toggle').forEach(button => button.addEventListener('click', () => setLanguage(document.documentElement.lang === 'es' ? 'en' : 'es')));
}
)();

