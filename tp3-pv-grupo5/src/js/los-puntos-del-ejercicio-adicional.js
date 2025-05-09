export const mostrarproductos = (productos) =>{
    productos.forEach(({Descripcion, Precio})=>{
        console.log(`
            Descripcion: ${Descripcion}
            Precio: ${Precio}
        `)
    })
}

//actividad 2

export const generarproductos = (productos) => {
    productos.forEach(({ Descripcion, Precio }) => {
      console.log(`Descripción: ${Descripcion} - Precio: $${Precio}`);
    });
  };
  
  
  export const filtrarProductosPorPrecio = (productos) => {
     return productos.filter(({ Precio }) => Precio > 20);
  };
  