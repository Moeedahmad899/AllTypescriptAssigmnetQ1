const str:string  = "hello world in typescript!";
const toTitleCase = (inputStr:string):string =>{
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




