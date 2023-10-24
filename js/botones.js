const boton = document.querySelector(".boton-der");
const next = document.querySelector(".boton-izq");
const slider = document.querySelector(".container-card");

boton.addEventListener("click", () => {
  slider.scrollLeft -= 300;
});
next.addEventListener("click", () => {
  slider.scrollLeft += 300;
});


const btnSwitch =document.querySelector ("#switch");

btnSwitch.addEventListener ("click", ()=>
{
    document.body.classList.toggle("dark");
    btnSwitch.classList.toggle("active");
//guardar modo nocturno 
    if(document.body.classList.contains("dark")){
      localStorage.setItem("dark-mode","true");
    } else{
      localStorage.setItem ("dark-mode", "false");
    }

});
// obtener el modo actual 
if (localStorage.getItem ("dark-mode") === "true" ){
  document.body.classList.add("dark");
  btnSwitch.classList.add("active");
}else {
  document.body.classList.remove("dark");
  btnSwitch.classList.remove("active");
}

