
const carrito = [];

const contenedordeProductos = document.querySelector("#contenedor-productos");
const emptyCart = document.querySelector("#carrito-acciones-vaciar");
const botonComprar = document.querySelector("#carrito-acciones-comprar");
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

// quiero que agradecer o informar si no hay productos para comprar con esta funcion 
botonComprar.addEventListener("click", () => {

  
        if(   totalElement.innerHTML === "0" ) { 
          totalElement.innerHTML = "0" ;
          Swal.fire(
          'No hay productos en carrito ',
          'Porfavor selecciona una compra',
          'warning'
        );
                 } else {
                  if ( totalElement != "0" ){ 

                    const childrens = contenedordeProductos.children;
                    const copy = Array.from(childrens);
                    copy.forEach((item) => {
                      contenedordeProductos.removeChild(item);
                    });
                  
                    emptyText.style.display = "block";
                    localStorage.clear();
                    totalElement.innerHTML = "0";
                    
                    Swal.fire({
                    icon: 'success',
                    title: 'Gracias por su compra',
                    width: 600,
                    padding: '0.1em',
                    color: '#000000 ',
                    background: '#fff url(/images/trees.png)',
                    backdrop: `
                    rgba(255, 5, 38, 0.452);
                      url("/images/nyan-cat.gif")
                      left top
                      no-repeat ` });}
                 }
 
});

