const animals = ["Dog", "Cat", "Rabbit"];

console.log("Animals with a common characteristic:");

for (const animal of animals) {
    console.log(animal);
}

console.log("\nStatements about each animal:");

for (const animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

console.log("\nWhat these animals have in common:");

console.log("Any of these animals would make a great pet!");
