
const carrito = [];

const contenedordeProductos = document.querySelector("#contenedor-productos");
const emptyCart = document.querySelector("#carrito-acciones-vaciar");
const emptyText = document.querySelector("#carrito-vacio");
const totalElement = document.querySelector("#total");

function calculateTotal() {
  const products = localStorage.getItem("cart");
  if (!products) return 0;
  const productsArray = JSON.parse(products);

  let total = 0;
  productsArray.forEach((pizza) => {
    total = total += pizza.precio;
  });

  totalElement.innerHTML = "$" + total.toString();
}

function cargarProductos() {
  const products = localStorage.getItem("cart");
  if (!products) return;
  const productsArray = JSON.parse(products);

  productsArray.forEach((product) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="card producto">
        <h2 class="h2-jm">${product.nombre}</h2>
        <img class="img-serv" src="../img/${product.img}" alt="imagen de referencia de desarrolador"> 
        <p class="producto-precio">${product.precio}</p>
        <button class="button-main" id="${product.id}">Agregado</button>
      </div>`;
    contenedordeProductos.appendChild(div);
  });
}

function checkCart() {
  const products = localStorage.getItem("cart");
  if (products) {
    emptyText.style.display = "none";
  } else {
    emptyText.style.display = "flexbox";
    emptyText.style.display = "inline-block";
  }
}

checkCart();
cargarProductos();
calculateTotal();

emptyCart.addEventListener("click", () => {
  const childrens = contenedordeProductos.children;
  const copy = Array.from(childrens);
  copy.forEach((item) => {
    contenedordeProductos.removeChild(item);
  });

  emptyText.style.display = "block";
  localStorage.clear();
  totalElement.innerHTML = "0";
});
