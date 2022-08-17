"use strict";

// En este ultimo desafío general vamos a utilizar el mismo array "Pizzas🍕":

//* 👉 Guardarlo en el local storage.
//* 👉 Renderizar HTML desde JS.
//* 👉 Renderizar en cards todas las pizzas del array (Incluir nombre, imagen, precio e ingredientes).
//* 👉 Crear una barra de búsqueda (input), la cual tenga la función de mostrarnos solo las pizzas cuyos nombres coincidan con la búsqueda realizada.

const pizzaList = [
	{
		id: 2,
		nombre: "Pizza Hawaiana",
		ingredientes: [
			"Salsa de tomate",
			"rodajas de piña",
			"jamón cocido",
			"queso mozzarella rallado o en polvo",
			"cebolla",
			"Orégano",
		],
		precio: 450,
		img: "https://lechatmagazine.com/wp-content/uploads/2021/11/como-hacer-pizza-hawaiana-receta-PORTADA-le-chat-magazine.jpg",
	},
	{
		id: 4,
		nombre: "Pizza de Primavera",
		ingredientes: [
			"Salsa de tomate",
			"Muzzarella",
			"Tomates en rodajas",
			"2 Huevo duro",
			"Orégano",
			"Aceituna",
		],
		precio: 670,
		img: "https://pizzasargentinas.com/wp-content/uploads/2020/10/pizzza-de-primavera-816x459.jpg",
	},
	{
		id: 5,
		nombre: "Pizza de Panceta",
		ingredientes: [
			"Salsa de tomate",
			"Muzzarella",
			"Panceta",
			"Orégano",
			"Aceituna",
		],
		precio: 600,
		img: "https://www.solopizzas.info/wp-content/uploads/2021/01/White-and-Yellow-Simple-Fireworks-Photo-New-Year-Card-12-2.jpg",
	},
	{
		id: 7,
		nombre: "Pizza con Huevo Frito",
		ingredientes: [
			"Salsa de tomate",
			"Muzzarella",
			"4 Huevo frito",
			"Sal",
			"Orégano",
			"Aceituna de oliva",
		],
		precio: 500,
		img: "https://img.cocinarico.es/2021-07/pizza-con-huevos-1.webp",
	},
	{
		id: 8,
		nombre: "Pizza de Roquefort",
		ingredientes: [
			"Salsa de tomate",
			"Muzzarella",
			"Queso Roquefort",
			"Orégano",
			"Aceituna de oliva",
		],
		precio: 700,
		img: "https://pizzasargentinas.com/wp-content/uploads/2020/11/Pizza-de-roquefort-1024x905-1.jpg",
	},
	{
		id: 9,
		nombre: "Pizza de Calabresa",
		ingredientes: [
			"Salsa de tomate",
			"Muzzarella",
			"Rodajas de Calabresa",
			"Provenzal",
			"Orégano",
			"Aceituna de oliva",
		],
		precio: 460,
		img: "https://img.freepik.com/fotos-premium/pizza-calabrese-maiz_538646-5977.jpg?w=1380",
	},
];

//*📝 stringify() - Nos ayuda a convertir la matriz en una cadena
localStorage.setItem("pizzas", JSON.stringify(pizzaList));

//*------------_______ ✨ DATOS ✨ _______------------
let cardsContainer = document.querySelector("#cards-container");
//*📝 parse() - Nos permite analizar la cadena y construir un array de JS
let pizzasStorage = JSON.parse(localStorage.getItem("pizzas"));
const busqueda = document.getElementById("buscador");
const btnBuscador = document.getElementById("btn-buscador");
const btnResetFilter = document.getElementById("btn-resetFilter");

console.log(pizzasStorage);

//*------------_______ ✨ FUNCIONES ✨ _______------------
displayCards(pizzasStorage);

//*🔎 Funcion Buscador de Pizzas
btnBuscador.addEventListener("click", (e) => {
	e.preventDefault();
	const pizzas = JSON.parse(localStorage.getItem("pizzas"));
	const pizzaInput = busqueda.value.trim().toLowerCase();

	const pizzaResultado = pizzas.filter((pizza) =>
		pizza.nombre.toLowerCase().includes(pizzaInput)
	);

	if (pizzaResultado.length > 0) displayCards(pizzaResultado);
	if (pizzaResultado.length === 0)
		cardsContainer.innerHTML = `<div class="headings">
			<h2>Sin Resultados</h2>
			<h3>No se encontro ningun resultado con "${pizzaInput}"</h3>
		</div>`;

	busqueda.value = "";
});

//*✨ Funcion Reset Filtro
btnResetFilter.addEventListener("click", (e) => {
	e.preventDefault();
	displayCards(JSON.parse(localStorage.getItem("pizzas")));
	busqueda.value = "";
});

//*✨ Funcion Mostrar info del Array de Pizza
function displayCards(pizzas) {
	cardsContainer.innerHTML = "";

	pizzas.forEach((pizza) => {
		//*📝 Creacion del elemento padre
		let ingredientesUl = document.createElement("ul");

		//*📝 Agregando elemento dentro del elemento Padre
		pizza.ingredientes.forEach((ingrediente) => {
			ingredientesUl.insertAdjacentHTML("beforeend", `<li>${ingrediente}</li>`);
		});

		//*📝 Plantilla HTML que se insertara en el elemento padre de las Cards
		let html = `
    <article class="card">
        <header class="card__header">
          <h3>${pizza.nombre}</h3>
        </header>
        <div class="card__content">
          <img src="${pizza.img}" alt="${pizza.nombre}">
					${ingredientesUl.outerHTML}
        </div>
          
        <footer>Precio: <strong>$${pizza.precio}</strong></footer>
      </article>`;

		//*📝 Insertando la card en el elemento contenedor de las cards
		cardsContainer.insertAdjacentHTML("beforeend", html);
	});
}
