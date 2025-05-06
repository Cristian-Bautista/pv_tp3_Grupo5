export const mostrarproductos = (productos) =>{
    productos.forEach(({Descripcion, Precio})=>{
        console.log(`
            Descripcion: ${Descripcion}
            Precio: ${Precio}
        `)
    })
}