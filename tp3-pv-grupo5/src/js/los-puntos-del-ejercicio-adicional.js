export const mostrarproductos = (productos) =>{
    productos.forEach(({Descripcion, Precio})=>{
        console.log(`
            Descripcion: ${Descripcion}
            Precio: ${Precio}
        `)
    })
}

//actividad 3
export const precioconiba= (productos) => {
    console.log(productos.map(i => {
        //parseFloat(i.Precio*21/100).toFixed(2)))
        const precioconIVA = parseFloat((i.Precio * 1.21).toFixed(2));
    
    return {
        Descripcion: i.Descripcion,
        Precio: i.Precio,   
        precioconIVA: i.precioconIVA
    }
    })  