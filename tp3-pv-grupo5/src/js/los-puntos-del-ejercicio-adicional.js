//Punto 1
export const mostrarproductos = (productos) =>{
    productos.forEach(({Descripcion, Precio})=>{
        console.log(`
            Descripcion: ${Descripcion}
            Precio: ${Precio}
        `)
    })
}
//Punto 2
export const filtrarProductosPorPrecio = (productos) => {
    console.log("\nProductos con precio mayor a $20:");
    console.log(productos.filter(({ Precio }) => Precio > 30000));
};
//Punto 5
export const agregarproducto = (productos) =>{
    productos.push({ descripcion: "Samsung Galaxy S25 Ultra 512gb", precio: 2987288 });
    console.log(productos);
}

//Punto 6
export const eliminarProducto = (productos) =>{
    eliminarMinimo(productos)
    console.log(productos);
}

let min = 0;
let pos = 0;
function eliminarMinimo(productos) {
    min = productos[0].Precio;
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].Precio < min) {
            min = productos[i].Precio;
            pos = i;
        }
    }
  productos.splice(pos, 1);
}
