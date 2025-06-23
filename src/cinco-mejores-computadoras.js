import { LitElement,html,css } from "lit";

export class CincoMejoresComputadoras extends LitElement {
    static get properties() {
        return {
            title: { type: String },
            name: { type: String },
            paragraph: { type: String}
        }
    }

    constructor() {
        super()
        this.title = "Aqui les mostrare las 5 mejores computadoras"
        this.name = "Rossy"
        this.paragraph = html`Soy <strong>${this.name}</strong> y esta es mi pagina donde les mostrare las 5 mejores computadoras `

    }

    static get styles() {
        return css`
        #cinco-mejores-computadoras-container {
            background-color: #2987;

            padding: 2vw;
    
        }
        `
    }

    render() {
        return html`
        <div id= "cinco-mejores-computadoras-container">
            <h1>${this.title}</h1>
            <p>${this.paragraph}</p>
        </div>
        
        `
    }
    
}
window.customElements.define('cinco-mejores-computadoras', CincoMejoresComputadoras)
