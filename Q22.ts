const countries = ["United States", "Canada", "United Kingdom", "Germany", "France", "Japan", "Australia", "Brazil", "India", "China"];

// Try to access an element using an out-of-bounds index
const invalidIndex = 15; // This index is out of bounds for the array
console.log(countries[invalidIndex]); // This will result in an index error

// Correct the error by using a valid index
const validIndex = 3; // A valid index within the array bounds
console.log(countries[validIndex]); // This will print the country at the valid index
