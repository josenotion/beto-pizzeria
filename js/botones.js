const boton = document.querySelector(".boton-der");
const next = document.querySelector(".boton-izq");
const slider = document.querySelector(".container-card");

boton.addEventListener("click", () => {
  slider.scrollLeft -= 300;
});
next.addEventListener("click", () => {
  slider.scrollLeft += 300;
});
