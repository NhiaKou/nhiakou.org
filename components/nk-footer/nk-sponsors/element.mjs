import template from './template.mjs';

class NkSponsors extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        this.style.display = 'block';
    }
}

customElements.define("nk-sponsors", NkSponsors);