// Define an array of magician names
let magicianNames = ["magician1", "magician2", "magician3", "magician4", "magician5"];

// Function to show magician names
const show_magicians = (magiciansArray:string[]) => {
    for (const magician of magiciansArray) {
        console.log(magician);
    }
}

// Call the function and pass the array
show_magicians(magicianNames);
const make_great = (magiciansArray:string[]) => {
    
   for(let i = 0;i < magicianNames.length ;i++){
          magicianNames[i] = "The Great " + magicianNames[i]; 
   }
}
make_great(magicianNames);

