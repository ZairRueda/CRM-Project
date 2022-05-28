import { obtenerCLiente, editarCliente } from "./API.js";
import { mostrarAlerta, validar } from "./funciones.js";

(function() {

    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono');
    const empresaInput = document.querySelector('#empresa');
    const idInput = document.querySelector('#id');


    document.addEventListener('DOMContentLoaded', () => {
        const parametrosURL = new URLSearchParams(window.location.search);

        const idCliente = parseInt(parametrosURL.get('id'));

        imprimirCliente(idCliente)

        const formulario = document.querySelector('#formulario');
        formulario.addEventListener('submit', validarCliente)
        
    })

    async function imprimirCliente(idx) {

        const {nombre, email, telefono, empresa, id} = await obtenerCLiente(idx)

        nombreInput.value = nombre;
        emailInput.value = email;
        telefonoInput.value = telefono;
        empresaInput.value = empresa;
        idInput.value = id;

        return 
    }

    function validarCliente(e) {
        e.preventDefault();

        const cliente = {
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id: parseInt(idInput.value)
        };

        if(validar(cliente)) {
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }

        editarCliente(cliente);
    }
})();