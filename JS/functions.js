const removeIcon = document.querySelectorAll(".carrito__icono-eliminar");


removeIcon.forEach(elem => {
    elem.addEventListener ("click", () => {
        const elemParent = elem.parentElement;
        elemParent.remove ();
        actualizarBadge();
    })
    
});

//================================MOSTRAR CARRITO=============================//

const cartIcon = document.getElementsByClassName("header__carrito-btn");

const iconoCarrito = cartIcon[0];


const carrito = document.querySelector(".carrito__panel");


const badgeCarrito = document.querySelector(".header__carrito-badge");

const actualizarBadge = () => {
    const cantidad = carrito.querySelectorAll(".carrito__panel-articulo").length;
    badgeCarrito.textContent = cantidad;
};

actualizarBadge();

iconoCarrito.addEventListener("click", () => {
    carrito.classList.toggle("carrito__panel--show");
})
//================================CERRAR CARRITO=============================//

const cerrarCarrito = document.querySelector(".carrito__panel-btn--cerrar");

cerrarCarrito.addEventListener("click", () => {
    carrito.classList.remove("carrito__panel--show");
})

//================================MOSTRAR MENU=============================//

const menuIcon = document.querySelector(".header__menu-btn");


const menu = document.querySelector(".menu__panel");
menuIcon.addEventListener("click", () => {
    menu.classList.toggle("menu__panel--show");
});

//================================CERRAR MENU=============================//
const cerrarMenu = document.querySelector(".menu__panel-btn--cerrar");


cerrarMenu.addEventListener("click", () => {
    menu.classList.remove("menu__panel--show");
})

//================================AGREGAR AL CARRITO=============================//


const agregarACarrito = document.querySelectorAll(".auto-card__btn--agregar");


agregarACarrito.forEach(elem => {
    elem.addEventListener ("click", () => {
        const {nombre, imagen, precio} = elem.dataset;

        const articulo = document.createElement("div");
        articulo.className = "carrito__panel-articulo";
        articulo.innerHTML = `
        <img class="carrito__articulo-imagen" src="${imagen}" alt="${nombre}">
        <p class="carrito__producto">${nombre}</p>
        <p class="carrito__producto--precio">$${precio}</p>
        <img class="carrito__icono-eliminar" src="img/eliminar.png" alt="icono eliminar">
        `;

        const comprarBtn = document.querySelector(".carrito__comprar-btn");
        comprarBtn.before(articulo);
        actualizarBadge();

        const agregarIconoEliminar = articulo.querySelector(".carrito__icono-eliminar");
        agregarIconoEliminar.addEventListener("click", () => {
            articulo.remove();
            actualizarBadge();
        });
    })
})