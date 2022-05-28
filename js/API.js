// Esta es la URL 
const url = 'http://localhost:3000/clientes';

// Cuando se crea nuevo cliente
export const nuevoCliente = async cliente => {
    try {
        // Para seguir los principios de REST aun que ya tenemos la url, tambien agregaremos el metodo con el cual se enviaran los datos
        // En fetch seguido de la url podemos agregar el method
        // Siempre las APIs se deben manejar con metodo post
        // Body : es la forma en la que se enviaran los datos , puede ser en forma de string o en forma de objeto
        // headers : es el tipo de informacion que se esta enviando, varia segun lo que sea
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html'
    } catch (error) {
        console.log(error);
    }
}

// Obtiene todos los clientes
export const obtenerClientes = async () => {
    try {
        const resultado = await fetch(url)
        const clientes = await resultado.json()
        return clientes
    } catch (error) {
        console.log(error)
    }
}

export const eliminarCliente = async id => {
    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE'

        })
    } catch (error) {
        console.log(error);
    }
}

export const obtenerCLiente = async id => {
    try {
        const resultado = await fetch(`${url}/${id}`)
        const cliente = await resultado.json()
        return cliente
    } catch (error) {
        console.log(error);
    }
}

// Actualizar registro
// Hay dos metodos para actualizar un registro
export const editarCliente = async cliente => {
    // console.log(cliente);
    try {
        await fetch(`${url}/${cliente.id}`, {
            method: 'PUT',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        window.location.href = 'index.html'

    } catch (error) {
        console.log(error);
    }
}