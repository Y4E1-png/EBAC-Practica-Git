const iconoCarrito = document.querySelector(".header__carrito-btn");
const carrito = document.querySelector(".carrito__panel");
const cerrarCarrito = document.querySelector(".carrito__panel-btn--cerrar");
const menuIcon = document.querySelector(".header__menu-btn");
const menu = document.querySelector(".menu__panel");
const cerrarMenu = document.querySelector(".menu__panel-btn--cerrar");
const badgeCarrito = document.querySelector(".header__carrito-badge");
const conteoCarrito = document.querySelector("#carrito-conteo");

const actualizarBadge = () => {
  const cantidad = carrito.querySelectorAll(".carrito__panel-articulo").length;
  badgeCarrito.textContent = cantidad;
  conteoCarrito.textContent = `Carrito: ${cantidad} ${cantidad === 1 ? "artículo" : "artículos"}`;
};

const cambiarEstadoPanel = (panel, control, estaAbierto, claseVisible, botonCerrar) => {
  panel.classList.toggle(claseVisible, estaAbierto);
  panel.setAttribute("aria-hidden", String(!estaAbierto));
  panel.inert = !estaAbierto;
  control.setAttribute("aria-expanded", String(estaAbierto));

  if (estaAbierto) {
    botonCerrar.focus();
  } else {
    control.focus();
  }
};

actualizarBadge();

iconoCarrito.addEventListener("click", () => {
  const mostrar = !carrito.classList.contains("carrito__panel--show");
  cambiarEstadoPanel(carrito, iconoCarrito, mostrar, "carrito__panel--show", cerrarCarrito);
});

cerrarCarrito.addEventListener("click", () => {
  cambiarEstadoPanel(carrito, iconoCarrito, false, "carrito__panel--show", cerrarCarrito);
});

menuIcon.addEventListener("click", () => {
  const mostrar = !menu.classList.contains("menu__panel--show");
  cambiarEstadoPanel(menu, menuIcon, mostrar, "menu__panel--show", cerrarMenu);
});

cerrarMenu.addEventListener("click", () => {
  cambiarEstadoPanel(menu, menuIcon, false, "menu__panel--show", cerrarMenu);
});

document.addEventListener("keydown", event => {
  if (event.key !== "Escape") return;

  if (menu.classList.contains("menu__panel--show")) {
      cambiarEstadoPanel(menu, menuIcon, false, "menu__panel--show", cerrarMenu);
  }

  if (carrito.classList.contains("carrito__panel--show")) {
      cambiarEstadoPanel(carrito, iconoCarrito, false, "carrito__panel--show", cerrarCarrito);
  }
});

document.querySelectorAll(".carrito__icono-eliminar").forEach(button => {
  button.addEventListener("click", () => {
      button.closest(".carrito__panel-articulo").remove();
      actualizarBadge();
  });
});

document.querySelectorAll(".auto-card__btn--agregar").forEach(button => {
  button.addEventListener("click", () => {
    const { nombre, imagen, precio } = button.dataset;
    const articulo = document.createElement("div");
    articulo.className = "carrito__panel-articulo";
    articulo.innerHTML = `
      <img class="carrito__articulo-imagen" src="${imagen}" alt="${nombre}">
      <p class="carrito__producto">${nombre}</p>
      <p class="carrito__producto--precio">$${precio}</p>
      <button type="button" class="carrito__icono-eliminar" aria-label="Eliminar ${nombre} del carrito"><img src="img/eliminar.png" alt=""></button>
    `;

    document.querySelector(".carrito__comprar-btn").before(articulo);
    actualizarBadge();

    articulo.querySelector(".carrito__icono-eliminar").addEventListener("click", () => {
      articulo.remove();
      actualizarBadge();
    });
  });
});
