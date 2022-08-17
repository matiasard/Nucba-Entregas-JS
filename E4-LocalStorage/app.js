"use strict";

// En este ultimo desafío general vamos a utilizar el mismo array "Pizzas🍕":

//* 👉 Guardarlo en el local storage.
//* 👉 Renderizar HTML desde JS.
//* 👉 Renderizar en cards todas las pizzas del array (Incluir nombre, imagen, precio e ingredientes).
//* 👉 Crear una barra de búsqueda (input), la cual tenga la función de mostrarnos solo las pizzas cuyos nombres coincidan con la búsqueda realizada.

const pizzaList = [
	{
		id: 2,
		nombre: "Pizza hawaiana",
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
		nombre: "Pizza de primavera",
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
//*📝 parse() - Nos permite analizar la cadena y construir una matriz de JavaScript
// JSON.parse(localStorage.getItem(key));

//*✨ Variables Global
let cardsContainer = document.querySelector("#cards-container");

console.log(JSON.parse(localStorage.getItem("pizzas")));

const displayCards = function (pizzas) {
	cardsContainer.innerHTML = "";
	// console.log(pizzas[0].ingredientes);
	// pizzas.forEach((pizza) => {
	// 	console.log(pizza.ingredientes);
	// 	let ingredientes = document.createElement("li");
	// 	ingredientes.innerHTML += `<li>${ingrediente}</li>`;
	// });
	pizzas.forEach((pizza) => {
		let ingredientesUl = document.createElement("ul");

		pizza.ingredientes.forEach((ingrediente) => {
			// ingredientesUl.insertAdjacentHTML("beforeend", `<li>${ingrediente}</li>`);
			ingredientesUl.innerHTML += `<li>${ingrediente}</li>`;
		});

		// console.log(ingredientesUl.childNodes);
		console.log(ingredientesUl.outerHTML);

		// let textHtml = "";
		// ingredientesUl.childNodes.forEach(
		// 	(element) => (textHtml += element.outerHTML)
		// );

		let html = `
    <article class="card">
        <header>
          <h3>${pizza.nombre}</h3>
        </header>
        <div class="">
          <img src="${pizza.img}" alt="${pizza.nombre}">
					${ingredientesUl.outerHTML}
        </div>
          
        <footer>$${pizza.precio}</footer>
      </article>`;

		console.log(html);
		cardsContainer.insertAdjacentHTML("afterbegin", html);
	});
};

displayCards(JSON.parse(localStorage.getItem("pizzas")));
