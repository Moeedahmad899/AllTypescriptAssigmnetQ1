let current_usernames:string[] = ["moeed","john","john2","admin","john3"];
let new_users:string[] = ["ADMIN","JOHN DOE"];



function checkUserNameAlreadyExits(current_usernames:string[],new_users:string[])
{
    for(let i= 0; i<new_users.length;i++){
        //    current_usernames.map(users => users.toUpperCase()).includes("ADMIN")
        if(current_usernames.includes(new_users[i]) || current_usernames.map(users => users.toUpperCase()).includes(new_users[i])){
            console.log(`This user name ${new_users[i]} is not available!`);
            
        }
        else{
            console.log("Yes this username is available!");
         }
    }
}
checkUserNameAlreadyExits(current_usernames,new_users);
if(current_usernames.length!=0){
    for(let i =0; i< current_usernames.length;i++){
        if(current_usernames[i] === "admin"){
            console.log(` Hello ${current_usernames[i]}, would you like to see a status report?`);
        } else{
            console.log(` Hello ${current_usernames[i]}, thank you for logging in again.`);
        }
        
    }
} else{
   console.log("We need to find some users!")
}
