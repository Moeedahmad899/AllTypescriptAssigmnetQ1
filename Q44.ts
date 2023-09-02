let sandwiches = ["Ham","cheese","mayo"];
const createSandwich = (items:string[]) => {
  console.log("Sandwich Summary:");
  if (items.length === 0) {
      console.log("You ordered an empty sandwich. Please select some items.");
  } else {
      console.log("You ordered a sandwich with:");
      for (const item of items) {
          console.log("- " + item);
      }
  }
  console.log("----------------------");
};
createSandwich(sandwiches);
