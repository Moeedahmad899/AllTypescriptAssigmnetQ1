// this program is converting the srings to titlecase, uppercase and lowercase
// for the titlecase i have create my own function to convert strings to titlecase
const str:string  = "hello world in typescript!";
const toTitleCase= (inputStr:string):string =>{
    let titleCaseStr = "";
    let words_arr = inputStr.split(" ");
    for(let i=0;i<words_arr.length;i++){
        titleCaseStr += words_arr[i].charAt(0).toUpperCase() + words_arr[i].slice(1) ;  
       // is current index is the last index of its arary? if it is give the space otherwise won't
        if(i !== words_arr.length-1){
            titleCaseStr += " ";
            
        }
    }
return titleCaseStr;
}
console.log(toTitleCase(str))
console.log(str.toUpperCase())
console.log(str.toLowerCase())

// ============================== //
// this is the second program //
// in this program i am iterating over my array and printing message to each person/arry element

const names:string[] = ["moeed","naveed","ali"];
const message:string = "Hi, how are you doing today? "
for(let i =0; i<names.length;i++){
    console.log(`${message} ${names[i]}`)
}







