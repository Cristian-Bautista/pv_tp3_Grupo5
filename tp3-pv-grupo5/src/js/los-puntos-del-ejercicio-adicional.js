//Punto 1
export const mostrarproductos = (productos) =>{
    productos.forEach(({Descripcion, Precio})=>{
        console.log(`
            Descripcion: ${Descripcion}
            Precio: ${Precio}
        `)
    })
}
//Punto 5
export const agregarproducto = (productos) =>{
    productos.push({ descripcion: "Samsung Galaxy S25 Ultra 512gb", precio: 2987288 });
    console.log(productos);
}