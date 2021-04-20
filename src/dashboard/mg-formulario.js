import { LitElement, html, css } from 'lit-element';

import "../components/mg-button"
import "../components/mg-input-text"


export class MgFormulario extends LitElement {


    static get properties() {
        return {
            valueEmail: { type: String },
            EmailValidate: {type: Boolean},
            valuePass: { type: String },
            passValidate: {type: Boolean},
            condiciones :{type: Boolean},
            formularioValido: {type: Boolean}

        };
    }

    constructor() {
        super()
        this.valueEmail = "";
        this.EmailValidate = false
        this.valuePass = "";
        this.passValidate= false,
        this.condiciones = false
        this.formularioValido = false
    }

    static get styles() {
        const { cssRules } = document.styleSheets[0]
        const globalStyle = css([Object.values(cssRules).map(rule =>
            rule.cssText).join('\n')])
        return [
            globalStyle,
            css`
            section{
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .contenedor {
                margin-top: 50px;
                border: 1px solid blue;
                height: 600px;
                width: 400px;
            }
            mg-input-text{
                margin-top:25px;
            }
            .condiciones{
                float:left;
               
            }
        `
        ];
    }


    render() {
        return html` 

        <section>
            <div class="contenedor">
                <div class="row">
                    <div class="col-1"></div>
                    <mg-input-text class="col-10" texto="Introduce tu email" tipo="text"
                     placdholder="Email"
                        value="${this.valueEmail}" error="Escribe con el siguiente formato xxx@xx.xx" 
                        @cambio-valor="${this.cambioEmail}"></mg-input-text>
                    </mg-input-text>
                    <div class="col-1"></div>
                    <div class="col-1"></div>
                    <mg-input-text class="col-10" 
                    texto="Contraseña" 
                    tipo="password"
                    placdholder="Contraseña"
                    value=${this.valuePass}
                    @cambio-valor="${this.cambioPass}"

                    >
                    </mg-input-text>
                    <div class="col-1"></div>
                </div>
        
                <div class="condicones">
                    <mg-input @mg-switch-checked="${this.condicionesver}">
                        Acepto las condiciones del servicio
                    </mg-input>
                </div>
                ${!this.formularioValido ?
                html`<mg-button texto="Enviar" clase="btn btn-success"  disabled></mg-button>`:
                html`<mg-button texto="Enviar" clase="btn btn-success"  ></mg-button>`}
                <!-- <mg-button texto="Borrar" clase="btn btn-danger" @click="${this.borrarDatos}"></mg-button> -->
        
        
            </div>
        </section>
        
        
        <h1>valores</h1>
        ${this.valueEmail}
        ${this.valuePass}
        `;

    }

    condicionesver(e){
        console.log(e.detail)
        this.condiciones = e.detail 
        this.verificar()

    }

    cambioEmail(e){
        console.log("Me he pulsado");
        console.log(e.detail)
        this.valueEmail = e.detail
        this.EmailValidate =  this.valueEmail !== ""
        this.verificar()

    }
    cambioPass(e){
        console.log("@@@@@@")
        console.log(e.detail)
        this.passValidate = this.passValidate= e.detail,
        this.verificar()
    }

    verificar(){
        this.formularioValido =this.condiciones && this.EmailValidate && this.passValidate
    }

    

    borrarDatos (){
        console.log("voy a borrar")
        this.valueEmail = ""
        var x = document.getElementsByClassName("form-control");
        console.log(x)
    }



}
customElements.define('mg-formulario', MgFormulario);