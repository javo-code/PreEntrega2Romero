//Saludo inicial
alert('Biendvenid@, usuari@ ' + '\n\n' + 'Por favor, elija un producto de la lista por su nombre.');


//Creamos array para el "carrito".

const carrito = []

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


const mostrarListaOrdenada = () => {
    const listaOrdenada = productos.map(producto => {
        return '- ' + producto.nombre + ' ' + producto.descripcion + ' $' + producto.precio
    })
    alert('Lista de produtos y precios:' + '\n\n' + listaOrdenada.join('\n'))
    comprarProductos(listaOrdenada)
};

const comprarProductos = (listaOrdenada) => {
    let productoNombre = ''
    let productoCantidad = 0
    let otroProducto = false

    do {
        productoNombre = prompt('Lista de productos y precios:' + '\n\n' + listaOrdenada.join('\n'))// ver como hacer para sustituir con listaProductosOrdenados segun el caso.
        productoCantidad = parseInt(prompt('Seleccione la cantidad que desea comprar'))

        const producto = productos.find(producto => producto.nombre.toLowerCase() === productoNombre.toLowerCase())



        otroProducto = confirm('Desea agregar otro producto?')

    } while (otroProducto);
};

//ordenarMenorMayor();
ordenarMayorMenor();
//comprarProductos();
