//Creamos array para el "carrito".

const carrito = []

/* // Funcion para ordenar de la letra A a la Z.

const ordenarAZ = () => {
    productos.sort((a, b) => a.nombre - b.nombre)
    mostrarListaOrdenada()
};

// Funcion para ordenar de la letra Z a la A.

const ordenarZA = () => {
    productos.sort((a, b) => b.nombre - a.nombre)
    mostrarListaOrdenada()
};
 */

// Funcion para ordenar de MENOR a mayor.

const ordenarMenorMayor = () => {
    productos.sort((a, b) => a.precio - b.precio)
    mostrarListaOrdenada()
};

// Funcion para ordenar de MAYOR a menor.

const ordenarMayorMenor = () => {
    productos.sort((a, b) => b.precio - a.precio)
    mostrarListaOrdenada()
};


//Funicon mostrar listas ordenada.

const mostrarListaProductos = () => {
    const listaProductos = productos.map(producto => {
        return '- ' + producto.nombre + ' $' + producto.precio
    })
    alert('Lista de precios:' + '\n\n' + listaProductos.join('\n'))
    comprarProductos(listaProductos)
};


const mostrarListaOrdenada = () => {
    const listaProductosOrdenados = productos.map(producto => {
        return '- ' + producto.nombre + ' $' + producto.precio
    })
    alert('Lista de precios:' + '\n\n' + listaProductosOrdenados.join('\n'))
    comprarProductos(listaProductosOrdenados)
};

const comprarProductos = (listaProductos) => {
    let productoNombre = ''
    let productoCantidad = 0
    let otroProducto = false

    do {
        productoNombre = prompt('Elija un producto' + '\n\n' + listaProductos.join('\n'))// ver como hacer para sustituir con listaProductosOrdenados segun el caso.
        productoCantidad = parseInt(prompt('Selecciones la cantidad que desea comprar'))

        const producto = productos.find(producto => producto.nombre === productoNombre)

        console.log(producto)

        otroProducto = confirm('Desea agregar otro producto?')
    } while (otroProducto);
};

mostrarListaProductos();
//ordenarMayorMenor();
//ordenarMenorMayor();
//comprarProductos();