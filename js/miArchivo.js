//Saludo inicial

alert('Biendvenid@, usuari@ '
    + '\n\n' + 'Por favor, elija un producto de la lista por su nombre.'
    + '\n\n' + 'Por Ejemplo: "alfare"');

//Creamos array para el "carrito".

const carrito = []

// Funcion ver lista de productos ORDENADA.

const ordenar = () => {
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
    let askAgain = false


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

        askAgain = confirm('Desea agregar otro producto?')

    } while (askAgain)


    confirmarCompra()
<<<<<<< HEAD

};

// Funcion sumar productos DUPLICADOS al "carrito".
=======

};
>>>>>>> ab91549b4b0216c45bbf1d83e2f83b1440ca28ad

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

// CONFIRMAR compra.

const confirmarCompra = () => {
    const listaOrdenada = carrito.map(producto => {
        return '- ' + producto.nombre + ' ~> Cantidad: ' + producto.cantidad
    })

    //CONFIRMACION Productos en el "carrito".

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

//FIN compra.

const finalizarCompra = (listaOrdenada) => {
    const cantidadTotal = carrito.reduce((i, item) => i + item.cantidad, 0)
    const precioTotal = carrito.reduce((i, item) => i + (item.cantidad * item.precio), 0)


    alert('Resumen de su compra: ' + '\n\n' + listaOrdenada.join('\n')
        + '\n\nTotal de productos: ' + cantidadTotal
        + '\n\nEl total de su compra es de: $ ' + precioTotal + ',00'
    )
    const precioConDescuento = CalcularDescuento(precioTotal);

    alert('El precio final es de: $' + precioConDescuento + ',00'
        + '\n\nGracias por su compra!')
<<<<<<< HEAD
=======
};

//Funcion calcular descuento

const CalcularDescuento = (precioTotal) => {

    if (precioTotal >= 80000) {
        precioConDescuento = precioTotal * 0.9;
        alert('Por alcanzar los $80.000,00 recibe un 10% de descuento sobre el importe total de su compra!!')
        return precioConDescuento;
    } else {
        return precioTotal;
    };
>>>>>>> ab91549b4b0216c45bbf1d83e2f83b1440ca28ad
};

//Funcion CALCULAR descuento.

const CalcularDescuento = (precioTotal) => {

    if (precioTotal >= 80000) {
        precioConDescuento = precioTotal * 0.9;
        alert('Por alcanzar los $80.000,00 recibe un 10% de descuento sobre el importe total de su compra!!')
        return precioConDescuento;
    } else {
        return precioTotal;
    };
};

ordenar();



