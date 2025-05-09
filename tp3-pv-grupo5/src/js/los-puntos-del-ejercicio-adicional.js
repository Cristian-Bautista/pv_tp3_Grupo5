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
let precioconiba=Precio.map{((Descripcion,precio)=>{
return {
    Descripcion: Descripcion,
    Precio: (precio*1.21),
}
})
return precioconiba
}
}
