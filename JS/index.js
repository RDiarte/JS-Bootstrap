import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { renderCatalogue } from "./helpers.js";
import { mockData } from "./mock.js";

//1- Inicializaciones de variable/ constantes

//2- Seleccionar elementos HTML
const root = document.getElementById("root");

//3- Trabajo con la logica
MOCKDATA.forEach((data) => {
  //1 creo el contenedor o primer elemento
  const card = document.createElement("div");
  card.className = "card";
  //2 Inyecto a este elemento el resto del codigo
  card.innerHTML = `<img src=${data.image} style="width: 100px" class="card-img-top" alt=${data.title}>
  <div class="card-body">
    <h5 class="card-title">${data.title}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <p class="h2">${data.price}</p>
  </div>`;
  //3 unimos este objeto al div que esta en el html
  root.appendChild(card);
});

//4- Revisar si hay que "hacer limpieza"
