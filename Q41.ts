// Define an array of magician names
const magicianNames = ["magician1", "magician2", "magician3", "magician4", "magician5"];

// Function to show magician names
const  show_magicians = (magiciansArray:string[]) => {
    for (const magician of magiciansArray) {
        console.log(magician);
    }
}

// Call the function and pass the array
show_magicians(magicianNames);
