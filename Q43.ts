// Define an array of magician names
let magicianNames = ["magician1", "magician2", "magician3", "magician4", "magician5"];

// Function to show magician names
const show_magicians = (magiciansArray:string[]) => {
    for (const magician of magiciansArray) {
        console.log(magician);
    }
}

const make_great = (magiciansArray:string[]):string[]  =>  {
   let newArray:string[]= [];
   for(let i = 0;i < magicianNames.length ;i++){
          newArray[i] = "The Great " + magicianNames[i]; 
   }
   return newArray;
}
const newArray:string[] = make_great(magicianNames);
// this is the original array
show_magicians(magicianNames);
// this is the array with added the great with each name
show_magicians(newArray);