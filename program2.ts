// Store the person's name in a variable
let personName: string = "mooed";

// Print the person's name in lowercase
console.log("Lowercase:", personName.toLowerCase());

// Print the person's name in uppercase
console.log("Uppercase:", personName.toUpperCase());

// Print the person's name in titlecase
function toTitleCase(str: string): string {
  return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

console.log("Titlecase:", toTitleCase(personName));
