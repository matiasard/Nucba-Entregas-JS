const ingredientes = [
	"Harina",
	"Levadura",
	"Salsa",
	"Queso mozzarella",
	"Peperoni",
	"Oregano",
	"Pimienta",
];

const par = [];
const impar = [];

const isPar = (arrIngredientes) => {
	arrIngredientes.forEach((element) => {
		if (element.length % 2 == 0) {
			par.push(element);
		} else {
			impar.push(element);
		}
	});
};

isPar(ingredientes);
console.log("\nš Array Par:");
console.log(par);
console.log("\nš Array Impar:");
console.log(impar);
