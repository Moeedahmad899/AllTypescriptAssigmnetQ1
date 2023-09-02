interface CarObj{
    manufacturer:string;
    model_name:string;
    // [key: string]: any;
    [key: string]:any;
 }
 
 const carInfo = (manufacturer:string,model_name:string,...args:string[]) => {
     const carObj:CarObj=  { 
           manufacturer: manufacturer,
           model_name :model_name,
 
     };
 
     for(let i=0;i<args.length;i+=2){
        carObj[args[i]] = args[i+1];        
     }
     return carObj;
 }
 
 
  const obj = carInfo("Atlas Honda Limited","honda","key1","value1","key2","value2"); 
 
 console.log(obj);
 
   