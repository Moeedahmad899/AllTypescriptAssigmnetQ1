let usernames:string[] = ["moeed","john","john2","admin","john3"];
// usernames.splice(0); we could use this to move all the elements from the array
// then the else conidtion would become true 
if(usernames.length!=0){
    for(let i =0; i< usernames.length;i++){
        if(usernames[i] === "admin"){
            console.log(` Hello ${usernames[i]}, would you like to see a status report?`);
        } else{
            console.log(` Hello ${usernames[i]}, thank you for logging in again.`);
        }
        
    }
} else{
   console.log("We need to find some users!")
}
