// Tests for equality and inequality with strings
console.log("hello" === "h" +"ello");
console.log("apple" !== "apple");  
// Tests using the lower case function
let color = "RED";
console.log(color.toLocaleLowerCase() == color);

// Numerical tests involving equality and 
// greater than and less than, greater than or equal to, and less than or equal to
console.log(5 === 5);    // true - both sides are equal
console.log(7 !== 7); 
// Greater Than and Less Than:
console.log("7" > "5");
// Greater Than or Equal To and Less Than or Equal To:
console.log(5 >= 5);
console.log(6 <= 4); 

console.log(10 > 5 && 7 < 12);
console.log(10 > 5 && 8 < 6);
console.log(10 > 5 || 7 < 12);
console.log(10 > 5 || 8 < 6);

//  Test whether an item is in a array
let array:string[] = ["C++"];

if(array.includes("C++")){
console.log("Item in an array");
}else {
    console.log("Item is not in array");
}


