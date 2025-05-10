export const mostrarproductos = (productos) =>{
    productos.forEach(({Descripcion, Precio})=>{
        console.log(`
            Descripcion: ${Descripcion}
            Precio: ${Precio}
        `)
    })
}

//actividad 3
export const iba= (productos) => {
    console.log(productos.map(i=>i.Precio*21/100));
}

