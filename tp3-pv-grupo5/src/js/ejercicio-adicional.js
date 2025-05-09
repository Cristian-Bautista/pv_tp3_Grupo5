import { filtrarProductosPorPrecio} from "./los-puntos-del-ejercicio-adicional.js"
import { mostrarproductos } from "./los-puntos-del-ejercicio-adicional.js"
import { agregarproducto } from "./los-puntos-del-ejercicio-adicional.js";
import { eliminarProducto } from "./los-puntos-del-ejercicio-adicional.js";
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
agregarproducto(productos);
eliminarProducto(productos);
filtrarProductosPorPrecio(productos);
