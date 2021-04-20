import { LitElement, html, css } from 'lit-element';

export class MgInputText extends LitElement {

    /**
      * Object describing property-related metadata used by Polymer features
      */
    static get properties() {
        return {
            texto: { type: String},
            tipo : { type: String},
            placdholder : { type: String},
            value: {type: String},
            valido: {type: Boolean},
            error: {type: String}
        };
    }

    constructor() {
        super();
        this.value = ""


      }

    static get styles() {
        const { cssRules } = document.styleSheets[0]
        const globalStyle = css([Object.values(cssRules).map(rule =>
            rule.cssText).join('\n')])
        return [
            globalStyle,
            css`
        .text-muted-personal{
            color:red;
        }`
        ];
    }

    

    render() {
        return html`
            <label for="exampleInputEmail1">${this.texto}</label>
            <input
            class="miform"
            @change=${this.updateShownValue}
            type="${this.tipo}" class="form-control ${!this.valido && this.value != "" ? "is-invalid": ''}"  aria-describedby="emailHelp"
             placeholder="${this.placdholder}" value="${this.value}" >
            ${ !this.valido && this.value != ""
          ? html`<small id="emailHelp" class="form-text text-muted-personal">${this.error}</small>` 
          : ''}
          
            `;
    }

    updateShownValue (e) {
        this.value = e.srcElement.value
        var expresion = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        console.log(expresion.test(e.srcElement.value));
        if (this.placdholder == "Email"){
            if( !expresion.test(e.srcElement.value))     this.valido = false;
            if(expresion.test(e.srcElement.value))   {
                this.valido = true;
                this.datosPadre(e)
            }  


        }
        else{
            this.valido = true;
            this.datosPadre(e)
        }  
      }

      datosPadre(e){
        this.dispatchEvent(new CustomEvent('cambio-valor', {
            detail: e.srcElement.value
        }));
               
      }
  
}
customElements.define('mg-input-text', MgInputText);