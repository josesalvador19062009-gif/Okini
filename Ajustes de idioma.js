( () => {
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
