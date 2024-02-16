class WcUsuarios extends HTMLElement {
    static get observedAttributes() {
        return ["lista"];
    }

    constructor() {
        super(); // Llamada al constructor de la clase padre (HTMLElement)
        this.attachShadow({ mode: "open" });
    }

    showUsuarios(rootElement) {
        const template = document.getElementById("usuario-template").content;
        const listaUsuarios = JSON.parse(this.getAttribute("lista"));

        listaUsuarios.forEach(usuario => {
            const clone = document.importNode(template, true);
            clone.querySelector('.usuario-img').src = usuario.foto;
            clone.querySelector('.usuario-nombre').textContent = usuario.nombre;
            clone.querySelector('.usuario-email').textContent = usuario.email;
            clone.querySelector('.ver-email-btn').addEventListener('click', () => {
                alert("Correo electrónico: " + usuario.email);
            });
            rootElement.appendChild(clone);
        });
    }

    connectedCallback() {
        if (this.shadowRoot) this.showUsuarios(this.shadowRoot);
    }

    attributeChangedCallback() {
        if (this.shadowRoot) this.showUsuarios(this.shadowRoot);
    }
}

// Definimos el nuevo elemento personalizado asociado a la clase WcUsuarios
customElements.define("wc-usuarios", WcUsuarios);