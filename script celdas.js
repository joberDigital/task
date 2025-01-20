// Supongamos que tenemos una matriz de objetos representando productos
const productos = [
    { nombre: "Manzana", precio: 0.5 },
    { nombre: "Banana", precio: 0.3 },
    { nombre: "Naranja", precio: 0.4 }
];

// Obtener la tabla
const tablaProductos = document.getElementById("tablaProductos");

// Crear la cabecera de la tabla
let cabecera = tablaProductos.insertRow();
let celdaNombre = cabecera.insertCell();
celdaNombre.textContent = "Nombre";
let celdaPrecio = cabecera.insertCell();
celdaPrecio.textContent = "Precio";

// Iterar sobre los productos y crear las filas
for (let i = 0; i < productos.length; i++) {
    let fila = tablaProductos.insertRow();
    let celdaNombre = fila.insertCell();
    celdaNombre.textContent = productos[i].nombre;
    let celdaPrecio = fila.insertCell();
    celdaPrecio.textContent = productos[i].precio;
}