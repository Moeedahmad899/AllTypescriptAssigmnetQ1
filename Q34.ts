const favoritePizzas = ["Pepperoni", "Margherita", "Hawaiian"];

console.log("My favorite pizzas:");

for (const pizza of favoritePizzas) {
    console.log(pizza);
}

console.log("\nStatements about each pizza:");

for (const pizza of favoritePizzas) {
    console.log(`I like ${pizza.toLowerCase()} pizza.`);
}

console.log("\nHow much I like pizza:");

console.log("I really love pizza!");
