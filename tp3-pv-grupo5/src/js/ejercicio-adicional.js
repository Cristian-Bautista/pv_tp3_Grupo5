import { mostrarproductos, filtrarProductosPorPrecio} from "./los-puntos-del-ejercicio-adicional.js"

const productos = [
    {
        Descripcion : "Teclado",
        Precio : 30000
    },
    {
        Descripcion : "Mouse",
        Precio : 25000
    },
    {
        Descripcion : "Smart 32'",
        Precio : 350000
    },
    {
        Descripcion : "Disco SSD 480gb",
        Precio : 60000
    },
    {
        Descripcion : "Procesador AMD Ryzer 7 5700G",
        Precio : 30000
    }
]
mostrarproductos(productos);


// Actividad 2 
console.log("\nProductos con precio mayor a $20:");
const productosFiltrados = filtrarProductosPorPrecio(productos);
mostrarproductos(productosFiltrados);



  