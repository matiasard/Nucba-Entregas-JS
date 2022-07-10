const arreglo = [
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
	},
];

const valorIngresado = document.getElementById("valor");
const bntAccion = document.getElementById("btnEnviar");
const tagH2 = document.getElementById("tituloH2");
const tagH4 = document.getElementById("precio");
let pizza = "";

bntAccion.addEventListener("click", mostrarResultados);

function mostrarResultados() {
	if (valorIngresado.value === "") {
		tagH2.textContent = "Por favor ingrese un numero";
		tagH4.textContent = "";
		return;
	}
	//* Buscar por ID
	let pizza = buscarId(valorIngresado.value);

	//* Mostrar Resultado en H2 y H4
	// tagH2.textContent =
	// 	pizza?.nombre ||
	// 	`No se encontro resultado con la busqueda id: ${valorIngresado.value}`;
	// tagH4.textContent = pizza?.precio;
	if (pizza == undefined) {
		tagH2.textContent = `No se encontro resultado con la busqueda id: "${valorIngresado.value}"`;
		tagH4.textContent = "";
	} else {
		tagH2.textContent = `🍕Nombre: ${pizza.nombre}`;
		tagH4.textContent = `💲Precio: ${pizza.precio}`;
	}

	//* Reset valor input
	valorIngresado.value = "";
}

function buscarId(idPizza) {
	//* Funcion find(): Se utiliza para buscar un valor del array y devuelve el elemento del array que concida
	let pizza = arreglo.find((elemento) => elemento.id == idPizza);
	console.log(pizza);

	//* Retornar el resultado de la busqueda
	return pizza;
}
