//Saludo inicial

alert('Biendvenid@, usuari@ ' + '\n\n' + 'Por favor, elija un producto de la lista por su nombre.');


//Creamos array para el "carrito".

const carrito = []

// Funcion ver lista de oredenada de productos 

const comprar = () => {
    const produtosEconomicos = confirm('Desea visualizar primero los productos mas economicos?')
    if (produtosEconomicos) {
        ordenarMenorMayor()

    } else
        ordenarMayorMenor()
};

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


// Funcion mostrar LISTA ORDENADA.

const mostrarListaOrdenada = () => {
    const listaOrdenada = productos.map(producto => {
        return '- ' + producto.nombre + ' ' + producto.descripcion + ' $' + producto.precio
    })
    alert('Lista de produtos y precios:' + '\n\n' + listaOrdenada.join('\n'))
    comprarProductos(listaOrdenada)
};


// Funcion COMPRAR + estructura DO WHILE para agregar mas productos al "carrito."

const comprarProductos = (listaOrdenada) => {
    let productoNombre = ' '
    let productoCantidad = 0
    let otroProducto = false

    do {
        productoNombre = prompt('Que producto desea?' + '\n\n' + listaOrdenada.join('\n')) // ver como hacer para sustituir con listaProductosOrdenados segun el caso.
        productoCantidad = parseInt(prompt('Seleccione la cantidad que desea comprar'))

        const producto = productos.find(producto => producto.nombre.toLowerCase() === productoNombre.toLowerCase())

        // Validacion que determinara si el producto es agregado al "carrito".
        if (producto) {
            agregarAlCarrito(producto, producto.id, productoCantidad)
        } else {
            alert('El Produto no existe...')
        }

        otroProducto = confirm('Desea agregar otro producto?')

    } while (otroProducto);

    confirmarCompra()
};


// Funcion sumar productos DUPLICADOS.
const agregarAlCarrito = (producto, productoId, productoCantidad) => {
    const productoDuplicado = carrito.find(producto => producto.id === productoId)
    if (!productoDuplicado) {
        producto.cantidad += productoCantidad
        carrito.push(producto)
    } else {
        productoDuplicado.cantidad += productoCantidad
    }
};

// Funcion ELIMINAR produictos del "carrito".

const eliminarProductoCarrito = (nombreProductoEliminar) => {
    carrito.forEach((producto, index) => {
        if (producto.nombre.toLowerCase() === nombreProductoEliminar) {
            if (producto.cantidad > 1) {
                producto.cantidad--
            } else { carrito.splice(index, 1) }
        }
    })
    confirmarCompra();
};

// Confirmar compra

const confirmarCompra = () => {
    const listaOrdenada = carrito.map(producto => {
        return '- ' + producto.nombre + ' ~> Cantidad: ' + producto.cantidad
    })

    const ischeckout = confirm('Productos en su carrito: ' + '\n\n' + listaOrdenada.join('\n')
        + '\n\nPara CONTINUAR presione "Aceptar".'
        + '\nPara ELIMINAR un producto del carrito presione "Cancelar".'
    )
    if (ischeckout) {
        finalizarCompra(listaOrdenada)
    } else {
        const nombreProductoEliminar = prompt('Ingrese el nombre del producto que desea eliminar')
        eliminarProductoCarrito(nombreProductoEliminar)
    }
};

const finalizarCompra = (listaOrdenada) => {
    const cantidadTotal = carrito.reduce((i, item) => i + item.cantidad, 0)
    const precioTotal = carrito.reduce((i, item) => i + (item.cantidad * item.precio), 0)
    alert('Resumen de su compra: ' + '\n\n' + listaOrdenada.join('\n')
        + '\n\nTotal de productos: ' + cantidadTotal
        + '\n\nEl total de su compra es de: $ ' + precioTotal + '.00'
        + '\n\nGracias, vuelva Pronto!'
    )
};

comprar();



