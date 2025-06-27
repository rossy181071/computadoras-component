import { LitElement, html, css  } from "lit";

export class ComputadorasDeEscritorio extends LitElement {
    static get properties() {
        return{
            title: {type: String},
            paragraph: {type: String},
            imgurl: {type: String},
           
        }
    }

    static get styles() {
        return css `
        #computadoras-de-escritorio-container {
        background-color: #886666;
        
        padding: 2vw;
        
        }
        `  
    }
    constructor() {
        super()
        this.title = "Computadoras de Escritorio"
        this.paragraph = "Aqui mostraremos diferentes tipos de Computadoras de Escritorio"
        this.imgUrl = "https://img.corotos.com.do/variants/hazhtj5anhwiy5dg1r4umbzac83h/1055569cb138ec2f148e495b0691cfd44c80033c3c15ea35b933d876c68300f9"
    
    
    }

    render() {
        return html`
        <div id="computadoras-de-escritorio">
            <h1>${this.title}</h1>
            <p>${this.paragraph}</p>
            <img src="${this.imgUrl}">
        </div>
        `
    }

}

    

window.customElements.define('computadoras-de-escritorio', ComputadorasDeEscritorio)