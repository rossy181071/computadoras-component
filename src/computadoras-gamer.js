import { LitElement, html, css } from "lit";

export class ComputadorasGamer extends LitElement {
    static get properties() {
        return {
            name: { type: String },
            title: { type: String },
            moviesParagraph: { type: String }
        }
    }

    constructor() {
        super()
        this.name = "Asus"
        this.title = `Mi computadora Gamer Favorita es ${this.name}`
        this.moviesParagraph = 'Mi computadora Gamer Favorita es:'
    }

    static get styles() {
        return css`
        #computadoras-container {
            background-color: #289855;

            padding: 2vw;
        }
        
        .movie-poster {
            width: 200px;
        }        
        `
    }

    render() {
        return html`
        <div id= "computadoras-container">
            <h1>${this.title}</h1>
            <p>${this.ComputadorasGamerParagraph}</p>
            <ol>

            <li><h3>Computadora Asus Powered By</h3><img class= "movie-poster" src="https://www.asus.com/media/Odin/Websites/mx/ProductLine/20210820015530.jpg"></li>
           
            <li><h3>Computadora Razer</h3><img class= "movie-poster" src="https://b2c-contenthub.com/wp-content/uploads/2024/01/980x500-1.jpg?quality=50&strip=all"></li>

             </ol>


        </div>
        `
    }
}

window.customElements.define('computadoras-gamer', ComputadorasGamer)