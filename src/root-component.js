import { LitElement, html, css, nothing } from 'lit'

import { NavbarComponent } from './navbar-component.js'
import { CincoMejoresComputadoras } from './cinco-mejores-computadoras.js'
import { ComputadorasGamer } from './computadoras-gamer.js'

export class RootComponent extends LitElement {
    static get properties() {
        return {
            currentPage: {
                type: String
            },

        }

    }

    static get styles() {
        return css`
        #root-container{
            background-color : #666;
        }
        `
    }
    constructor() {
        super()
        this.currentPage = "cinco-mejores-computadoras"
    }

    handlePageChange(e) {
        this.currentPage = e.detail
        debugger
    }

    render() {
        let pageTemplate = nothing

        switch (this.currentPage) {
            case 'computadoras-gamer':
                pageTemplate = html`<computadoras-gamer></computadoras-gamer>`
                break;

            case 'cinco-mejores-computadoras':
                pageTemplate = html`<cinco-mejores-computadoras></cinco-mejores-computadoras>`
                break;

        }
        return html`
            <div id="root-container">
                <navbar-component @change-page= "${this.handlePageChange}"></navbar-component>
                    <h1>Este es el componente raiz</h1>
                    ${pageTemplate}
            </div>`
    }
}

window.customElements.define('root-component', RootComponent)