// Imagen modal
function abrirModal(imagenSrc) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-imagen");
    modal.style.display = "flex";
    modalImg.src = imagenSrc;
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}

// Carrito de compra
const carrito = [];

function alternarCarrito() {
    const carritoContenedor = document.getElementById("carrito-contenedor");
    carritoContenedor.classList.toggle("minimizado");
    carritoContenedor.classList.toggle("maximizado");
}

function agregarAlCarrito(producto, precio) {
    const productoExistente = carrito.find(item => item.nombre === producto);

    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        carrito.push({ nombre: producto, precio: precio, cantidad: 1 });
    }

    actualizarCarrito();
}

function actualizarCarrito() {
    const listaCarrito = document.getElementById("lista-carrito");
    const totalPrecio = document.getElementById("total-precio");
    const cantidadTotal = document.getElementById("cantidad-total");

    listaCarrito.innerHTML = "";

    let total = 0;
    let cantidad = 0;
    carrito.forEach(item => {
        total += item.precio * item.cantidad;
        cantidad += item.cantidad;

        const li = document.createElement("li");
        li.innerHTML = `
            <span>${item.nombre} (x${item.cantidad}) - $${item.precio * item.cantidad}</span>
            <button onclick="eliminarDelCarrito('${item.nombre}')">X</button>
        `;
        listaCarrito.appendChild(li);
    });

    totalPrecio.textContent = `Total: B$${total}`;
    cantidadTotal.textContent = cantidad; // Actualiza la cantidad total
}

function eliminarDelCarrito(producto) {
    const index = carrito.findIndex(item => item.nombre === producto);
    if (index > -1) {
        carrito.splice(index, 1);
    }

    actualizarCarrito();
}

function vaciarCarrito() {
    carrito.length = 0;
    actualizarCarrito();
}