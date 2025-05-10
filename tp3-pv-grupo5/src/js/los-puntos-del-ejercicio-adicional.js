export const mostrarproductos = (productos) =>{
    productos.forEach(({Descripcion, Precio})=>{
        console.log(`
            Descripcion: ${Descripcion}
            Precio: ${Precio}
        `)
    })
}

//actividad 2
export const filtrarProductosPorPrecio = (productos) => {
    console.log("\nProductos con precio mayor a $20:");
    console.log(productos.filter(({ Precio }) => Precio > 30000));
};