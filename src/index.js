import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './estilos.css';


const expresion = document.getElementById('expresion');
const texto = document.getElementById('texto');
const comparar = document.getElementById('comparar');
const limpiar = document.getElementById('limpiar');
const resultado = document.getElementById('resultado');

const validarExpresion = () => {

    let er = expresion.value;
    let cadena = texto.value;

    if (er === '' || cadena === '') {
        resultado.innerHTML = `
            <div class="alert alert-warning text-center">
                Por favor, completa ambos campos.
            </div>
        `;
        return;
    }

    try {

        let regex = new RegExp(er);
        if (regex.test(cadena)) {

            resultado.innerHTML = `
                <div class="alert alert-success text-center">
                    ¡Correcto! El texto cumple con la expresion regular.
                </div>
            `;

        } else {

            resultado.innerHTML = `
                <div class="alert alert-danger text-center">
                    El texto no cumple con la expresion regular.
                </div>
            `;

        }

    } catch (error) {

        resultado.innerHTML = `
            <div class="alert alert-warning text-center">
                La expresion regular ingresada no es valida.
            </div>
        `;

    }

};


comparar.addEventListener('click', validarExpresion);


limpiar.addEventListener('click', () => {

    expresion.value = '';
    texto.value = '';
    resultado.innerHTML = '';

});
