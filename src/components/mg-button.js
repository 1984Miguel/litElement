import { LitElement, html, css } from 'lit-element';

export class MgButton extends LitElement {

    /**
      * Object describing property-related metadata used by Polymer features
      */
    static get properties() {
        return {
            clase: { type: String },
            disabled: { type: Boolean },
            texto: { type: String },
        };
    }

    constructor() {
        super();
        this.clase = "btn btn-primary";
        this.disabled = false;
      }

    static get styles() {
        const { cssRules } = document.styleSheets[0]
        const globalStyle = css([Object.values(cssRules).map(rule =>
            rule.cssText).join('\n')])
        return [
            globalStyle,
            css`
        `
        ];
    }

    render() {
        return html`<button type="button" class="${this.clase}" ?disabled="${this.disabled}">${this.texto}</button>
        `;
    }
}
customElements.define('mg-button', MgButton);