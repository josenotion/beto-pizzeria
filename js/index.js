//mi array de productos llamado pizzas
const pizzas = [
  {
    id: 1,
    nombre: "Calabresa",
    precio: 3500,
    cantidad: 0,
    img: "Calabresa-img.jpg",
  },
  {
    id: 2,
    nombre: "Doble Muzza",
    precio: 3500,
    cantidad: 0,
    img: "DobleMuzza-img.png",
    destacado: 1,
  },
  {
    id: 3,
    nombre: "Fugazzeta",
    precio: 3500,
    cantidad: 0,
    img: "Fugazzeta-img.jpg",
  },
  {
    id: 4,
    nombre: "Jamon",
    precio: 3500,
    cantidad: 0,
    img: "Jamon--img.jpg",
  },
  {
    id: 5,
    nombre: "Jamon y Morron",
    precio: 3500,
    cantidad: 0,
    img: "JamonyMorron-img.jpg",
  },
  {
    id: 6,
    nombre: "Muzza",
    precio: 3500,
    cantidad: 0,
    img: "Muzza-img.png",
  },
  {
    id: 7,
    nombre: "Napolitana",
    precio: 3500,
    cantidad: 0,
    img: "Napolitana--img.jpg",
  },
  {
    id: 8,
    nombre: "Rucula",
    precio: 3500,
    cantidad: 0,
    img: "Rucula-img.jpg",
  },
];
class Producto {
  constructor(id, nombre, precio, img) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.img = img;
    this.cantidad = 1;
  }
}

const card = document.getElementById("contenedor-productos");
let buttonMain = document.querySelectorAll(".button-main");

//para volver dinamico mi html
pizzas.map((producto) => {
  card.innerHTML += `
    <div class="card producto">
    <h2 class="h2-jm">${producto.nombre}</h2>
    <img class="img-serv" src="./img/${producto.img}" alt="imagen de referencia de desarrolador"> 
    <p class="producto-precio">${producto.precio}</p>
    <button class="button-main"  id="${producto.id}">Agregar</button>
  </div>`;
});

//funcion para captar sonidos de mi boton, en caso de agregar o repetir esos productos
function ActualizarBotones() {
  buttonMain = document.querySelectorAll(".button-main");
  buttonMain.forEach((boton) => {
    boton.addEventListener("click", (event) => {
      const id = event.target.id;
      const pizza = pizzas.find((prod) => prod.id === parseInt(id));
      const cartItems = localStorage.getItem("cart");
      const cart = cartItems ? JSON.parse(cartItems) : [];
      const index = cart.findIndex((item) => item.id === pizza.id);

      if (index > -1) return Swal.fire(
        'Producto ya Seleccionado',
        'Por favor ingresa otro ',
        'warning'
      );
      cart.push(pizza);

      if (pizza) {
        count.innerHTML = cart.length;
        localStorage.setItem("count", cart.length);
        localStorage.setItem("cart", JSON.stringify(cart));
        Swal.fire({
          icon: 'success',
          title: 'Producto Agregado',
          width: 600,
          padding: '0.1em',
          color: '#000000 ',
          background: '#fff url(/images/trees.png)',
          backdrop: `
          rgba(255, 5, 38, 0.452);
            url("/images/nyan-cat.gif")
            left top
            no-repeat ` })
      }
    });
  });
}


let productoAdregado;

const carrito = [];


ActualizarBotones();

const button = document.querySelector("button");
const count = document.querySelector("#products-count");

function cartItems() {
  const number = localStorage.getItem("count");
  if (number) count.innerHTML = number;
}

cartItems();



