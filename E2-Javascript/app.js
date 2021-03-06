// Crear el array de objetos "Pizzas". 🍕
// 👉 Debemos crear 6 objetos como mínimo.
// 👉 Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista).

// 🔥 Crear una iteración del array que imprima en consola:
// a) Las pizzas que tengan un id impar.
// b) ¿Hay alguna pizza que valga menos de $600?
// c) Los nombres de todos las pizzas.
// d) Los precios de las pizzas.
// e) El nombre de cada pizza con su respectivo precio.

const arreglo = [
	{
		id: 3,
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
console.log(arreglo);

// A
console.log("🔥 a) Las pizzas que tengan un id impar.");
arreglo.forEach(({ nombre, id }) => {
	if (id % 2 !== 0) console.log(`La ${nombre} con id ${id}: es impar`);
});

// B
console.log("\n\n🔥 b) ¿Hay alguna pizza que valga menos de $600?");
const b = arreglo.some(({ precio }) => precio < 600); // True or False
console.log(`${b ? "Si, si hay" : "No, no hay"} pizza que valga menos de $600`);

// C
console.log("\n\n🔥 c) Los nombres de todos las pizzas.");
arreglo.forEach(({ nombre }, i) => console.log(`${i + 1}) ${nombre}`));

// D
console.log("\n\n🔥 d) Los precios de las pizzas.");
const precioPizzas = arreglo.forEach(({ precio }, i) =>
	console.log(`${i + 1}) $${precio}`)
);

//E
console.log("\n\n🔥 e) El nombre de cada pizza con su respectivo precio.");
arreglo.forEach(({ nombre, precio }, i) =>
	console.log(`${i + 1}) ${nombre}: $${precio}`)
);
