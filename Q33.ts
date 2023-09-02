let ordinalNum:number[] =[1,2,3,4,5,6,7,8,9];

for(let i=1;i<=ordinalNum.length;i++){
    let str = "";
    if(i===1){
        str = [i]+"st";
    }
    else if(i===2){
        str = [i]+"nd";
    }
    else if(i===3){
        str = [i]+"rd";
    }else {
        str= [i]+"th";
    }
    console.log(str);
    
    
}