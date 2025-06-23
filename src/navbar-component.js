import { LitElement, html, css } from "lit";

export class NavbarComponent extends LitElement {
    static get properties() {
        return {
            pages: { type: Array }
        }
    }

    static get styles() {
        return css`
        #navbar-container {
            background-color: #888;

            display: table;
            width: 100%;
            table-layout: fixed;
        }
        #navbar-container h2 {
            display: table-cell;
            text-align: center;

            background-color: #d52e2e;
            padding: 20px;
        }
        `
    }

    constructor() {
        super()
        this.pages = [
            {
                url: 'cinco-mejores-computadoras',
                title: 'Cinco Mejores Compus'
            },
            {
                url: 'computadoras gamer',
                title: 'Computadoras Gamer'
            },
            {
                url: 'computadoras de escritorio',
                title: 'Computadoras de Escritorio'
            },
            {
                url: 'computadoras de mayor uso',
                title: 'Computadoras de Mayor Uso'
            }
        ]
    }

    triggerPageChange(e) {
        this.dispatchEvent(new CustomEvent('change-page', {
            detail: e.target.id
        }))
    }

    render() {
        return html`
            <div id="navbar-container">
                ${this.pages.map(page => html`<h2 id=${page.url} @click="${this.triggerPageChange}">${page.title}</h2>`)}
            </div>
            `
    }

}



window.customElements.define('navbar-component', NavbarComponent)